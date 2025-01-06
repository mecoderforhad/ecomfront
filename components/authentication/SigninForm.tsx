import { signIn } from "@/auth";

const SigninForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", { redirectTo: "/", formData });
      }}
      className="space-y-4 w-full max-w-sm"
    >
      <input required name="email" placeholder="email" />
      <input required name="password" type="password" placeholder="password" />
      <button className="w-full" type="submit">
        submit
      </button>
    </form>
  );
};

export default SigninForm;
