const request = require("supertest");
const { app } = require("../src/app");

describe("Authentication flows", () => {
  const credentials = {
    name: "AstronautOne",
    email: "astro1@example.com",
    password: "StrongPass1",
  };

  it("registers a user and returns access token + refresh cookie", async () => {
    const response = await request(app).post("/api/auth/register").send(credentials);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.user.name).toBe(credentials.name);
    expect(response.body.data.accessToken).toBeDefined();
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("logs in with identifier and rotates refresh token", async () => {
    await request(app).post("/api/auth/register").send(credentials);
    const loginResponse = await request(app).post("/api/auth/login").send({
      identifier: credentials.email,
      password: credentials.password,
    });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.data.accessToken).toBeDefined();

    const cookie = loginResponse.headers["set-cookie"][0];
    const refreshResponse = await request(app)
      .post("/api/auth/refresh-token")
      .set("Cookie", cookie)
      .send({});

    expect(refreshResponse.status).toBe(200);
    expect(refreshResponse.body.data.accessToken).toBeDefined();
  });

  it("logs out successfully and clears refresh cookie", async () => {
    await request(app).post("/api/auth/register").send(credentials);
    const loginResponse = await request(app).post("/api/auth/login").send({
      identifier: credentials.name,
      password: credentials.password,
    });
    const cookie = loginResponse.headers["set-cookie"][0];

    const logoutResponse = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", cookie)
      .send({});

    expect(logoutResponse.status).toBe(200);
    expect(logoutResponse.body.success).toBe(true);
  });
});
