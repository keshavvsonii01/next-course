import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.json({success: "success"});
}

export const config = {
    matcher: ['/userslist/:path*']
}