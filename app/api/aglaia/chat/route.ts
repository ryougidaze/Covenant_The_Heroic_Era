import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/aglaia/system-prompt";
import type { ChatRequest, ChatResponse } from "@/lib/aglaia/types";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key 未配置，请检查服务端环境变量 DEEPSEEK_API_KEY" },
        { status: 500 }
      );
    }

    let body: ChatRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "请求格式错误" },
        { status: 400 }
      );
    }

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "缺少 messages 字段" },
        { status: 400 }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...body.messages,
    ];

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `DeepSeek API 错误: ${errorText}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "";

    const result: ChatResponse = { reply };
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "服务器内部错误" },
      { status: 500 }
    );
  }
}
