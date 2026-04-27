"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/auth";
import { motion } from "framer-motion";

const NAV_ITEMS = {
  ADMIN: [
    { href: "/", label: "Dashboard", icon: "⬡" },
    { href: "/separacao", label: "Separação", icon: "📦" },
    { href: "/montagem", label: "Montagem", icon: "🔧" },
    { href: "/finalizadas", label: "Finalizadas", icon: "✅" },
    { href: "/relatorios", label: "Relatórios", icon: "📊" },
    { href: "/admin", label: "Admin", icon: "⚙️" },
  ],
  DALG: [
    { href: "/", label: "Dashboard", icon: "⬡" },
    { href: "/separacao", label: "Separação", icon: "📦" },
    { href: "/finalizadas", label: "Finalizadas", icon: "✅" },
  ],
  DPRO: [
    { href: "/", label: "Dashboard", icon: "⬡" },
    { href: "/montagem", label: "Montagem", icon: "🔧" },
    { href: "/finalizadas", label: "Finalizadas", icon: "✅" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  if (!user) return null;

  const items = NAV_ITEMS[user.role] ?? [];

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 flex items-center px-6">
      <Link href="/" className="flex items-center gap-2 mr-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          WS
        </div>
        <span className="text-white font-semibold text-sm hidden sm:block">
          Work Sequencer
        </span>
      </Link>

      <div className="flex items-center gap-1 flex-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-xs">{item.icon}</span>
                {item.label}
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-white text-xs font-medium">{user.name}</p>
          <p className="text-gray-400 text-xs">
            <span
              className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                user.role === "ADMIN"
                  ? "bg-purple-900 text-purple-300"
                  : user.role === "DALG"
                  ? "bg-yellow-900 text-yellow-300"
                  : "bg-blue-900 text-blue-300"
              }`}
            >
              {user.role}
            </span>
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 text-sm transition-colors"
        >
          Sair
        </motion.button>
      </div>
    </nav>
  );
}
