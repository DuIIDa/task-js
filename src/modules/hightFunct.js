const hightFunct = () => {
    console.log('4. Функции высшего порядка\n\n')
    console.log('4.1. Распаковка аргументов [просто]')
    const f = (...arg) => arg
    const spread = (callback, arr) => {
        // eslint-disable-next-line standard/no-callback-literal
        return callback(...arr)
    }
    console.log('spread: ', spread(f, [1, true]))
    console.log('END 4.1\n\n')

    console.log('4.2. ZipWith [просто +]')
    const ZipWith = (fn, a0, a1) => {
        const minArray = (a0.length <= a1.length) ? a0 : a1
        const maxArray = (a0.length > a1.length) ? a0 : a1
        return minArray.reduce((accum, item, i) => {
            accum.push(fn(item, maxArray[i]))
            return accum
        }, [])
    }
    console.log('ZipWit: ', ZipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))
    console.log('END 4.2\n\n')
}

export default hightFunct
