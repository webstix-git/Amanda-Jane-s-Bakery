import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const date = String(data.get("date") || "").trim();
  const item = String(data.get("item") || "").trim();
  const quantity = String(data.get("quantity") || "").trim();
  const details = String(data.get("details") || "").trim();
  const file = data.get("inspiration");

  if (!name || !email || !date) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and event date are required." },
      { status: 400 },
    );
  }

  const inspiration =
    file instanceof File && file.size > 0
      ? { name: file.name, type: file.type, size: file.size }
      : null;

  console.info("[order inquiry]", {
    name,
    email,
    date,
    item,
    quantity,
    details,
    inspiration,
  });

  return NextResponse.json({ ok: true });
}
