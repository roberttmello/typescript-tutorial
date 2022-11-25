"use strict";
// const produto: string = "Livro";
// const preco: number = 100;
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    for (const curso of cursos) {
        let color = curso.nivel === 'iniciante' ? 'blue' : 'red';
        document.body.innerHTML += `
      <div> 
        <h3 style="color:${color}">${curso.nome}</h3>
        <p><b>Horas</b>: ${curso.horas}</p>
        <p><b>Quantidade de aulas: </b>: ${curso.aulas}</p>
        <p><b>Gratuito</b>: ${curso.gratuito ? 'Sim' : 'Não'}</p>
        <p><b>Tags</b>: ${curso.tags.join(', ')}</p>
        <p><b>idAulas</b>: ${curso.idAulas.join(', ')}</p>
        <p><b>Nível</b>: ${curso.nivel}</p>
        <hr/>
      </div>
    `;
    }
}
