
function createCardsWrapper(){
 

    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");
    
    const $head = document.querySelector("head");
    const $style = document.createElement("style"); // criando uma tag style aula 26
   
    $style.textContent = `
    
    .cards-wrapper{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 10px;
        width : 100vw;
    
    }
    
    .cards-wrapper > div{
    
        margin-bottom: 10px;
    }
        
    `;
    $head.insertBefore($style , null);
    
    return  $cardsWrapper;

}

