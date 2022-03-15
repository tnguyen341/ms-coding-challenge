import { render, screen } from "@testing-library/react";
import SignInDialog from "./SignInDialog";

const props = {
  fName: "Tyler",
  email: "email@email.com",
};

describe("SignUpForm rendering", () => {
  it("should render two input text boxes, one password input, and a disabled button", async () => {
    render(<SignInDialog {...props} />);

    expect(
      screen.getByRole("heading", { name: `${props.fName}!` })
    ).toBeInTheDocument();
    expect(screen.getByText(props.email)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });
});
