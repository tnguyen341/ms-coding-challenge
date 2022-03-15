/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const box = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  outline: "15px",
  borderRadius: "15px",
  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.25)",
  margin: "25px",
});

const content = css({ margin: "25px" });

const text = css({ fontFamily: "sans-serif" });

const body = css({
  fontFamily: "sans-serif",
  fontSize: "18px",
  lineHeight: "24px",
});

const signInButton = css({
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

interface SignInDialogProps {
  fName: string;
  email: string;
}

const SignInDialog = (props: SignInDialogProps) => {
  const { fName, email } = props;
  return (
    <div css={box}>
      <div css={content}>
        <h2 css={[text, { fontWeight: 400, margin: "0px" }]}>Welcome,</h2>
        <h2 css={[text, { margin: "0px 0px 8px 0px" }]}>
          {fName}
          {"!"}
        </h2>
        <p css={body}>
          You have been registered for this awesome service. Please check your
          email listed below for instructions
        </p>
        <p css={[body, { fontWeight: 600 }]}>{email}</p>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <button css={signInButton}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignInDialog;
