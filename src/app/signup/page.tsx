import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  description: "Join ByteSpace and start your learning journey.",
  title: "Create an Account | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthLayout
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      title="Sign up and come in"
    >
      <SignupForm />
    </AuthLayout>
  );
}
