const alunos = ['Jao', 'xuliana', 'caio', 'ana']
const medias_dos_aluno = [10,7,9,6]

let lista_alunos_notas = [alunos,medias_dos_aluno]


const exibeNomeNota =(nome_aluno) => {
  if (lista_alunos_notas[0].includes(nome_aluno)){
    indice = lista_alunos_notas[0].indexOf(nome_aluno)
    return lista_alunos_notas[0][indice] + ' sua media é ' + lista_alunos_notas[1][indice]
  }
  else{
    return 'aluno nao esta cadastrado'
  }
}

console.log(exibeNomeNota('Ana'))
