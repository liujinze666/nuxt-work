import type {User} from "@prisma/client";
import prisma from "../client";
import type {IUser} from "../types/IUser";

export async function getUserByEmail(email: string): Promise<IUser[]> {
  return await prisma.user.findUnique({
    where: {
      email,
    }
  })
}

export async function createUser(params:IUser) {
  const user = await prisma.user.create({
    data: {
      name: params.name,
      email: params.email,
    }
  })
  return user;
}
