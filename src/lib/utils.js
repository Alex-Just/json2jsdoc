export function convertJsonToJsdoc (jsonData) {
  let obj
  try {
    obj = JSON.parse(jsonData)
  } catch (e) {
    return e
  }

  return processObject({obj, objName: ''}).trim()
}

function processObject ({obj, name}) {
  let objects = []
  let t = '/**\n'

  if (name) {
    t += ` * ${red('@typedef')}  {${capitalizeFirstLetter(typeof obj)}} ${name}\n`
  }

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      let type = capitalizeFirstLetter(typeof obj[prop])

      if (Array.isArray(obj[prop])) {
        type = !obj[prop].length ? '' : capitalizeFirstLetter(typeof obj[prop][0])
        type = type + '[]'

        if (type === 'Object[]') {
          objects.push({
            obj: obj[prop][0],
            name: `${prop} instance`
          })
        }
      } else if (type === 'Object') {
        objects.push({
          obj: obj[prop],
          name: prop
        })
      }

      t += ` * ${red('@property')} {${type}} ${prop}\n`
    }
  }

  t += ' */\n\n'

  if (!objects.length) {
    return t
  }

  objects.forEach(e => {
    t += processObject(e)
  })
  return t
}

function red (str) {
  return `<span class="property">${str}</span>`
}

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * @property {String} name
 * @property {String} gender
 * @property {Object} homeworld
 * @property {String[]} films
 * @property {Object[]} starships
 */

/**
 * @typedef  {Object} homeworld
 * @property {String} name
 * @property {String[]} films
 */

/**
 * @typedef  {Object} starships instance
 * @property {String} name
 * @property {String} model
 * @property {String} manufacturer
 * @property {String} cost_in_credits
 * @property {String} crew
 */
// function test(data) {
//   console.log(data.starships[0].manufacturer);
// }
// test();
