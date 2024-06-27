import { Link } from 'react-router-dom'
// css
import '../login/login.css'

// images
import images from './../../images/index';
// ui
import UiInput from '../../ui/UiInput';
import { useState } from 'react';


function Register() {

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
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
							<span>Ismingiz</span>
							<UiInput type="text" label="Name" state={name} setState={setName} />
						</label>
						<label>
							<span>Familiyangiz</span>
							<UiInput type="text" label="surname" state={surname} setState={setSurname} />
						</label>
						<div className="connect-wrapper">
							<label>
								<span>Telefon raqam</span>
								<UiInput type="number" label="Phone number" state={phoneNumber} setState={setPhoneNumber} />
							</label>
							<label>
								<span>Email</span>
								<UiInput type="email" label="Email" state={email} setState={setEmail} />
							</label>
						</div>
						<label>
							<span>Password</span>
							<UiInput type="text" label="Password" state={password} setState={setPassword} />
						</label>
						<button>Ro'yxatdan o'tish</button>
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