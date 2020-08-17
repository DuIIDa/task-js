const arrayFunction = () => {
    console.log('Array functions\n\n')
    console.log('1.1. Усредненная сумма массивов [очень просто]')
    const sumAverage = arr => Math.floor(arr.reduce((rezult, item) =>
        (rezult += item.reduce((accum, numb) => accum + numb, 0) / item.length), 0))
    console.log(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]))
    console.log('END 1.1\n\n')

    console.log('1.2. Сумма трех максимальных значений [очень просто]')
    const maxTripletSum = arr => arr
        .reduce((accum, item, _i, array) => {
            if (accum.length !== 3) {
                accum.push(item)
            } else if (!accum.includes(item) && item > Math.min(...accum)) {
                accum[accum.indexOf(Math.min(...accum))] = item
            }
            return accum
        }, [])
        .reduce((accum, item) => (accum = accum + item), 0)
    console.log(maxTripletSum([3, 2, 6, 8, 2, 3]))
    console.log('END 1.2\n\n')

    console.log('1.3. Сортировка к максимальному значению [просто]')
    const biggest = numbs => numbs.sort().reverse().join('')
    console.log(biggest(['3', '30', '34', '5', '9']))
    console.log('END 1.3\n\n')

    console.log('1.4. Комбинации сдвига [просто]')
    const pattern = amount => new Array(amount).fill(null)
        .reduce((accum, _item, i) => {
            accum[i] = i + 1
            return accum
        }, [])
        .reduce((accum, _item, i, array) => {
            accum.push(array.slice(i, array.length).join('') + array.slice(0, i).join(''))
            return accum
        }, [])
    console.log('pattern: ', pattern(5))
    console.log('END 1.4\n\n')

    console.log('1.5. Арифметическая последовательность - сумма из n элементов[просто]')
    const arithmeticSequenceSum = (a, r, n) => new Array(n).fill(null)
        .reduce((rezult, _item, i) => (rezult += new Array(i).fill(null).reduce((accum) => (accum += r), a)), 0)
    console.log('arithmeticSequenceSum: ', arithmeticSequenceSum(2, 3, 5))
    console.log('END 1.5\n\n')

    console.log('1.6. Диагональная сумма матрицы [просто]')
    const diagonalSum = arrays => arrays.reduce((accum, item, i) => (accum += item[i]), 0)
    console.log('diagonalSum: ', diagonalSum([
        [5, 9, 1, 0],
        [8, 7, 2, 3],
        [1, 4, 1, 9],
        [2, 3, 8, 2]
    ]
    ))
    console.log('END 1.6\n\n')
}

export default arrayFunction
