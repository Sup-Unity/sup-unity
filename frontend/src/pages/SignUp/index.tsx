import MainLayout from "../../layouts/LoggedOutLayout";
<<<<<<< HEAD:src/pages/SignUp/index.tsx
import "./SignUp.scss";

=======

import SUStyles from "./SignUp.module.scss";
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:frontend/src/pages/SignUp/index.tsx
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const lowercaseRegex = /[a-z]+/g;
const uppercaseRegex = /[A-Z]+/g;
const numRegex = /[0-9]+/g;
const symbolRegex = /[.{}[\]!@#$%^&*()?<>+=_\-/]+/g;

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(lowercaseRegex, {
        message: "Password must contain a lowercase letter.",
      })
      .regex(uppercaseRegex, {
        message: "Password must contain an uppercase letter.",
      })
      .regex(numRegex, { message: "Password must include a number" })
      .regex(symbolRegex, {
        message: "Password must include a symbol (.{}[]!@#$%^&*()?<>+=_-/).",
      }),
    verifyPassword: z.string(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: "Passwords do not match.",
    path: ["verifyPassword"],
  });

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const passwordState = useWatch({
    name: "password",
    control,
    defaultValue: "",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  // Delete this function once the "Already have an account" link is updated
  function directToLoginPage() {
    alert("This should direct the user to the login page.");
  }

  return (
    <MainLayout>
      <div className={SUStyles.signupFormWrapper}>
        <h1>Create Account</h1>
        <form onSubmit={onSubmit} className={SUStyles.signupForm}>
          <div className={SUStyles.signupFormGroup}>
            <label htmlFor="email">Email:</label>
            <input type="text" {...register("email")} />
          </div>
          {errors.email?.message && (
            <p role="alert">{errors.email?.message.toString()}</p>
          )}

          <div className={SUStyles.signupFormGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" {...register("password")} />
          </div>
          {errors.password?.message && (
            <p role="alert">{errors.password?.message.toString()}</p>
          )}
          <section id={SUStyles.passwordValidationList}>
            <ul>
              <li
                className={
                  passwordState.match(lowercaseRegex) ? SUStyles.validated : ""
                }
              >
                Lowercase letter
              </li>
              <li
                className={
                  passwordState.match(uppercaseRegex) ? SUStyles.validated : ""
                }
              >
                Uppercase letter
              </li>
              <li
                className={
                  passwordState.match(numRegex) ? SUStyles.validated : ""
                }
              >
                Number
              </li>
              <li
                className={
                  passwordState.match(symbolRegex) ? SUStyles.validated : ""
                }
              >
                Special Character
              </li>
            </ul>
          </section>
          <div className={SUStyles.signupFormGroup}>
            <label htmlFor="verifyPassword">Re-type Password:</label>
            <input type="password" {...register("verifyPassword")} />
          </div>
          {errors.verifyPassword?.message && (
            <p role="alert">{errors.verifyPassword?.message.toString()}</p>
          )}

          <button type="submit">Create account</button>

          <p className={SUStyles.signupHaveAccount}>
            Already have an account? Log in{" "}
            <a href="#" onClick={directToLoginPage}>
              here
            </a>
            .
          </p>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
