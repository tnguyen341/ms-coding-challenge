import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

const props = {
  signUpState: {
    signIn: false,
    signUpComplete: false,
    fName: "",
    email: "",
    pw: "",
  },
  setSignUpState: jest.fn(),
};

describe("SignUpForm rendering", () => {
  it("should render two input text boxes, one password input, and a disabled button", async () => {
    render(<SignUpForm {...props} />);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDisabled();
  });

  it("should enable button when signup is complete", () => {
    const signUpCompleteState = {
      signUpState: {
        signIn: false,
        signUpComplete: true,
        fName: "",
        email: "",
        pw: "",
      },
      setSignUpState: jest.fn(),
    };
    render(<SignUpForm {...signUpCompleteState} />);
    expect(screen.getByRole("button", { name: "Sign Up" })).not.toBeDisabled();
  });
});
