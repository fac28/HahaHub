const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("POST without message is rejected", async () => {
  const { status } = await request("/", {
    method: "POST",
    body: "nickname=nich",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 400);
}
);

test("POST with empty message is rejected", async () => {
  const { status } = await request("/", {
    method: "POST",
    body: "nickname=nich&message=",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 400);
}
);

test("POST with both nickname and message is accepted", async () => {
  const { status } = await request("/", {
    method: "POST",
    body: "nickname=nich&message=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
}
);

test("POST without nickname is recorded as anonymous", async () => {
  const { status, body } = await request("/", {
    method: "POST",
    body: "message=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
  assert.match(body, /<li>anonymous: hello<\/li>/i);
}
);

test("POST with empty nickname is recorded as anonymous", async () => {
  const { status, body } = await request("/", {
    method: "POST",
    body: "nickname=&message=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
  assert.match(body, /<li>anonymous: hello<\/li>/i);
}
);
