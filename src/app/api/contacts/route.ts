import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const GET = withApiAuthRequired(async function () {
  const fakeUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      name: "Sam Smith",
      email: "sam.smith@example.com",
    },
    {
      id: 4,
      name: "Sally Smith",
      email: "sally.smith@example.com",
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom.brown@example.com",
    },
  ];

  return NextResponse.json(
    { contacts: fakeUsers },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
});
