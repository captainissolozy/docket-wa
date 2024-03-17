import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.scss';
// import '../styles/login.module.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('dfsdf',username)
        if(!username || !password) {
            setError('Please enter both username and password.');
            setShowErrorMsg(true);
            console.log('ddd');
        } else {
            console.log('pass');
            router.push('/');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap_container}>
                <div className={styles.wrap_login_box}>
                    <div className={styles.wrap_img}>
                        <img src="../../images/docket_logo.svg" alt="logo" />
                    </div>
                    <div className={`kanit-semi ${styles.title}`}>Welcome Back</div>
                    <div className={styles.desc}>Login into your account</div>
                    <form onSubmit={handleLogin}>
                        <div className={styles.input_container}>
                            <div className={`wrap-input`}>
                                <div className={`col`}>
                                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="kanit-reg"/>
                                </div>
                            </div>
                            <div className={`wrap-input`}>
                                <div className={`col pw`}>
                                    <input type={showPassword?'text':'password'} name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="kanit-reg"/>
                                    <div className={`icon-eye ${showPassword?'eye-open':'eye-close'}`} onClick={(e) => setShowPassword(!showPassword)}></div>
                                </div>
                            </div>
                            <div className={`${styles.error_msg} ${showErrorMsg?styles.show:''}`}>{error}</div>
                        </div>
                        <button type="submit">
                            <div id="submit_btn" className={`btn ${styles.login_btn}`} data-color="green">Login</div>
                        </button>
                    </form>
                    
                    <div className={`${styles.forgot_pw_info}`}>If you forget your password, please contact <span><a href="tel:+66266197348">+662 661-9734-8</a></span></div>
                </div>
            </div>
        </div>
    );
};

export default Login;