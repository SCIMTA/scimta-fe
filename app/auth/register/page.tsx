import Link from "next/link";
import { Form } from "@/app/ui/auth/login-form";
import { SubmitButton } from "@/app/ui/auth/submit-button";
// import { signIn } from "app/auth";
import { signUp } from "@/app/actions/auth";
import { SignUpForm } from "@/app/ui/auth/register-form";

export default function SignUp() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign up
          </p>
        </div>
        <SignUpForm
          action={async (formData: FormData) => {
            "use server";
            await signUp(formData);
          }}
        >
          <SubmitButton>Sign up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Already have an account? "}
            <Link href="/login" className="font-semibold text-gray-800">
              Login
            </Link>
            {" to prove it!"}
          </p>
        </SignUpForm>
      </div>
    </div>
  );
}
