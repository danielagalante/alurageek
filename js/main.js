let produtos = [
    {
        id: 0,
        imagem: "https://cdn.pixabay.com/photo/2023/10/05/15/51/flowers-8296294_1280.jpg",
        produto: "Quadro Tulipa",
        valor: 140.0,
    },
    {
        id: 1,
        imagem: "https://cdn.pixabay.com/photo/2017/06/18/12/12/flower-2415523_960_720.jpg",
        produto: "Quadro Anemone Coronaria",
        valor: 180.0,
    },
    {
        id: 2,
        imagem: "https://cdn.pixabay.com/photo/2013/11/26/01/49/flowers-218487_1280.jpg",
        produto: "Quadro Crista Plumosa",
        valor: 140.0,
    },
    {
        id: 3,
        imagem: "https://cdn.pixabay.com/photo/2022/12/23/02/30/white-flowers-7673562_1280.jpg",
        produto: "Quadro Tulipa Branca",
        valor: 140.0,
    },
    {
        id: 4,
        imagem: "https://cdn.pixabay.com/photo/2019/07/03/10/08/flower-4314082_960_720.jpg",
        produto: "Quadro Narcissus Tazetta",
        valor: 170.0,
    },
    {
        id: 5,
        imagem: "https://cdn.pixabay.com/photo/2019/02/04/18/12/white-ling-3975298_1280.jpg",
        produto: "Quadro Borboleta",
        valor: 160.0,
    },
];


function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="img/lixo.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                    <img class="editar" src="img/editar.png" alt="Ícone de Edição" onclick="updateProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

function deleteProduto(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

lerProdutos();

createProduto();