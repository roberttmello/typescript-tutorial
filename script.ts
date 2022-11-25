// const produto: string = "Livro";
// const preco: number = 100;

// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: "Uno",
//   portas: 4
// }

// const test = 'Test';

// const somar = (a:number, b:number) => a + b;

// somar(12,5);

// const nintendo = {nome: 'Nintendo', preco: '2000'}

// function transformarProduto(produto:{nome:string;preco:string}) {
//   produto.preco = 'R$' + produto.preco
//   return produto
// }

// const produtoNovo = transformarProduto(nintendo);

// console.log(produtoNovo);

// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }

// console.log(normalizarTexto('Carlos Robert Dias Melo'));

// const input = document.querySelector('input')
// const p = document.querySelector('p')

// const total = localStorage.getItem('total')

// if(input && p && total) {
//   input.value = total
//   p.innerText = `ganho total: ${Number(total) + 100 - Number(total) * 0.2}`
// }

// function totalMudou() {
//   if(input && p) {
//     const value = Number(input.value)
//     localStorage.setItem('total', input.value)
//     p.innerText = `ganho total: ${value + 100 - value * 0.2}`
//   }
// }

// if(input) {
//   input.addEventListener('keyup', totalMudou)
// }

// let total: string | number = '10'

// const isNumber = (value: string | number) => {
//   return typeof value === 'number' ? true : false
// }

// console.log(isNumber(total))

// const button = document.querySelector('button')
// console.log(button)

// button?.click()

// const toNumber = (value: number | string) => {
//   if (typeof value === 'number') return value
//   else if (typeof value === 'string') return Number(value)
//   else throw 'value deve ser um number | string'
// }

// console.log(toNumber('true'));

// type TypeProduto = { nome: string; preco: number; teclado: boolean }

// interface InterfaceProduto  { nome: string; preco: number; teclado: boolean }

// type Categorias = 'camisetas' | 'saias' | 'vestidos' | 'calçados'

// const preencherDados = (dados: InterfaceProduto) => {
//   document.body.innerHTML += `
//     <div>
//       <h3>${dados.nome}</h3>
//       <p>R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'} </p>
//     </div>
//   `
// }

// const meusDados0: TypeProduto = {
//   nome: 'Computador',
//   preco: 4000,
//   teclado: false,
// }

// const meusDados1: InterfaceProduto = {
//   nome: 'Notebook',
//   preco: 7000,
//   teclado: true,
// }

// preencherDados(meusDados0)
// preencherDados(meusDados1)

// let categoria: Categorias = 'camisetas'

// interface Empresa {
//   nome: string
//   fundacao: number
//   pais: string
// }

// interface Produto {
//   nome: string
//   preco: number
//   descricao: string
//   garantia: string
//   seguroAcidentes: boolean
//   empresaFabricante: Empresa
//   empresaMontadora: Empresa
// }

// async function fetchProduct() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json')
//   const data = await response.json()
//   showProduct(data)
// }

// fetchProduct()

// function showProduct(data: Produto) {
//   document.body.innerHTML = `
//     <div>
//       <h2>${data.nome}</h2>
//       <p>R$ ${data.preco}</p>
//       <p>${data.descricao}</p>
//       <p>${data.garantia}</p>
//       <p>${data.seguroAcidentes}</p>
//       <h4>Empresa Fabricante</h4>
//       <p>${data.empresaFabricante.nome}</p>
//       <p>${data.empresaFabricante.fundacao}</p>
//        <p>${data.empresaFabricante.pais}</p>
//       <h4>Empresa Montadora</h4>
//       <p>${data.empresaMontadora.nome}</p>
//       <p>${data.empresaMontadora.fundacao}</p>
//        <p>${data.empresaMontadora.pais}</p>
//     </div>
//   `
// }

// const numeros = [10, 25, 36, 47, 25, 15, 26]
// const valores = [25, 35, 'string', 'preço', 56545645, 8, {}, []]

// const maiorQueDez = (numeros: number[]) => {
//   return numeros.filter((numeros) => numeros > 10)
// }

// const filtrarValores = (valores: Array<string | number | object>) => {
//   return valores.filter((valor) => typeof valor === 'number')
// }

// console.log(maiorQueDez(numeros))
// console.log(filtrarValores(valores))

interface Curso {
  nome: string
  horas: number
  aulas: number
  gratuito: boolean
  tags: string[]
  idAulas: number[]
  nivel: 'iniciante' | 'avancado'
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const data = await response.json()
  mostrarCursos(data)
}

fetchCursos()

function mostrarCursos(cursos: Curso[]) {
  for (const curso of cursos) {
    let color = curso.nivel === 'iniciante' ? 'blue' : 'red'
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
    `
  }
}

