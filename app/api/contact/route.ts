import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const details = String(data.get("details") || "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  console.info("[contact inquiry]", {
    name,
    phone,
    email,
    details,
  });

  return NextResponse.json({ ok: true });
}
