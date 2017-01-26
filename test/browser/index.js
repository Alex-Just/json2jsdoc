import { h, render } from 'preact'
import App from 'components/app'
import 'style'

console.log(h)
/* global describe, before, beforeEach, after, it, expect */

describe('App', () => {
  let scratch

  before(() => {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  describe('routing', () => {
    it('should render the homepage', () => {
      render(<App />, scratch)

      expect(scratch.innerHTML).to.contain('JSON to JSDoc')
    })
  })
})
