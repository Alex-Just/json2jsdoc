import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import style from './style'

export default class Header extends Component {
  render () {
    return (
      <header class={style.header}>
        <h1>JSON to JSDoc - Detect object's schema by parsing its JSON data</h1>
      </header>
    )
  }
}
