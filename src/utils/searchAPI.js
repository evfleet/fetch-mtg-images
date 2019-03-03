export default async function(query) {
  const results = await fetch(
    `https://api.scryfall.com/cards/search?q=${encodeURI(query)}&order=released`
  ).then((res) => res.json());

  if (results.status && results.status === 404) {
    return [];
  }

  return results.data.slice(0, 10);
}
