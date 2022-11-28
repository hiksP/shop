import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import styles from "./Auth.module.scss";

const Auth: FC = () => {
  const isSignIn = location.pathname === "/signin";
  const email = useInput("", { isEmpty: true, minLength: 6, isEmail: false });
  const password = useInput("", { isEmpty: true, minLength: 8 });
  const notValidButton = !email.inputValid || !password.inputValid;

  const [EmailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  useEffect(() => {
    if (email.emailError) {
      setEmailErrorText("Email is not correct");
    }
    if (email.isEmpty) {
      setEmailErrorText("Email should not be empty");
    }
    if (email.minLengthError) {
      setEmailErrorText("Minimal length of email is 6");
    }
  }, [email.value]);

  useEffect(() => {
    if (password.isEmpty) {
      setPasswordErrorText("Password should not be empty");
    }
    if (password.minLengthError) {
      setPasswordErrorText("Minimal length of password is 8");
    }
  }, [password.value]);

  useEffect(() => {
    if (email.inputValid) {
      setEmailErrorText("");
    }
    if (password.inputValid) {
      setPasswordErrorText("");
    }
  }, [email, password]);

  return (
    <section className={styles.auth}>
      <h2 className={styles.title}>
        {isSignIn ? "Welcome back" : "Get started"}
      </h2>
      <p className={styles.subtitle}>Enter your details here</p>
      <form className={styles.form}>
        <div className={styles.container}>
          <p className={styles.text}>Email</p>
          <input
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            className={styles.input}
            type="text"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>Password</p>
          <input
            onBlur={(e) => password.onBlur(e)}
            onChange={(e) => password.onChange(e)}
            value={password.value}
            className={styles.input}
            type="password"
            placeholder="Enter your password"
          ></input>
        </div>
        <button disabled={notValidButton} className={styles.button}>
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
      </form>
      <p className={styles.linkText}>
        {isSignIn ? "Dont have an Account?" : "Already have an Account?"}
        <Link to={isSignIn ? "/signup" : "/signin"} className={styles.link}>
          {isSignIn ? "Get started" : "Sign in!"}
        </Link>
      </p>
      {email.isDirty && EmailErrorText && (
        <span className={styles.error}>{EmailErrorText}</span>
      )}
      {password.isDirty && passwordErrorText && (
        <span className={styles.error}>{passwordErrorText}</span>
      )}
    </section>
  );
};

export default Auth;
