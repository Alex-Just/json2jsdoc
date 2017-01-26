import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Header from './header'
import Home from './home'

console.log(h)
export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} e    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} e.url  The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url
  };

  render () {
    return (
      <div id='app'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
        </Router>
      </div>
    )
  }
}
