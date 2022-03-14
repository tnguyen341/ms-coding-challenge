/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { SignUpState } from "./SignUpAndIn";

const box = css({
  display: "flex",
  flexDirection: "column",
  width: "500px",
  height: "500px",
  outline: "15px",
  borderRadius: "15px",
  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.25)",
  gap: "8px",
});

const formInput = css({ borderRadius: "5px" });
const text = css({ fontFamily: "sans-serif" });
const buttonStyleEnabled = css({
  fontFamily: "sans-serif",
  width: "100px",
  borderRadius: "5px",
  backgroundColor: "#E53935",
  color: "white",
});

const buttonStyleDisabled = css({
  fontFamily: "sans-serif",
  width: "100px",
  borderRadius: "5px",
  backgroundColor: "#E1BEE7",
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
      <div>
        <h6 css={text}>Let's</h6>
        <h6 css={[text, { fontWeight: "bold" }]}>Sign Up</h6>
        <form>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <label css={text}>First Name</label>
            <input
              css={formInput}
              type="text"
              onChange={handleSetFname}
            ></input>
            <label css={text}>Email Address</label>
            <input
              css={formInput}
              type="text"
              onChange={handleSetEmail}
            ></input>
            <label css={text}>Password</label>
            <input css={formInput} type="text" onChange={handleSetPW}></input>
          </div>
        </form>
      </div>
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
  );
};

export default SignUpForm;
