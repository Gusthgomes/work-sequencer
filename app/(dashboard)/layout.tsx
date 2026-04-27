import Navbar from "@/app/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-16 min-h-screen">{children}</main>
    </div>
  );
}
