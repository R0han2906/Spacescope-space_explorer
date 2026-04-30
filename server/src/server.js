const { app } = require("./app");
const { env } = require("./config/env");
const { connectDatabase } = require("./config/db");

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(env.port, () => {
      // eslint-disable-next-line no-console
      console.log(`SpaceScope API listening on port ${env.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
