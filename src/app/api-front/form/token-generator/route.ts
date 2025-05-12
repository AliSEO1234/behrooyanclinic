// /app/api/form/token-generator/route.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token =
      "1b716a6b5de13475d128a4a09ce98a4dd378652582aee51111d3a2f322a5044d";
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${url}/form/token-generator`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      const error = await response.data;
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.data.token;
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", errorMessage: error },
      { status: 500 }
    );
  }
}
