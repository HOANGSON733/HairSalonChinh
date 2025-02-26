"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Thay thế bằng API xác thực thực tế
      const isValidUser = email === "admin@example.com" && password === "password";

      if (isValidUser) {
        router.push("/admin/dashboard");
      } else {
        setError("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          <i className="fas fa-lock text-blue-500 mr-2"></i>
          Đăng Nhập Admin
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border p-3 rounded-md mt-2 focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              placeholder="Nhập email của bạn"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full border p-3 rounded-md mt-2 focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              aria-label="Password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
}
