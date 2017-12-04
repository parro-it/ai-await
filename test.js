import test from "tape-async";
import aiAwait from ".";

test("exports a function", async t => {
  t.is(typeof aiAwait, "function");
});
