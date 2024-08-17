import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthServices from '../../../services/AuthServices';

import loginImage from '../../../assets/images/login-img.png';

import { routes } from '../../../utils/constants/Route';
import { LOCAL_STORAGE_KEYS } from '../../../utils/constants/Storage';
import './login.css';

const LoginPage: FC = () => {
  const [credentials, setCredentials] = useState<any>();
  const [erros, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const AuthService = useAuthServices();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCredentials((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    // if (validateCredentials()) {
    setIsLoading(true);
    AuthService.fakeLogin(credentials)
      .then((resp: any) => {
        setIsLoading(false);
        localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, resp);
        navigate(routes.home.path);
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(':::Error:::', error);
      });
    // }

    console.log('credentials:::', credentials);
  };

  // const validateCredentials = (): boolean => {
  //   let isValid = true;

  //   if (!credentials?.email) {
  //     isValid = false;
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       email: 'Email required',
  //     }));
  //   } else if (!VALID_EMAIL_REGEX.test(credentials?.email)) {
  //     isValid = false;
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       email: 'Not a valid email',
  //     }));
  //   } else {
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       email: null,
  //     }));
  //   }

  //   if (!credentials?.password) {
  //     isValid = false;
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       password: 'Password required',
  //     }));
  //   } else if (credentials?.password?.length < 6) {
  //     isValid = false;
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       password: 'Password must be at least 6 characters long',
  //     }));
  //   } else {
  //     setErrors((prev: any) => ({
  //       ...prev,
  //       password: null,
  //     }));
  //   }

  //   return isValid;
  // };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} height={'100%'} width={'90%'} />
      </div>
      <form className="login-area" onSubmit={handleLogin}>
        <h3>Welcome back!</h3>
        <p>Please enter your details</p>

        <div className="credential-section mb-10">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className={erros?.email ? 'error-input' : ''}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={erros?.password ? 'error-input' : ''}
            onChange={handleInputChange}
          />
        </div>

        {/* <div className="remember-me-section">
          <div>
            <input
              name="rememberMe"
              type="checkbox"
              id="rememberMe"
              style={{ marginRight: '5px' }}
            />
            <label htmlFor="rememberMe">Remember for 30 days</label>
          </div>
          <a href="#">Forgot password?</a>
        </div> */}

        <button
          type="submit"
          className={`login-btn ${isLoading ? 'disable' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Log in'}
        </button>
        {/* <button type='submit'>Log in with Google</button> */}

        {/* <div className="signup-me-section">
          Don't have an account?
          <a href="#" style={{ marginLeft: '5px' }}>
            Sign Up
          </a>
        </div> */}
      </form>
    </div>
  );
};

export default LoginPage;
