// =========================
// news.js
// =========================

const news = [

{
    id:1,
    title:"Kirakták a Lego Batman Deluxe Edition kiegészítőit",
    category:"GAMES",
    image:"kepek/legobatmandeluxe.webp",
},

{
    id:2,
    title:"Megjelent az ABSOLUTE Ben 10 képregény",
    category:"COMICS",
    image:"kepek/absoluteben10.webp"
},

{
    id:3,
    title:"Akció figurával mutatták be a Punisher teljesen új megjelenését",
    category:"COMICS",
    image:"kepek/punisherfigure.webp"
},

{
    id:4,
    title:"A mese karakterek horror verziói ellepik az internetet",
    category:"MOVIES",
    image:"kepek/mousetrap.webp"
},
{
    id:5,
    title:"A Marvel is előjön a maga Absolute univerzumával",
    category:"COMICS",
    image:"kepek/midnight.webp"
}

];

const container = document.getElementById("newsContainer");

news.forEach(item => {

container.innerHTML += `

<div class="news-card">

<img src="${item.image}">

<div class="news-info">

<span>${item.category}</span>

<h3>${item.title}</h3>

<a href="new.html?id=${item.id}">
Megnyitás
</a>

</div>

</div>

`;

}
);