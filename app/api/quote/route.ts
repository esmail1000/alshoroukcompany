import { NextResponse } from "next/server";

type QuoteRequest = {
  name?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  location?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest;

    if (!body.name || !body.phone || !body.product || !body.quantity || !body.location) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // هنا يمكن إضافة Nodemailer / Resend / قاعدة بيانات / Google Sheets لاحقًا
    console.log("New quote request:", body);

    return NextResponse.json({ ok: true, message: "Quote request received" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
