import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpAndIn from "./SignUpAndIn";

describe("SignUpAndIn rendering", () => {
  it("should render two input text boxes, one password input, and a disabled button", async () => {
    render(<SignUpAndIn />);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDisabled();
  });
});

describe("SignUpAndIn functionality", () => {
  it("should enable button when signup is complete and render SignInDialog after sign up button is clicked", () => {
    render(<SignUpAndIn />);

    userEvent.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "Test Name"
    );
    userEvent.type(
      screen.getByRole("textbox", { name: "Email Address" }),
      "email@email.com"
    );
    userEvent.type(screen.getByLabelText("Password"), "PW");
    expect(screen.getByRole("button", { name: "Sign Up" })).not.toBeDisabled();

    userEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      screen.getByRole("heading", { name: `Test Name!` })
    ).toBeInTheDocument();
    expect(screen.getByText("email@email.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });
});
