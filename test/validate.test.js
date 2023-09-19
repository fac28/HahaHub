const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("POST with empty message is rejected", async () => {
  const { status } = await request("/", {
    method: "POST",
    body: "nickname=nich&jokeInput=",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 400);
}
);

test("POST with both nickname and message is accepted", async () => {
  const { status } = await request("/", {
    method: "POST",
    body: "nickname=nich&jokeInput=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
}
);

test("POST with empty nickname is recorded as anonymous", async () => {
  const { status, body } = await request("/", {
    method: "POST",
    body: "nickname=&jokeInput=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
  assert.match(body, /<li>anonymous<\/li>/i);
}
);
