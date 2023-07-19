import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(_, { params }) {
  const { slug } = params;
  await prisma.views.upsert({
    where: {
      slug: slug,
    },
    update: {
      views: {
        increment: 1,
      },
    },
    create: {
      slug: slug,
      views: 1,
    },
  });
  return NextResponse.json({ status: "ok" }, { status: 200 });
}

export async function GET(_, { params }) {
  const { slug } = params;
  let res = await prisma.views.findFirst({
    where: {
      slug: slug,
    },
  });
  return NextResponse.json({ data: res }, { status: 200 });
}
