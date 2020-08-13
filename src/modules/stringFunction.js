/* eslint-disable no-debugger */

const stringFunction = () => {
  console.log('String functions\n\n')
  console.log('2.1 Машиночитаемые имена [очень просто]')
  const toMachineName = (name, separator) => name
    .replace(/[^\w\d ]+/g, '')
    .replace(/\s+/, ' ')
    .trim()
    .toLowerCase()
    .split(' ')
    .join(separator)
  console.log('toMachineName: ', toMachineName('Hello,           my name is Dmitry!', '-'))
  console.log('END 2.1\n\n')

  console.log('2.2 Валютный формат [просто]')
  const formatCurrency = amount => {
    const amountRezult = Number(amount).toFixed(2).split('')
    return amountRezult.reduceRight((accum, item, i) => {
      const temp = amountRezult.length - i - 1
      if (amountRezult.length > 6 && i < amountRezult.length - 3 && temp > 3 && (temp) % 3 === 0) { accum.unshift(',') }
      accum.unshift(item)
      return accum
    }, []).join('')
  }
  console.log('formatCurrency: ', formatCurrency(1223.123))
  console.log('END 2.2\n\n')

  console.log('2.3. Алфавитизация [очень просто]')
  const alphabetized = (text) => {
    return text
      .replace(/[^\w]+/g, '')
      .split('')
      .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1
        } else {
          return 1
        }
      })
  }
  console.log('alphabetized: ', alphabetized('Hello   ada  asd! '))
  console.log('END 2.3\n\n')

  console.log('2.4. Декодирование римских цифр [просто]')
  const romanToNumber = (number) => {
    const romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }

    return number
      .split('')
      .map(item => romanNumbers[item])
      .reduce((accum, item, i, array) => {
        if (i === 0) {
          accum += item
        } else if (accum < item) {
          accum = Math.abs(item - accum)
        } else if (accum >= item) {
          if (array[i - 1] < item) {
            accum = accum - array[i - 1] + (item - array[i - 1])
          } else {
            accum += item
          }
        }
        return accum
      }, 0)
  }
  console.log('romanToNumber: ', romanToNumber('XCIV'))
  console.log('END 2.4\n\n')

  console.log('2.5. Счетчик дубликатов [просто]')
  const countDuplicates = text => {
    return text.split('')
      .reduce((accum, item, index, array) => {
        const elem = array.find((itemFind, indexFind) => {
          if (item.toLowerCase() === itemFind.toLowerCase() && index !== indexFind) { return itemFind }
        })
        // eslint-disable-next-line no-unused-expressions
        elem ? accum.add(elem.toLowerCase()) : null
        return accum
      }, new Set([]))
      .size
  }
  console.log('countDuplicates: ', countDuplicates('indi1visiyYbil1ity'))
  console.log('END 2.5\n\n')

  console.log('2.6. Замена букв на их позиции [просто]')
  const replaceWithAlphPositions = text => {
    return text.split('')
      .reduce((accum, item) => {
        const code = item.toLowerCase().charCodeAt() - 96
        if (code > 0 && code < 27) {
          accum.push(code)
        }
        return accum
      }, [])
      .join(' ')
  }
  console.log('replaceWithAlphPositions: ', replaceWithAlphPositions('AAbbCc12DgZz'))
  console.log('END 2.6\n\n')
}

export default stringFunction
