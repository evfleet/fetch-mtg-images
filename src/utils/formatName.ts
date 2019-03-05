export default function(str: string): string {
  return str.replace(/\s+/g, "-").toLowerCase();
}
