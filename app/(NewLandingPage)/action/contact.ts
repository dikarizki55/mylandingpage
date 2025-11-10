"use server";

import { headers } from "next/headers";
import { supabase } from "@/lib/supabase/client";

export async function createMesssage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const headerList = await headers();

  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0].trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  const { error } = await supabase.from("landingMessage").insert([
    {
      name,
      email,
      message,
      ip_address: ip,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("Failed to insert message");
  }
}
