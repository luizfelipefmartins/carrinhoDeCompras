function soma(frutas) {
  let soma = 0;
  for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    let precoFrutas = fruta.preco;
    soma += precoFrutas;
  }
  return soma;
}

soma(frutas);

const imagens = [
  {
      img: "./assets/img/logo.png",
      alt: "Carrinho",
  },
]

let body = document.querySelector('body');
let main = document.createElement('main');
main.setAttribute('id','container');
body.appendChild(main);

let img1 = document.createElement('img');
img1.src = imagens[0].img;
img1.alt = imagens[0].alt;

main.appendChild(img1);

let titulo = document.createElement('h3');
titulo.innerHTML = 'Carrinho de Compras'

main.appendChild(titulo);

let div1 = document.createElement('div');
div1.setAttribute('class','cabecalho');

main.appendChild(div1);

  let item = document.createElement('p');
  item.innerHTML = 'ITEM';
  item.setAttribute('class','p1');

  div1.appendChild(item);

  let valor = document.createElement('p');
  valor.innerHTML = 'VALOR';
  valor.setAttribute('class','p2');

  div1.appendChild(valor);

let ul = document.createElement('ul');
ul.setAttribute('id','products');

main.appendChild(ul);

  for (let i = 0; i<frutas.length; i++) {
    let fruta = frutas[i];

    let li = document.createElement('li');
    li.setAttribute('class','productList');

    ul.appendChild(li);

    let div2 = document.createElement('div');

    li.appendChild(div2);
      let img2 = document.createElement('img');
      img2.src = fruta.img;

      div2.appendChild(img2);

      let produtoItem = document.createElement('p');
      produtoItem.setAttribute('class','productItem');
      produtoItem.innerHTML = fruta.fruta;

      div2.appendChild(produtoItem);

    let preco = document.createElement('p');
    preco.setAttribute('class','productValor');
    preco.innerHTML = `R$ ${fruta.preco},00`

    li.appendChild(preco);
  };

let section = document.createElement('section');
main.appendChild(section);

let div3 = document.createElement('div');
div3.setAttribute('class','final');

section.appendChild(div3);
  let total = document.createElement('p');
  total.setAttribute('class','p1');
  total.innerHTML = 'Total';

  div3.appendChild(total);

  let precototal = document.createElement('p');
  precototal.setAttribute('class','p2');
  precototal.innerHTML = `R$ ${soma(frutas)},00`;

  div3.appendChild(precototal);

let button = document.createElement('button');
button.innerHTML = 'Finalizar';

section.appendChild(button);