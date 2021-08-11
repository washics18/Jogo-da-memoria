const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();


const $memoryCardC = createMemoryCard({ 
className: "-front",
src: "img/icon-c.png" ,
alt: 'Icone livro de C++ '});

const $memoryCardJS = createMemoryCard({ 
className: "-front" , 
src: "img/icon-js.png" ,  
alt: 'Icone livro de JS ' });

const $memoryCardJava = createMemoryCard({
className: "-front" , 
src: "img/icon-java.png" , 
alt: 'Icone livro de Java'});

const $memoryCard = createMemoryCard({ 

className: "" ,
src: "img/icon-collabcode.png" , 
alt: 'Gueio Mascote Collabcode' });

const $memoryCardWoman = createMemoryCard({ 

className: "-front" , 
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






