import { Link } from 'react-router-dom'
// css
import '../login/login.css'

// images
import images from './../../images/index';
// ui
import UiInput from '../../ui/UiInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUserStart, signInUserSuccess, signInUserFailure } from '../../features/auth/authSlice';
import AuthService from '../../service/auth';


function Register() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(signInUserStart())
		const user = {"username": name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signInUserSuccess(response.user))
		} catch (error) {
			dispatch(signInUserFailure(error.response.data.errors))
		}
	}

	return (
		<div className='login register'>
			<div className="login-wrapper">
				<div className="login-info register-info">
					<div className="logo">
						<Link><img src={images.logo} alt="logo" /></Link>
					</div>
					<div className="title">
						<h1>Ro'yxatdan o'tish</h1>
						<p>Kerakli ma’lumotlarni kiritib ro‘yxatdan o‘ting</p>
					</div>
					<form onSubmit={handleSubmit} className="login-section">
						<label>
							<span>F.I.O</span>
							<UiInput type="text" label="name" state={name} setState={setName} />
						</label>
						<label>
							<span>Email</span>
							<UiInput type="email" label="email" state={email} setState={setEmail} />
						</label>
						<label>
							<span>Password</span>
							<UiInput type="password" label="Password" state={password} setState={setPassword} />
						</label>
						<button disabled={isLoading}>{isLoading ? 'Loading...' : "Ro'yxatdan o'tish"}</button>
					</form>
				</div>
				<div className="login-image">
					<img src={images.inRegisterImage} alt="image" />
				</div>
			</div>
		</div>
	)
}

export default Register