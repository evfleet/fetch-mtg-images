export default function(str: string) {
  return str.replace(/\s+/g, "-").toLowerCase();
}
