const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let memoryServer;

beforeAll(async () => {
  memoryServer = await MongoMemoryServer.create();
  const uri = memoryServer.getUri();
  await mongoose.connect(uri);
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  const cleanupTasks = Object.keys(collections).map((key) =>
    collections[key].deleteMany({}),
  );
  await Promise.all(cleanupTasks);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await memoryServer.stop();
});
