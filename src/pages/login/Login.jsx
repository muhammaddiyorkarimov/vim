import { Link } from 'react-router-dom'
// css
import './login.css'

// images
import images from './../../images/index';
// ui
import UiInput from '../../ui/UiInput';
import { useState } from 'react';
import AuthService from '../../service/auth';
import { signInUserStart, signInUserSuccess } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';


function Login() {

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const {isLoading} = useSelector(state => state.auth)

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(signInUserStart())
		const user = { email, password }
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signInUserSuccess(response.user))
		} catch (error) {
			dispatch(signInUserFailure(error.response.data.errors))

		}
	}

	return (
		<div className='login'>
			<div className="login-wrapper">
				<div className="login-info">
					<div className="logo">
						<Link><img src={images.logo} alt="logo" /></Link>
					</div>
					<div className="title">
						<h1>Xush kelibsiz!</h1>
						<p>Login parolingizni kiritib o‘z kabinetingizga kiring.</p>
					</div>
					<form onSubmit={handleSubmit} className="login-section">
						<label>
							<span>Login</span>
							<UiInput type="text" label="Login" state={name} setState={setName} />
						</label>
						<label>
							<span>Parol</span>
							<UiInput label="Password" type="password" state={password} setState={setPassword} />
						</label>
						<button disabled={isLoading}>{isLoading ? 'Loading...' : "Kirish"}</button>
					</form>
				</div>
				<div className="login-image">
					<img src={images.inRegisterImage} alt="image" />
				</div>
			</div>
		</div>
	)
}

export default Login