import test from "tape-async";
import aiAwait from ".";
import map from "ai-map";
import tap from "ai-tap";
import compose from "compose-function";

test("exports a function", async t => {
  const data = [];
  const double = map.with(n => n * 2);
  const add2 = map.with(n => n + 2);
  const calculate = compose(
    aiAwait,
    tap(item => data.push(item)),
    add2,
    tap(item => data.push(item)),
    double
  );

  await calculate([1, 2, 3]);
  t.is(data.join("\n"), "2\n4\n6\n4\n6\n8");
});
