import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function Register() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const { push } = useHistory();

  const handleRegistration = useCallback(async (e) => {
    e.preventDefault();
    const username = userNameRef.current.value
    const password = passwordRef.current.value
    const email = emailRef.current.value

    if (!username || !password || !email) return;

    const userData = { username, password, email };

    try {
      await api.post('/register', userData);

      push('/');
    } catch (err) {
      alert('Registration failed');
    }
  }, [push]);

  return (
    <div>
      <form onSubmit={handleRegistration}>
      <input type="text" placeholder="Username" ref={userNameRef} />
      <input type="text" placeholder="E-mail" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;
