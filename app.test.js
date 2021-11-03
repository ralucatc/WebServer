import supertest from "supertest";
import app from "./app.js";

describe("Running Endpoints", () => {
  test("GET /running should open first page", async () => {
    const res = await requestWithSupertest.get("/running");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("a.html"));
  });
});

describe("Maintenance Endpoints", () => {
  test("GET /maintenance should return 404", async () => {
    const res = await requestWithSupertest.get("/maintenance");
    expect(res.status).toEqual(404);
  });
});

describe("Stopped Endpoints", () => {
  test("GET /stopped should return timeout", async () => {
    const res = await requestWithSupertest.get("/stopped");
    expect(res.status).toEqual(404);
  });
});
