import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Welcome</h1>
				<p><a href="mailto:SPGWhistler@gmail.com">Contact Me</a></p>
				<p><a href="https://www.linkedin.com/in/anthony-petty-2a88b050">LinkedIn</a></p>
			</div>
		);
	}
}
