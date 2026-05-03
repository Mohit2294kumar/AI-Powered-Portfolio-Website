import { NextResponse } from "next/server";
import OpenAI from "openai";
import { portfolio } from "@/lib/portfolioData";

function localAnswer(question = "") {
  const q = question.toLowerCase();

  if (q.includes("project") || q.includes("projects")) {
    return `Featured projects are LiveConnect, a real-time MERN chat app with Socket.IO and JWT auth, and Streamify, a social media web app with secure auth, stories, follow system, and real-time chat.`;
  }

  if (q.includes("skill") || q.includes("tech stack") || q.includes("stack")) {
    return `Primary skills: React, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, Socket.IO, REST APIs, JWT, and Java/Spring fundamentals.`;
  }

  if (q.includes("contact") || q.includes("email")) {
    return `You can reach Mohit at K2004mohit@gmail.com or +91-9205674026.`;
  }

  if (q.includes("experience") || q.includes("internship")) {
    return `Mohit completed a Wipro TalentNext Java Full Stack internship and an AICTE-Eduskills Web Full Stack internship.`;
  }

  return `I am the assistant for ${portfolio.name}. Ask me about projects, skills, internships, education, or contact details.`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const last = messages.filter(Boolean).at(-1)?.content || "";

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: localAnswer(last) }, { status: 200 });
    }

    const client = new OpenAI({ apiKey });
    const systemPrompt = `
You are the assistant for a portfolio website. Answer only about the portfolio owner and the site.
Use the following context:
Name: ${portfolio.name}
Role: ${portfolio.role}
Summary: ${portfolio.summary}
Projects: ${portfolio.featuredProjects.map((p) => `${p.name} - ${p.subtitle} - ${p.description}`).join(" | ")}
Experience: ${portfolio.experience.map((e) => `${e.title} (${e.period})`).join(" | ")}
Education: ${portfolio.education.map((e) => `${e.title}, ${e.school}, ${e.note}`).join(" | ")}
Contact: Email K2004mohit@gmail.com, Phone +91-9205674026
Keep the answer concise, helpful, and professional.
`.trim();

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-8).map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: String(m.content || "")
        }))
      ],
      temperature: 0.4
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || localAnswer(last);
    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { reply: localAnswer(""), warning: error?.message || "OpenAI unavailable; using fallback." },
      { status: 200 }
    );
  }
}
