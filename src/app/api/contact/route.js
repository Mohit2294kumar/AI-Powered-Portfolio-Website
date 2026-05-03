import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          message: "Message received. MongoDB is not configured yet, so it was not persisted."
        },
        { status: 200 }
      );
    }

    await connectToDatabase();
    await Message.create({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim()
    });

    return NextResponse.json({ message: "Message saved successfully." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unable to process contact form." },
      { status: 500 }
    );
  }
}
