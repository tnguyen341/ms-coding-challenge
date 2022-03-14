/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { SignUpState } from "./SignUpAndIn";

const box = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  outline: "15px",
  borderRadius: "15px",
  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.25)",
  gap: "16px",
});

const form = css({
  margin: "25px",
});

const formInput = css({
  borderRadius: "5px",
  borderColor: "rgba(0,0,0,0.25)",
  marginBottom: "8px",
});

const text = css({ fontFamily: "sans-serif" });

const label = css({ fontSize: "16px", fontWeight: 600, margin: "4px 0px" });

const buttonStyleEnabled = css({
  fontSize: "16px",
  padding: "8px 16px",
  margin: "8px 0px",
  fontFamily: "sans-serif",
  width: "100px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "red",
  color: "white",
});

const buttonStyleDisabled = css({
  fontSize: "16px",
  padding: "8px 16px",
  margin: "8px 0px",
  fontFamily: "sans-serif",
  width: "100px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "gray",
  color: "white",
});

interface SignUpProps {
  signUpState: SignUpState;
  setSignUpState: React.Dispatch<React.SetStateAction<SignUpState>>;
}

const SignUpForm = (props: SignUpProps) => {
  const { signUpState, setSignUpState } = props;
  const { signUpComplete, fName, email, pw } = signUpState;
  const handleSetFname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState((prevSignUpState) => ({
      ...prevSignUpState,
      fName: event.target.value,
    }));
  };
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState((prevSignUpState) => ({
      ...prevSignUpState,
      email: event.target.value,
    }));
  };
  const handleSetPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState((prevSignUpState) => ({
      ...prevSignUpState,
      pw: event.target.value,
    }));
  };

  useEffect(() => {
    fName.length > 0 && email.length > 0 && pw.length
      ? setSignUpState((prevSignUpState) => ({
          ...prevSignUpState,
          signUpComplete: true,
        }))
      : setSignUpState((prevSignUpState) => ({
          ...prevSignUpState,
          signUpComplete: false,
        }));
  }, [fName, email, pw, setSignUpState]);

  return (
    <div css={box}>
      <div css={form}>
        <h2 css={[text, { fontWeight: 400, margin: "0px" }]}>Let's</h2>
        <h2 css={[text, { margin: "0px 0px 8px 0px" }]}>Sign Up</h2>
        <p css={[text, { fontSize: "16px" }]}>
          Use the form below to sign up for this super awesome service. You're
          only a few steps away!
        </p>
        <form>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <label css={[text, label]}>First Name</label>
            <input
              css={formInput}
              type="text"
              onChange={handleSetFname}
            ></input>
            <label css={[text, label]}>Email Address</label>
            <input
              css={formInput}
              type="text"
              onChange={handleSetEmail}
            ></input>
            <label css={[text, label]}>Password</label>
            <input css={formInput} type="text" onChange={handleSetPW}></input>
          </div>
        </form>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            css={signUpComplete ? buttonStyleEnabled : buttonStyleDisabled}
            disabled={!signUpComplete}
            onClick={() =>
              setSignUpState((prevSignUpState) => ({
                ...prevSignUpState,
                signIn: true,
              }))
            }
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
