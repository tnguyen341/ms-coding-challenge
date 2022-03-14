import { useState } from "react";
import SignInDialog from "./SignInDialog";
import SignUpForm from "./SignUpForm";

export interface SignUpState {
  signIn: boolean;
  signUpComplete: boolean;
  fName: string;
  email: string;
  pw: string;
}

const SignUpAndIn = () => {
  const [signUpState, setSignUpState] = useState<SignUpState>({
    signIn: false,
    signUpComplete: false,
    fName: "",
    email: "",
    pw: "",
  });

  return (
    <div className="App">
      {!signUpState.signIn ? (
        <SignUpForm signUpState={signUpState} setSignUpState={setSignUpState} />
      ) : (
        <SignInDialog fName={signUpState.fName} email={signUpState.email} />
      )}
    </div>
  );
};

export default SignUpAndIn;
