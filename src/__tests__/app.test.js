const request = require("supertest");

const app = require("../app");

describe("Test aggregation", () => {
  it("should return error when at least one required field is missing", async () => {
    const response = await request(app).post("/").send({});

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(
      expect.objectContaining({
        code: expect.any(Number),
        msg: expect.any(String),
      })
    );
    expect(response.body.code).toBe(1);
    expect(response.body.msg).toMatch(/Please provide/);
  });

  it("should return successful response with code, msg, and records", async () => {
    const data = {
      endDate: "2017-01-28",
      startDate: "2016-11-27",
      minCount: 2700,
      maxCount: 3000,
    };
    const response = await request(app).post("/").send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body.code).toBe(0);
    expect(response.body.msg).toEqual("success");
    expect(response.body.records).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          createdAt: expect.any(String),
          totalCount: expect.any(Number),
        }),
      ])
    );
  }, 10000);
});
