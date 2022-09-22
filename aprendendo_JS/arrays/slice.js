const alunos = ['joao' , 'juliana', 'ana', 'caio', 'lara', 'marjorie', 'guilherme', 'aline', 'fabiana', 'andre', 'carlos', 'paulo', 'bia', 'vivian', 'isabela', 'vini', 'renan', 'renata', 'daisy', 'camilo']

let sala1 = alunos.slice(0, alunos.length/2)
let sala2 = alunos.slice(alunos.length/2)

console.log('Alunos da sala 1: ' + sala1)
console.log('Alunos da sala 2: ' + sala2)
