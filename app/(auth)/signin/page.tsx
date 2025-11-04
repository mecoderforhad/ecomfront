"use client";

import { loginSchema } from "@/lib/zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Signin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessages([]);

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;

    const validatedFields = loginSchema.safeParse({ phone, password });

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      const errorMessages = Object.values(errors).flat();
      setErrorMessages(errorMessages);
      setIsLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      phone,
      password,
    });

    setIsLoading(false);

    console.log("Sign-in result:", result);

    if (!result?.error) {
      toast.success("Login successful!")
    } else if (result?.error === "CredentialsSignin") {
      setErrorMessages(["Invalid credentials."]);
    } else if (result?.error === "Configuration") {
      toast.error("Please check your connection and try again.");
    } else {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete="tel"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          {errorMessages.length > 0 && (
            <ul className="text-sm text-red-500 list-disc pl-5 space-y-1">
              {errorMessages.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
