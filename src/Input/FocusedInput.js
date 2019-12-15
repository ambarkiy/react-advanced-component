import React, { Component } from 'react';

class FocusedInput extends Component {
	componentDidMount() {
		if (this.input) this.input.focus();
	}

	render() {
		return (
			<div>
				{this.props.children}{' '}
				<input
					type='text'
					ref={(node) => {
						this.input = node;
					}}
				/>
			</div>
		);
	}
}

export default FocusedInput;
