const fotoPerfil = $('#fotoPerfil');


$(document).ready(function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];

    for (let livro of dados) {
        criarNovoElemento(livro);
    }
    removerCard();
    botaoAdicionarLivro();

    var imagemPerfil = document.getElementById('icone-usuario');
    var dataURL = localStorage.getItem('imagemPerfil');

    if (dataURL) {
        imagemPerfil.src = dataURL;
        imagemPerfil.style.borderRadius = '50%';
        imagemPerfil.style.objectFit = 'cover';
    } else {
        imagemPerfil.src = '/Assets/Img/User-Icon.png';
    }
});

function criarNovoElemento(livro) {
    let gridContainer = $('.grid-container');
    let novoCard = $('<div></div>').addClass('card').css('width', '12rem').data('id', livro.id);
    let cardBody = $('<div></div>').addClass('card-body');
    let imagem = $('<img>').addClass('card-img').attr('src', livro.imagem);
    let tituloLivro = $('<h5></h5>').addClass('card-title').text(livro.titulo);
    let detalhesLink = $('<a></a>').attr('href', 'detalhesLivro.html').addClass('btn btn-primary').text('Ver Detalhes');
    let deleteButton = $('<button></button>').addClass('deleteButton').text('Delete');
    let editButton = $('<button></button>').addClass('editButton').text('Editar');

    cardBody.append(imagem, tituloLivro, detalhesLink, deleteButton, editButton);
    novoCard.append(cardBody);
    gridContainer.append(novoCard);

    detalhesLink.click(function () {
        localStorage.setItem('origemClique','displayLivros')
        localStorage.setItem('livroAtual', livro.id);
    });
    editButton.click(function () {
        localStorage.setItem('livroAtual', livro.id);
        window.location.href = 'editarLivro.html';
    });
}

function removerCard() {
    $('.deleteButton').click(function () {
        let confirmacao = confirm('Quer mesmo deletar o anúncio?');
        if (confirmacao == true) {

            let id = $(this).closest('.card').data('id');
            let dados = JSON.parse(localStorage.getItem('livros')) || [];

            dados = dados.filter(livro => livro.id !== id);
            localStorage.setItem('livros', JSON.stringify(dados));

            $(this).closest('.card').remove();
        }

    });
}

function botaoAdicionarLivro() { 
    let botaoAddLivro = document.createElement('div');
    botaoAddLivro.className = 'botaoAddLivro';

    botaoAddLivro.innerHTML = `<a href="../../view/cadastroLivro.html"><button id = "botaoAdd">Adicione um novo livro</button></a>`; 

    $('.grid-container').append(botaoAddLivro); 
}

