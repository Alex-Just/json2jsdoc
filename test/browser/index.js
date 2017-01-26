import { h, render } from 'preact'
import App from 'components/app'
import Home from 'components/home'
import 'style'
import { convertJsonToJsdoc } from '../../src/lib/index'

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

  describe('components', () => {
    it('should render the home component', () => {
      render(<Home />, scratch)

      expect(scratch.innerHTML).to.contain('your JSON data here')
    })
  })

  describe('utils', () => {
    it('should make the json2jsdoc conversion with valid data', () => {
      const defaultJSON = '{\n' +
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
        '\n'

      const jsdoc = convertJsonToJsdoc(defaultJSON)

      expect(jsdoc).to.be.equal('/**\n' +
        ' * <span class="property">@property</span> {String} name\n' +
        ' * <span class="property">@property</span> {String} gender\n' +
        ' * <span class="property">@property</span> {Object} homeworld\n' +
        ' * <span class="property">@property</span> {String[]} films\n' +
        ' * <span class="property">@property</span> {Object[]} starships\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * <span class="property">@typedef</span>  {Object} homeworld\n' +
        ' * <span class="property">@property</span> {String} name\n' +
        ' * <span class="property">@property</span> {String[]} films\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * <span class="property">@typedef</span>  {Object} starships instance\n' +
        ' * <span class="property">@property</span> {String} name\n' +
        ' * <span class="property">@property</span> {String} model\n' +
        ' * <span class="property">@property</span> {String} manufacturer\n' +
        ' * <span class="property">@property</span> {String} cost_in_credits\n' +
        ' * <span class="property">@property</span> {String} crew\n' +
        ' */')
    })
    it('should make the json2jsdoc conversion with INvalid data', () => {
      const defaultJSON = 'blah'

      const jsdoc = convertJsonToJsdoc(defaultJSON)

      expect(jsdoc).to.be.equal('SyntaxError: Unexpected token b in JSON at position 0')
    })
  })
})
