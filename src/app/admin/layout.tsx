import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { LogoutButton } from "./_components/LogoutButton";
import AdminSidebar from "./_components/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    const cb = encodeURIComponent("/admin");
    redirect(`/login?callbackUrl=${cb}`);
  }

  return (
    <div className="min-h-[100dvh] md:grid md:grid-cols-[16rem_1fr]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <div className="max-w-[1200px] w-full mx-auto p-4">
        <header className="flex items-center justify-between pb-3 mb-3 border-b">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <LogoutButton />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
