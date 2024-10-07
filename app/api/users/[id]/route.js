import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
import fs from "fs";

export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}


export async function POST(req, res) {
    let { name, email, password } = await req.json();
    const { id } = await res.params;
  
    const {
      name: uName,
      email: uEmail,
      password: uPassword,
    } = users.find((u) => u.id === id);
  
    if (uName === name && uEmail === email && uPassword === password) {
      return NextResponse.json({ result: "success" });
    } else if (!name || !email || !password) {
      return NextResponse.json({ result: "error" });
    } else {
      return NextResponse.json({ result: "Invalid" });
    }
  }
  

  export async function DELETE(req, res) {
    const { id } = await res.params;
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return NextResponse.json({ result: "User not found" });
    }

    users.splice(userIndex, 1);
    const updatedUsersArray = users;
    const updatedData = JSON.stringify(updatedUsersArray, null, 2);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData}`,
      "utf8"
    );

    return NextResponse.json({success: "Success Delete"});
}