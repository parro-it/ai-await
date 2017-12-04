export default async function aiAwait(data) {
  for (const item of data) {
    await item;
  }
}
