
const sort = () => {
  console.log('7. Сортировка\n\n')
  console.log('7.1. Сортированный список объектов [очень просто]')
  const sorting = (list, sortBy) => {
    return list.sort((elemOne, elemTwo) => {
      if (elemOne[sortBy] > elemTwo[sortBy]) {
        return -1
      } else {
        return 1
      }
    })
  }
  console.log('sorting: ', sorting([
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 }
  ], 'a'))
  console.log('7.1 END')
}

export default sort
