import { Claims, getSession } from "@auth0/nextjs-auth0";

export default async function getUserProfileData(): Promise<Claims> {
  const session = await getSession();
  if (!session || !session.user) {
    throw new Error("Requires authentication");
  }

  return session.user;
}
