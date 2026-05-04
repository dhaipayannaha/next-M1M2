const friends: Array<string> = ["Mezba", 'jphn', 'doe', 'rahi']


type genericsArray = Array<number>
const point: genericsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(friends)

type genericArray<value> = Array<value>

const rollNumbers: genericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const rollNumbers2: genericArray<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


type cordinators<x, y> = [x, y]

const cordinators: cordinators<number, number> = [10, 20]
const point2 : cordinators<string, string> = ['1', '2']




