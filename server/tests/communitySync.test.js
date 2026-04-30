const request = require("supertest");
const { app } = require("../src/app");
const { User } = require("../src/models/User");
const { CommunityPost } = require("../src/models/CommunityPost");

const registerUser = async (userData) => {
  const response = await request(app).post("/api/auth/register").send(userData);
  return {
    accessToken: response.body.data.accessToken,
    user: response.body.data.user,
    cookie: response.headers["set-cookie"][0],
  };
};

describe("Community synchronization", () => {
  it("propagates submitted community profile data across related users and posts", async () => {
    const userA = await registerUser({
      name: "CaptainA",
      email: "captaina@example.com",
      password: "StrongPass1",
    });
    const userB = await registerUser({
      name: "CaptainB",
      email: "captainb@example.com",
      password: "StrongPass1",
    });

    await request(app)
      .post("/api/users/connections")
      .set("Authorization", `Bearer ${userB.accessToken}`)
      .send({ userId: userA.user.id, relation: "following" })
      .expect(200);

    await request(app)
      .post("/api/users/community-posts")
      .set("Authorization", `Bearer ${userA.accessToken}`)
      .send({ content: "Initial community post", tags: ["space"] })
      .expect(201);

    await request(app)
      .patch("/api/users/community-profile")
      .set("Authorization", `Bearer ${userA.accessToken}`)
      .send({
        name: "CaptainA Prime",
        avatarUrl: "https://example.com/new-avatar.png",
        headline: "Deep Space Mentor",
        community: { expertiseLevel: "advanced" },
      })
      .expect(200);

    const updatedUserB = await User.findById(userB.user.id);
    const updatedConnection = updatedUserB.community.connections.find(
      (item) => item.userId.toString() === userA.user.id,
    );
    expect(updatedConnection).toBeDefined();
    expect(updatedConnection.communitySnapshot.name).toBe("CaptainA Prime");
    expect(updatedConnection.communitySnapshot.avatarUrl).toBe(
      "https://example.com/new-avatar.png",
    );
    expect(updatedConnection.communitySnapshot.expertiseLevel).toBe("advanced");

    const updatedPost = await CommunityPost.findOne({ "author.userId": userA.user.id });
    expect(updatedPost.author.name).toBe("CaptainA Prime");
    expect(updatedPost.author.avatarUrl).toBe("https://example.com/new-avatar.png");
    expect(updatedPost.author.headline).toBe("Deep Space Mentor");
  });
});
