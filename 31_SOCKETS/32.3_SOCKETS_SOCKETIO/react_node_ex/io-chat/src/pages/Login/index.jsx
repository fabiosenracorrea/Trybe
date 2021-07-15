import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

function Login() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const { signIn } = useAuth();

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();

    const username = userNameRef.current.value
    const password = passwordRef.current.value

    if (!username || !password) return;

    const userData = { username, password };

    try {
      await signIn(userData);
    } catch(err) {
      alert('Login Failed');
    }
  }, [signIn]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" ref={userNameRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        Register
      </Link>
    </div>
  )
}

export default Login;
