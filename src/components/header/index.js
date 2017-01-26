import { h, Component } from 'preact'
import style from './style'
console.log(h)

export default class Header extends Component {
  render () {
    return (
      <header class={style.header}>
        <h1>JSON to JSDoc - Detect object's schema by parsing its JSON data</h1>
      </header>
    )
  }
}
