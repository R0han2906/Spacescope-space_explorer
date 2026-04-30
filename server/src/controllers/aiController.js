const { StatusCodes } = require("http-status-codes");
const { env } = require("../config/env");
const { ApiError } = require("../utils/apiError");
const { asyncHandler } = require("../utils/asyncHandler");

const SYSTEM_PROMPT =
  "You are SpaceScope Intelligence, a concise and accurate space science assistant. Answer clearly, avoid hallucinations, and if uncertain say so.";

const askAi = asyncHandler(async (req, res) => {
  if (!env.groqApiKey) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "AI provider key is not configured on server",
    );
  }

  const prompt = req.body.prompt.trim();

  const upstreamResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.groqApiKey}`,
    },
    body: JSON.stringify({
      model: env.groqModel,
      temperature: 0.4,
      max_tokens: 500,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
    }),
  });

  const upstreamPayload = await upstreamResponse.json();

  if (!upstreamResponse.ok) {
    throw new ApiError(
      StatusCodes.BAD_GATEWAY,
      upstreamPayload?.error?.message || "Failed to get AI response",
    );
  }

  const answer = upstreamPayload?.choices?.[0]?.message?.content?.trim();
  if (!answer) {
    throw new ApiError(StatusCodes.BAD_GATEWAY, "AI returned an empty response");
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: { answer, model: env.groqModel },
  });
});

module.exports = { askAi };
