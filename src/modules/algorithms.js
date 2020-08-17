const algorithms = () => {
    console.log('3. Algorithms and functional programming\n\n')
    console.log('3.1. Сведение и сортировка массива [очень просто]')
    const flattenAndSort = arr => arr
        .reduce((accum, item) => accum.concat(item), [])
        .sort()
    console.log('flattenAndSort: ', flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
    console.log('END 3.1\n\n')

    console.log('3.2. Функциональное сложение [просто]')
    const add = n => numb => n + numb
    const addOne = add(10)
    console.log('addOne(3): ', addOne(3))
    console.log('addOne(10): ', addOne(10))
    console.log('END 3.2\n\n')

    console.log('3.3. Умножение всех элементов массива [просто]')
    const multiplyAll = arr => numb => arr.map(item => item * numb)
    console.log('multiplyAll: ', multiplyAll([1, 2, 3])(2))
    console.log('END 3.3\n\n')

    console.log('3.4. Сумма уникальных значений [просто, имеет различные решения]')
    const uniqueSum = arr => [...new Set(arr)].reduce((accum, item) => (accum += item), 0)
    console.log('uniqueSum: ', uniqueSum([-1, 5, 5, 2, -7]))
    console.log('END 3.4\n\n')

    console.log('3.5. Reduce [просто +]')
    const reduce = (arr, callback, initialValue) => {
        arr.forEach(item => {
            initialValue = callback(initialValue, item)
        })

        return initialValue
    }
    console.log('reduce: ', reduce(
        [1, 2, 3, 4],
        (acc, value) => acc * value,
        1
    ))
    console.log('END 3.5\n\n')

    console.log('3.6. Функциональная композиция [не просто]')
    const f = (numb) => numb + 1
    const g = (numb) => numb + 4
    const h = (numb) => numb + 5

    const compose = (...func) => a => {
        return func.reduce((accum, itemFunct) => itemFunct(accum), a)
    }
    console.log('compose: ', compose(f, g, h)(0))
    console.log('END 3.6\n\n')
}

export default algorithms
