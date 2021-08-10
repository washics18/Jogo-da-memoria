
const createMemoryCard = () => `

<article class="memory-card">
<img 
src='img/icon-collabcode.png'
alt='Gueio Mascote Collabcode' 
class='icon'
onclick = handleClick();
/>

</article>

` ;


const createMemoryCardFront = () => `

<article class="memory-card -front">

<img 
src='img/icon-c.png'
alt='Imagem livro C++' 
class='icon'
onclick = handleClick();
/>


</article>

`;


const handleClick = () => {
    console.log("foi");
}