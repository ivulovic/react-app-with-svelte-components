import React from 'react';
import { render } from 'react-dom';
import ReactComponent from './ReactComponent';
import SvelteComponent from './SvelteComponent';
import SvelteThing from './SvelteThing.html';
import SvelteThing2 from './SvelteThing2.svelte';

function App(props) {
	return (
		<div>
			<ReactComponent />
			<h1>This is a Svelte component inside a React app:</h1>
			<SvelteComponent this={SvelteThing} count={0} />
			<h1>This is another Svelte component inside a React app:</h1>
			<SvelteComponent this={SvelteThing2} />
		</div>
	)
}

const main = document.querySelector('main');

render(<App />, main);