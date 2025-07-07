import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/forms/verify.module.css';
import Topbar from "@/components/Layout/Topbar";


const VerifyOTPForm = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(Array(6).fill(''));
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    console.log("Verifying OTP:", enteredOTP);
    // Add actual submission logic here
  };

  return (
    <>
     <Topbar/>
    <div className={styles.otpContainer}>
     
      <div className={styles.otpform}>
        <img src="/logo.png" className={styles.logo}></img>
      <img src="/form.png" alt="Verify OTP" className={styles.otpImage} />
      <h2 className={styles.otpTitle}>Verify mobile number ...</h2>

      <div className={styles.otpInputs}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            id={`otp-${idx}`}
            className={styles.otpInput}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(idx, e.target.value)}
          />
        ))}
      </div>

      <p className={styles.otpTimer}>
        Time left for verification- ({timer}) secs.
      </p>

      <button className={styles.proceedButton} onClick={handleSubmit}>
        Proceed
      </button>

      <p className={styles.resendLink} onClick={handleResend}>
        Resend OTP
      </p>

      <p className={styles.terms}>
               By proceeding, you consent to share your information with Dr. Dermat and agree to Dr. Dermat's <u>Privacy Policy</u> and <u>Terms of Service</u>. 
              </p>
            
      </div>
    </div>
    </>
  );
};

export default VerifyOTPForm;
