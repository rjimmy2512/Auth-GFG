import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
	const google = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
	};

	const facebook = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/facebook/callback`, "_self");
	};

	const github = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/github/callback`, "_self");
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>

					<button className={styles.google_btn} onClick={google}>
						<img src="images/google.png" alt="icon google" />
						<span>Log in with Google</span>
					</button>
					<button className={styles.facebook_btn} onClick={facebook}>
						<img src="images/facebook.png" alt="icon google" />
						<span>Log in with Facebook</span>
					</button>
					<button className={styles.github_btn} onClick={github}>
						<img src="images/github.png" alt="icon google" />
						<span>Log in with Github</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;