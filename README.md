Aula da Alura editado e executado diretamente no Github.
# Projeto Portfólio

Neste projeto, foi desenvolvido um site de portfólio pessoal utilizando HTML e CSS. O objetivo do site é apresentar informações sobre o autor, seus projetos e habilidades de forma organizada e visualmente atrativa.

## Estrutura do projeto

O código HTML está estruturado da seguinte forma:

- **<!DOCTYPE html>**: Declaração do tipo de documento e da linguagem utilizada.
- **<html lang="pt-br">**: Elemento HTML que engloba todo o conteúdo da página, indicando o idioma como português do Brasil.
- **<head>**: Contém metadados sobre o documento, como o título da página, a codificação de caracteres utilizada e referências a arquivos externos.
- **<meta charset="UTF-8">**: Define a codificação de caracteres como UTF-8.
- **<meta http-equiv="X-UA-Compatible" content="IE=edge">**: Define a compatibilidade com o Internet Explorer.
- **<meta name="viewport" content="width=device-width, initial-scale=1.0">**: Define a escala inicial da página para dispositivos móveis.
- **<title>Portfólio</title>**: Título da página exibido na aba do navegador.
- **<link rel="stylesheet" href="./CSS/style.css">**: Referência ao arquivo de estilo CSS externo.

## Estilo do projeto

O arquivo de estilo CSS (style.css) é responsável por definir a aparência e o layout do site. Ele contém regras de estilo para elementos como texto, imagens, links, menus e seções do portfólio.

## Exemplo de código

A seguir, um exemplo de código HTML que pode ser utilizado para criar a estrutura básica de uma página de portfólio:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio</title>
    <link rel="stylesheet" href="./CSS/style.css">
</head>

<body>
    <header>
        <h1>Meu Portfólio</h1>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna ac turpis fermentum ultricies.</p>
    </section>

    <section id="projetos">
        <h2>Meus Projetos</h2>
        <div class="projeto">
            <img src="projeto1.jpg" alt="Projeto 1">
            <p>Descrição do Projeto 1</p>
        </div>
        <div class="projeto">
            <img src="projeto2.jpg" alt="Projeto 2">
            <p>Descrição do Projeto 2</p>
        </div>
    </section>

    <section id="habilidades">
        <h2>Minhas Habilidades</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </section>

    <section id="contato">
        <h2>Contato</h2>
        <p>Email: contato@meuportfolio.com</p>
    </section>

    <footer>
        <p>&copy; 2021 Meu Portfólio</p>
    </footer>
</body>

</html>
```

## Conclusão

O projeto de portfólio desenvolvido utiliza HTML e CSS para criar uma página web que apresenta informações sobre o autor de forma organizada e visualmente atraente. A estrutura do código HTML e o estilo definido no arquivo CSS contribuem para a criação de um site profissional e agradável de se navegar. 

![Exemplo de Portfólio](portfolio-example.png)

Lembre-se de personalizar o conteúdo e o estilo do site de acordo com suas preferências e necessidades. Com criatividade e dedicação, é possível criar um portfólio único e impactante para destacar suas habilidades e projetos.
