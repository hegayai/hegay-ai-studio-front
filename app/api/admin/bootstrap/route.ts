import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/src/core/db/client";

export async function POST() {
  try {
    // 1. Prevent running twice
    const existingAdminRole = await prisma.role.findUnique({
      where: { name: "admin" },
    });

    if (existingAdminRole) {
      return NextResponse.json(
        { error: "Bootstrap already completed. Remove this route." },
        { status: 400 }
      );
    }

    // 2. Create admin role
    const adminRole = await prisma.role.create({
      data: {
        name: "admin",
        description: "System administrator with full access",
      },
    });

    // 3. Create admin user
    const passwordHash = await bcrypt.hash("Admin@162000@", 10);

    const adminUser = await prisma.user.create({
      data: {
        email: "admin@hegay.ai",
        passwordHash,
        name: "Hegay OS Architect",
      },
    });

    // 4. Link user to admin role
    await prisma.userRole.create({
      data: {
        userId: adminUser.id,
        roleId: adminRole.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin user + role created successfully.",
      admin: {
        email: adminUser.email,
        role: adminRole.name,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Bootstrap failed" },
      { status: 500 }
    );
  }
}
