import supertest from "supertest";
import app from "./app.js";

test("Should return 404 when Maintenance Mode", () => {
  const response = request(app).post("/maintenance".send);
});

test();
