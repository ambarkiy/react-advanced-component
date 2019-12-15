import React from 'react';
import { FocusedInputOnComponentDidMount, FocusedInputOnButtonClick } from './Input';

const App = () => (
	<div>
		<h4>Advanced Component</h4>
		<FocusedInputOnComponentDidMount>An input with focus on component did mount</FocusedInputOnComponentDidMount>
		<FocusedInputOnButtonClick>An input with focus on button click</FocusedInputOnButtonClick>
	</div>
);

export default App;
