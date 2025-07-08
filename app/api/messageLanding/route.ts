import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // get ip
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const { error } = await supabase.from("landingMessage").insert([
    {
      ...body,
      ip_address: ip,
    },
  ]);

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "failed to insert" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
