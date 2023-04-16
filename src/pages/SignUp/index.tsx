import MainLayout from "../../layouts/LoggedOutLayout";
import "./SignUp.scss";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const lowercaseRegex = /[a-z]+/g;
const uppercaseRegex = /[A-Z]+/g;
const numRegex = /[0-9]+/g;
const symbolRegex = /[.{}[\]!@#$%^&*()?<>+=_\-/]+/g;

const schema = z.object({
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

  const tempPasswordOnChange = () => {
    console.log(passwordState);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  // Delete this function once the "Already have an account" link is updated
  function directToLoginPage() {
    alert("This should direct the user to the login page.");
  }

  return (
    <MainLayout>
      <div className="signup-form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={onSubmit} className="signup-form">
          <div className="signup-form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" {...register("email")} />
          </div>
          {errors.email?.message && (
            <p role="alert">{errors.email?.message.toString()}</p>
          )}

          <div className="signup-form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" {...register("password")} />
          </div>
          {errors.password?.message && (
            <p role="alert">{errors.password?.message.toString()}</p>
          )}
          <section id="password-validation-list">
            <ul>
              <li
                className={
                  passwordState.match(lowercaseRegex) ? "validated" : ""
                }
              >
                Lowercase letter
              </li>
              <li
                className={
                  passwordState.match(uppercaseRegex) ? "validated" : ""
                }
              >
                Uppercase letter
              </li>
              <li className={passwordState.match(numRegex) ? "validated" : ""}>
                Number
              </li>
              <li
                className={passwordState.match(symbolRegex) ? "validated" : ""}
              >
                Special Character
              </li>
            </ul>
          </section>
          <div className="signup-form-group">
            <label htmlFor="verifyPassword">Re-type Password:</label>
            <input
              type="password"
              {...register("verifyPassword")}
              onChange={() => tempPasswordOnChange()}
            />
          </div>
          {errors.verifyPassword?.message && (
            <p role="alert">{errors.verifyPassword?.message.toString()}</p>
          )}

          <button type="submit">Create account</button>

          <p className="signup-have-account">
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
