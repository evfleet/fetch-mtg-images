export default function delay(time: number, data: any): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, data), time);
  });
}
