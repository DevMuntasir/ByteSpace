import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  description: "Sign in to ByteSpace and explore a world of knowledge.",
  title: "Sign In | ByteSpace",
};

export default function SigninPage() {
  return (
    <AuthLayout
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      title="Sign in with ease"
    >
      <SignupForm isLogin />
    </AuthLayout>
  );
}
