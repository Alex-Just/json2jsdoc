import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>JSON to JSDoc - Detect object's schema by parsing its JSON data</h1>
			</header>
		);
	}
}
