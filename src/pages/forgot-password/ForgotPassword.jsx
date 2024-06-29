import { Link, useNavigate } from 'react-router-dom';
// import './login.css';
import images from './../../images/index';
import UiInput from '../../ui/UiInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, verifyOtp } from '../../features/auth/authSlice';

function ForgotPassword() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { otpSent, otpVerified, isLoading, error } = useSelector(state => state.auth);

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        dispatch(sendOtp(phoneNumber));
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        dispatch(verifyOtp({ phoneNumber, otp }));
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.phoneNumber === phoneNumber) {
            storedUser.password = newPassword;
            localStorage.setItem('user', JSON.stringify(storedUser));
            alert('Parol muvaffaqiyatli yangilandi!');
            navigate('/login');
        } else {
            alert('Noto\'g\'ri telefon raqam!');
        }
    };

    return (
        <div className='login'>
            <div className="login-wrapper">
                <div className="login-info">
                    <div className="logo">
                        <Link><img src={images.logo} alt="logo" /></Link>
                    </div>
                    <div className="title">
                        <h1>Parolni tiklash</h1>
                        <p>Telefon raqamingizni kiritib kodni oling va yangi parolni kiriting.</p>
                    </div>
                    {!otpSent ? (
                        <form onSubmit={handlePhoneSubmit} className="login-section">
                            <label>
                                <span>Telefon raqam</span>
                                <UiInput type="number" label="Phone number" state={phoneNumber} setState={setPhoneNumber} />
                            </label>
                            <button>SMS kodini yuborish</button>
                        </form>
                    ) : !otpVerified ? (
                        <form onSubmit={handleOtpSubmit} className="login-section">
                            <label>
                                <span>SMS kodi</span>
                                <UiInput type="number" label="OTP" state={otp} setState={setOtp} />
                            </label>
                            <button>Kodni tasdiqlash</button>
                        </form>
                    ) : (
                        <form onSubmit={handlePasswordSubmit} className="login-section">
                            <label>
                                <span>Yangi parol</span>
                                <UiInput label="New Password" type="password" state={newPassword} setState={setNewPassword} />
                            </label>
                            <button>Parolni yangilash</button>
                        </form>
                    )}
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                </div>
                <div className="login-image">
                    <img src={images.inRegisterImage} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
