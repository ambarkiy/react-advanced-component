import React from 'react';

const focusInput = (input) => input.focus();

const FocusedInputOnButtonClick = ({ children }) => {
	let input;

	return (
		<div>
			{children}
			<input
				type='text'
				ref={(node) => {
					input = node;
				}}
			/>
			<button onClick={() => focusInput(input)}>Click me to focus input</button>
		</div>
	);
};

export default FocusedInputOnButtonClick;
