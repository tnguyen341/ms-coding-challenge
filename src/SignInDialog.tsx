/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SignInDialogProps {
  fName: string;
  email: string;
}

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

const signInButton = css({
  fontFamily: "sans-serif",
  width: "100px",
  borderRadius: "5px",
  backgroundColor: "#E53935",
  color: "white",
});

const SignInDialog = (props: SignInDialogProps) => {
  const { fName, email } = props;
  return (
    <div css={box}>
      <h2>Welcome, </h2>
      <p>
        {fName}
        {"!"}
      </p>
      <p>
        You have been registered for this awesome service. Please check your
        email listed below for instructions
      </p>
      <p>{email}</p>
      <button css={signInButton}>Sign In</button>
    </div>
  );
};

export default SignInDialog;
