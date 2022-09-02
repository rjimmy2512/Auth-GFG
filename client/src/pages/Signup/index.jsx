import { Link } from "react-router-dom";
import styles from "./styles.module.css";


function Signup() {
	const google = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
	};

	const facebook = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
	};

	const github = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
	};
	
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={google}>
						<img src="images/google.png" alt="googleicon" />
						<span>Sign up with Google</span>
					</button>
					<button className={styles.facebook_btn} onClick={facebook}>
						<img src="images/facebook.png" alt="icon google" />
						<span>Sign up with Facebook</span>
					</button>
					<button className={styles.github_btn} onClick={github}>
						<img src="images/github.png" alt="icon google" />
						<span>Sign up with Github</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;