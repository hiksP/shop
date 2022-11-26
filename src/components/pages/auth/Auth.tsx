import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";

const Auth: FC = () => {
  const isSignIn = location.pathname === "/signin";

  return (
    <section className={styles.auth}>
      <h2 className={styles.title}>Welcome back</h2>
      <p className={styles.subtitle}>Enter your details here</p>
      <form className={styles.form}>
        <div className={styles.container}>
          <p className={styles.text}>Email</p>
          <input className={styles.input}></input>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>Password</p>
          <input className={styles.input}></input>
        </div>
        <button className={styles.button}>Sign in</button>
      </form>
      <p className={styles.linkText}>
        Don't have an Account?
        <Link to={"/signup"} className={styles.link}>
          Get started
        </Link>
      </p>
    </section>
  );
};

export default Auth;
