// =========================
// news.js
// =========================

const news = [

{
    id:1,
    title:"Új Batman film készül",
    category:"FILM",
    image:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
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