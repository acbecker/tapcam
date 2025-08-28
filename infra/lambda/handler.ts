export async function main(event: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda' })
  };
}
