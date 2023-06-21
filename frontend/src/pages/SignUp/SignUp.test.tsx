import { render, screen } from "@testing-library/react";
import SignUpPage from ".";

describe("Sign-Up Page", () => {
  it("Has a Create Account h1", () => {
    render(<SignUpPage />);
    const header1 = screen.getByRole("heading");
    expect(header1).toHaveTextContent("Create Account");
    expect(header1).toBeVisible();
  });
});
