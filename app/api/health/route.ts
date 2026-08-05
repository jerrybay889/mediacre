import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ status: "ok", service: "mediacre", version: "0.7.0" }, { headers: { "Cache-Control": "no-store" } }); }
