import { FC } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import styles from "./Auth.module.scss";

const Auth: FC = () => {
  const isSignIn = location.pathname === "/signin";
  const email = useInput("", { isEmpty: true, minLength: 3 });
  const password = useInput("", { isEmpty: true, minLength: 10 });
  const notValidButton = !email.inputValid || !password.inputValid;

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
      {email.isDirty && email.minLengthError && (
        <span className={styles.error}>Error</span>
      )}
    </section>
  );
};

export default Auth;
