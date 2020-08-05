/* eslint-disable no-debugger */
console.log('String functions\n\n')

const stringFunction = () => {
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
    // eslint-disable-next-line no-unused-vars
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
      .reduce((accum, item, i) => {
        // debugger
        if (i === 0) {
          accum += item
        } else if (accum < item) {
          accum = Math.abs(item - accum)
        } else if (item < accum) {
          accum += item
        }
        return accum
      }, 0)
  }
  console.log('romanToNumber: ', romanToNumber('XVIC'))
  console.log('END 2.4\n\n')
}

export default stringFunction
