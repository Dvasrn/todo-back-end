export const GET = (req: Request, res: any) => {
  console.log("Get huselt");
  // return new Error("error")

  return Response.json({
    id: "INV001",
    title: "Job to do 1",
    status: "PENDING",
    team: "My-1",
  });
};

// export const DELETE = () => {};
