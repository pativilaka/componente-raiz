class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.bild());
        shadow.appendChild(this.styles());

    }

    bild(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class" , "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class" , "card_left");

        const escritor = document.createElement("span");
        escritor.textContent = "By " + (this.getAttribute("escritor") || "Anonymous");

        const titulo = document.createElement("a");
        titulo.textContent = this.getAttribute("titulo");
        titulo.href = this.getAttribute("urlTitulo");

        const descricao = document.createElement("p");
        descricao.textContent = this.getAttribute("descricao");



        const cardRight = document.createElement("div");
        cardRight.setAttribute("class" , "card_right");
        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("srcImagem") || "assets/default.png";
        imagem.width = 250;
        


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        cardLeft.appendChild(escritor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(descricao);
        cardRight.appendChild(imagem);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        
        .card{
            width: 80%;
            box-shadow: -webkit-box-shadow: 9px 10px 12px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 10px 12px 0px rgba(0,0,0,0.75);
            box-shadow: 9px 10px 12px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card_left > span{
            font-weight: 450;
        }
        
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p{
            color: darkgray;
        }

        `;

        return style;
    }
}

customElements.define('card-news', CardNews);