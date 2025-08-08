import { useState } from 'react';
import axios from '../pages/utils/axios';
import styles from '@/styles/login.module.css'
import { useRouter } from 'next/router';
const Login = () => {
  const router=useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);

    } catch (err: any) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
  <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={()=>{router.push('Dashboard')}}>Login</button>
    </form>
  </div>
);

};

export default Login;
