export default function(str) {
  const formattedStr = str.replace(/\s+/g, "-").toLowerCase();
  return formattedStr;
}
