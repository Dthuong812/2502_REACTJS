import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import ButtonComponent from '../components/ButtonComponent';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Tên đăng nhập không được để trống.";
    if (!password) newErrors.password = "Mật khẩu không được để trống.";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/'); 
  };

  return (
    <div className='w-1/3 p-5 mx-auto mt-10 border border-gray-300 rounded shadow-md'>
      <h2 className='text-xl font-bold text-center'>Login</h2>
      <form onSubmit={handleLogin}>
        <FormInput
          label="Username"
          name="username"
          placeholder="Enter your username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
        />
        <FormInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <ButtonComponent className="w-full mt-4" type="submit">
          Login
        </ButtonComponent>
      </form>
    </div>
  );
};

export default LoginPage;