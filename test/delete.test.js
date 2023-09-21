const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("Delete joke with valid id is accepted", async () => {
  // make a post
  const { status, body } = await request("/", {
    method: "POST",
    body: "nickname=nich&jokeInput=hello",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  assert.equal(status, 200);
  
  // get the id of the new post in form action
  const id = body.match(/action="\/delete(.*?)"/i)[1];
  console.log(`id is ${  id}`);

  //delete the post
  const { status: deleteStatus } = await request(`/delete${id}`, {
    method: "POST",
  });
  assert.equal(deleteStatus, 200);
} );