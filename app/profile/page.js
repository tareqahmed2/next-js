import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"; // Used for redirection

export default async function ProfilePage() {
  // Get the session and user data
  const session = getKindeServerSession();
  const user = await session.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user?.given_name || "User"}!
        </h1>
        <p className="text-gray-600 mb-6">
          This is your personal profile page. Feel free to explore!
        </p>
      </div>
    </div>
  );
}
