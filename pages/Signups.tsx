import { useState } from 'react';
import axios from '../pages/utils/axios';
import { useRouter } from 'next/router';
import styles from "@/styles/signups.module.css"
const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', formData);
      alert('Signup successful!');
      router.push('/login');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
  
  <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Signup</button>
    </form>
  </div>

  );
};

export default Signup;
