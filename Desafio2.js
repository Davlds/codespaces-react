//Desafio 2

//questão 1

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const media = alunos
    .map(aluno => ({
        nome: aluno.nome,
        media: aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length

    }))
    .filter(aluno => aluno.media >=7)
    .sort((a, b) => b.media - a.media);

console.log(media);

//questão 2

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  return filmes
    .filter(filme => filme.genero === genero)
    .toSorted((a, b) => {
      if (criterio === "ano") {
        return b[criterio] - a[criterio];
      }
      return a.titulo.localeCompare(b.titulo);
    })
    .map(filme => filme.titulo + " (" + filme.ano + ") - " + filme.genero);
}

console.log(buscarFilmes("ficção", "ano"));