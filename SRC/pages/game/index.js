const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("" ,"img/icon-collabcode.png" , 'Gueio Mascote Collabcode' );
const $memoryCardC = createMemoryCard( "-front" ,"img/icon-c.png" , 'Icone livro de C++ ');
const $memoryCardJS = createMemoryCard("-front" , "img/icon-js.png" ,  'Icone livro de JS ' );
const $memoryCardJava = createMemoryCard("-front" , "img/icon-java.png" ,  'Icone livro de Java');
const $memoryCardWoman = createMemoryCard("-front" , "img/icon-woman.png" ,  'Icone woman codando');



$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardWoman);



$root.insertAdjacentElement("beforeend" , $cardsWrapper);






