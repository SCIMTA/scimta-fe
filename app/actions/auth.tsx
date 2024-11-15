import { SignupFormSchema, FormState } from "@/app/lib/definitions";

export async function signUp(formData: FormData) {
  // Validate
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Submit
  console.log(process.env.BACKEND_URL);
  const response = await fetch(
    process.env.BACKEND_URL! + "/api/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);
}
