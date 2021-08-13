const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({ 

src: "img/icon-c.png" ,
alt: 'Icone livro de C++ '});

const $memoryCardJS = createMemoryCard({ 

src: "img/icon-js.png" ,  
alt: 'Icone livro de JS ' });

const $memoryCardJava = createMemoryCard({

src: "img/icon-java.png" , 
alt: 'Icone livro de Java'});

const $memoryCard = createMemoryCard({ 


src: "img/icon-collabcode.png" , 
alt: 'Gueio Mascote Collabcode' });

const $memoryCardWoman = createMemoryCard({ 

src: "img/icon-woman.png" , 
alt: 'Icone woman codando'});

    

$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend" , $memoryCardWoman);



$root.insertAdjacentElement("beforeend" , $cardsWrapper);






