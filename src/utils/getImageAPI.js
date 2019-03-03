export default function(url) {
  return fetch(url).then((res) => res.blob());
}
