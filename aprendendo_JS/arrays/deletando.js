const notas = [10 , 6 , 8, 5.5, 10]
notas.splice(4)
//ou usar .pop()
console.log(notas)

let media = (notas[0] + notas[1]+ notas[2] + notas[3])/notas.length

console.log(media)
