export async function GET() {
  return Response.json(
    {
      name: "Tasks",
      description: "Tasks helps to manage your tasks effeciciently.",
      version: "1.0.0",
      api: {
        v1: "/api/v1",
      },
    },
    { status: 200 },
  );
}
