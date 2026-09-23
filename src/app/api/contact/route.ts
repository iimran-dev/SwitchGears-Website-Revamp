import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional().nullable(),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional().nullable(),
  industry: z.string().max(80).optional().nullable(),
  panelType: z.string().max(80).optional().nullable(),
  requirement: z.string().min(5).max(2000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  try {
    const inquiry = await db.contactInquiry.create({
      data: {
        name: parsed.data.name,
        company: parsed.data.company ?? null,
        email: parsed.data.email,
        phone: parsed.data.phone ?? null,
        industry: parsed.data.industry ?? null,
        panelType: parsed.data.panelType ?? null,
        requirement: parsed.data.requirement,
      },
    });
    return NextResponse.json({ ok: true, id: inquiry.id });
  } catch (err) {
    console.error("Contact inquiry error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
