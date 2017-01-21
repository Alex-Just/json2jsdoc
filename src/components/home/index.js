import {h, Component} from "preact";
import style from "./style";
import {convertJsonToJsdoc} from "../../lib/utils";

export default class Home extends Component {
	h = h;

	defaultJSON = '{\n' +
		'    "name": "Luke Skywalker",\n' +
		'    "gender": "male",\n' +
		'    "homeworld": {\n' +
		'        "name": "Tatooine",\n' +
		'        "films": [\n' +
		'            "Attack of the Clones",\n' +
		'            "The Phantom Menace",\n' +
		'            "Revenge of the Sith",\n' +
		'            "Return of the Jedi",\n' +
		'            "A New Hope"\n' +
		'        ]\n' +
		'    },\n' +
		'    "films": [\n' +
		'        "Revenge of the Sith",\n' +
		'        "Return of the Jedi",\n' +
		'        "The Empire Strikes Back",\n' +
		'        "A New Hope",\n' +
		'        "The Force Awakens"\n' +
		'    ],\n' +
		'    "starships": [\n' +
		'        {\n' +
		'            "name": "Death Star",\n' +
		'            "model": "DS - 1 Orbital Battle Station ",\n' +
		'            "manufacturer": "Imperial Department of Military Research",\n' +
		'            "cost_in_credits": "1000000000000",\n' +
		'            "crew": "342953"\n' +
		'        }, \n' +
		'        {\n' +
		'            "name": "Imperial shuttle",\n' +
		'            "model": "Lambda-class T-4a shuttle",\n' +
		'            "manufacturer": "Sienar Fleet Systems",\n' +
		'            "cost_in_credits": "240000",\n' +
		'            "crew": "6"\n' +
		'        }\n' +
		'    ]\n' +
		'}\n' +
		'\n';

	componentDidMount() {
		this.delayedAction({pasted: true});
	}

	handleKeyDown = (e) => {
		setTimeout(this.delayedAction, 200, {pasted: e.metaKey && e.keyCode === 86}); //Detect ctrl(CMD) + v
	};

	delayedAction = ({pasted}) => {
		//Prettify input JSON
		if (pasted) {
			try {
				this.inputJson.value = JSON.stringify(JSON.parse(this.inputJson.value), null, 2);
			} catch (e) {
			}
		}

		this.inputJsdoc.innerHTML = convertJsonToJsdoc(this.inputJson.value);

		if (pasted) {
			this.handleJsdocFocus();
		}
	};

	handleJsdocFocus = () => {
		this.selectCode(this.inputJsdoc);
	};

	handleJsonFocus = () => {
		// TODO: Input should be clickable without selecting while being manually edited
		this.inputJson.select();
	};

	selectCode = (el) => {
		const range = document.createRange();
		range.selectNodeContents(el);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	};

	render() {
		return (
			<div>
				<div class={style.home}>
					<h1 class={style.header}>Paste your JSON data here</h1>

					<textarea id="json"
							  class={style.textarea}
							  onClick={this.handleJsonFocus}
							  onKeyDown={this.handleKeyDown}
							  spellCheck="false"
							  value={this.defaultJSON}
							  ref={node => {
								  this.inputJson = node;
							  }}
					/>
				</div>

				<div class={style.home}>
					<h1 class={style.header}>And get JSDoc output here</h1>

					<pre class={style.jsdoc}
						 onClick={this.handleJsdocFocus}
						 ref={node => {
							 this.inputJsdoc = node;
						 }}
					>
					</pre>
				</div>
			</div>
		);
	}
}
