import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

export function GET() {
  const data = users;
  return NextResponse.json({ data });
}

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      {
        result: "Req Field missing",
      },
      {
        status: 400,
      }
    );
  } else {
    users.push({
      id,
      name,
      email,
      password,
    });
    const updatedUsersArray = users;
    const updatedData = JSON.stringify(updatedUsersArray, null, 2);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData}`,
      "utf8"
    );

    return NextResponse.json({success: "Success"})
  }
};


export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

  const userIndex = users.findIndex((user) => user.id === id);

  if(userIndex === -1) {
    return NextResponse.json(
      {
        result: "User not found",
      },
      {
        status: 404,
      }
    );
  }
  if(name) {
    users[userIndex].name = name;
  }
  if(email) {
    users[userIndex].email = email;
  }
  if(password) {
    users[userIndex].password = password;
  }

  const updatedUsersArray = users;
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf8"
  );

  return NextResponse.json({success: "Success changed users"})
};