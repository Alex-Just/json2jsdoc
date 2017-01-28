import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import style from './style'

export default class Info extends Component {
  render () {
    return (
      <div>
        <div class={style.about}>
          <div class={style.left}>
            <img class={style.image} src='/assets/before.png' alt='Before' />
          </div>

          <div class={style.center}>
            <h1 class={style.header}>But why?</h1>
            <hr class={style.hr} />

            <p class={style.p}>The JSON2JSDoc Converter was created to help with documenting your API calls and
              debugging.
              It helps your
              colleagues or IDE to read and understand structure of incoming JSON data <b>and its nested objects</b>.
            </p>

            <p class={style.p}>Also, as JSON data is often output without line breaks to
              save space, it is extremely difficult to actually read and make sense&nbsp;of&nbsp;it.</p>

            <p class={style.p}>This little tool hoped to solve
              the problem by parsing input JSON object's structure and by formatting the JSON data so that it is easy to
              read and debug by human beings.</p>
          </div>

          <div class={style.right}>
            <img class={style.image} src='/assets/after.png' alt='Before' />
          </div>
        </div>

        <div class={style.json}>
          <h1 class={style.header}>JSON</h1>
          <hr class={style.hr} />
          <p class={style.p}>JSON or JavaScript Object Notation is a language-independent open data format that uses
            human-readable text to express data objects consisting of attribute-value pairs.
          </p>

          <p class={style.p}>
            To learn more about JSON check out some of the following links:
          </p>

          <ul class={style.ul}>
            <li class={style.li}>
              <a class={style.a} title='Visit json.org' href='http://json.org/' target='_blank'>json.org</a>
            </li>
            <li class={style.li}>
              <a class={style.a} title="Visit Wikipedia's JSON Entry"
                href='http://en.wikipedia.org/wiki/JSON' target='_blank'>Wikipedia - JSON</a>
            </li>
            <li class={style.li}>
              <a class={style.a} href='http://www.w3schools.com/json/'
                title="Visit w3schools.com's JSON Tutorial" target='_blank'>w3schools.com -
                JSON Tutorial</a>
            </li>
          </ul>
        </div>

        <div class={style.jsdoc}>
          <h1 class={style.header}>JSDoc</h1>
          <hr class={style.hr} />
          <p class={style.p}>JSDoc is a markup language used to annotate JavaScript source code files. Using comments
            containing JSDoc, programmers can add documentation describing the application programming interface of
            the code they're creating.
          </p>

          <p class={style.p}>
            To learn more about JSDoc check out some of the following links:
          </p>

          <ul class={style.ul}>
            <li class={style.li}>
              <a class={style.a} title='Visit usejsdoc.org' href='http://usejsdoc.org/'
                target='_blank'>usejsdoc.org</a>
            </li>
            <li class={style.li}>
              <a class={style.a} title="Visit Wikipedia's JSDoc Entry"
                href='https://en.wikipedia.org/wiki/JSDoc' target='_blank'>Wikipedia - JSDoc</a>
            </li>
            <li class={style.li}>
              <a class={style.a} href='http://speakingjs.com/es5/ch29.html'
                title='Visit http://speakingjs.com/es5/ch29.html JSdoc Tutorial' target='_blank'>JSDoc:
                Generating API Documentation</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
