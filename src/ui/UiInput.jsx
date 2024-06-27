import React from 'react';

function UiInput({ label, type, setState, state, id }) {
	return (
		<div className="form-floating">
			<input 
				type={type} 
				placeholder={label}
				value={state}
				onChange={(e) => setState(e.target.value)} 
			/>
		</div>
	);
}

export default UiInput;
