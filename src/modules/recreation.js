
const recreation = () => {
  console.log('5. Рекурсия\n\n')
  console.log('5.1. Сумма последовательности [просто]')
  const sequenceSum = (begin, end, step, stepNew = begin, rezult = begin) => {
    if (begin > end) {
      return 0
    } else {
      stepNew += step
      if (stepNew > end) {
        return rezult
      }
      rezult += stepNew
      return sequenceSum(begin, end, step, stepNew, rezult)
    }
  }
  console.log('sequenceSum: ', sequenceSum(1, 5, 3))
  console.log('5.1 END\n\n')

  console.log('5.2. Связанный список в строку [просто]')
  class Node {
    constructor (data, next = null) {
      this.data = data
      this.next = next
    }
  }
  const stringify = (arg, arr = []) => {
    arr.push(arg.data)
    if (arg.next) {
      return stringify(arg.next, arr)
    } else {
      arr.push(arg.next)
      return arr
    }
  }
  console.log('stringify: ', stringify(new Node(1, new Node(2, new Node(3)))))
  console.log('5.2 END\n\n')
}

export default recreation
