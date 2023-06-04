//todo 1 уровень сложности: написать скрипт, который отправляет запрос по адресу https://fakestoreapi.com/products и отображает карточки с продуктами. На каждой карточке должны быть указаны наименование и цена товара.

//* создаем в HTML <div id="root"></div> 

fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((data) => render(data));

const root = document.querySelector("#root");

function render(products) {
  products.forEach((product) => {
    const { title, price } = product;

    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");
    const container = document.createElement("div");

    titleElem.innerText = title;
    priceElem.innerText = price;

    container.append(titleElem, priceElem);
    root.append(container);
  });
}
