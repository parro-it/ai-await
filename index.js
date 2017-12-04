export default async function awaitIterable(iterable) {
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);
  let item = {};
  while (!item.done) {
    item = await iterator.next();
  }
}
