console.log('Array functions\n\n')

const arrayFunction = () => {
  console.log('1.1. Усредненная сумма массивов [очень просто]')
  const sumAverage = arr => {
    return Math.floor(arr.reduce((accum, item) => {
      accum += item.reduce((accNumb, numb) => accNumb + numb, 0) / item.length
      return accum
    }, 0))
  }
  console.log(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]))
  console.log('END 1.1\n\n')

  console.log('1.2. Сумма трех максимальных значений [очень просто]')
  const maxTripletSum = arr => {
    return arr
      .reduce((accum, item, _i, array) => {
        if (accum.length !== 3) {
          accum.push(item)
        } else if (!accum.includes(item) && item > Math.min(...accum)) {
          accum[accum.indexOf(Math.min(...accum))] = item
        }
        return accum
      }, [])
      // eslint-disable-next-line no-return-assign
      .reduce((accum, item) => accum += item, 0)
  }
  console.log(maxTripletSum([3, 2, 6, 8, 2, 3]))
  console.log('END 1.2\n\n')

  console.log('1.3. Сортировка к максимальному значению [просто]')
  const biggest = numbs => {
    console.log('numbs: ', numbs)
    if (numbs.length === 0) {
      return []
    } if (numbs.length === 1) {
      return numbs
    } else {
      const rezult = []
      const allCassesOfRest = biggest(numbs.slice(1))
      for (var c in allCassesOfRest) {
        for (var i = 0; i < numbs.length; i++) {
          rezult.push(numbs[i] + allCassesOfRest[c])
        }
      }
      return rezult
    }
  }
  console.log(biggest(['3', '30', '34', '5', '9']))
  console.log('END 1.3\n\n')
}

export default arrayFunction
