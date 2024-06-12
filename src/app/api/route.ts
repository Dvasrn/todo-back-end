export const GET = (req: Request, res: any) => {
  console.log(req.url.search);
  console.log("Get huselt");
  return Response.json({
    message: "message",
    number: 12,
  });
};

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  return Response.json({ message: "Create Post" });
};

// export const DELETE = () => {};

// export const POST = (req:  Request, res:  any) => {
//     console.log("Get huselt");
//     return Response.json({ message : "bi irlee" });
// };
console.log("orsn shvv ");
console.log("orsn shvv ");
console.log("orsn shvv ");
console.log("orsn shvv ");
console.log("orsn shvv ");

