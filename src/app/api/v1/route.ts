export async function GET() {
  return Response.json(
    {
      name: "Tasks",
      description: "Tasks helps to manage your tasks effeciciently.",
      version: "1.0.0",
      api: {
        lists: "/api/v1/lists",
        tasks: "/api/v1/tasks",
      },
    },
    { status: 200 },
  );
}
