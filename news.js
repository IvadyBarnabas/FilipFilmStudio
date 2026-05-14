const news = [

{
    id:1,
    title:"Bemutatták a Lego Batman Deluxe Edition kiegészítőit",
    category:"GAMES",
    image:"kepek/legobatmandeluxe.webp",
    date:"2026. Május 13."
},

{
    id:2,
    title:"Megjelent az ABSOLUTE Ben 10 képregény",
    category:"COMICS",
    image:"kepek/absoluteben10.webp",
    date:"2026. Május 13."
},

{
    id:3,
    title:"Akció figurával mutatták be a Punisher teljesen új megjelenését",
    category:"MOVIES",
    image:"kepek/punisherfigure.webp",
    date:"2026. Május 13."
},

{
    id:4,
    title:"A mese karakterek horror verziói ellepik az internetet",
    category:"MOVIES",
    image:"kepek/mousetrap.webp",
    date:"2026. Május 13."
},
{
    id:5,
    title:"A Marvel is előjön a maga Absolute univerzumával",
    category:"COMICS",
    image:"kepek/midnight.webp",
    date:"2026. Május 13."
},
{
    id:6,
    title:"40 éves lett a vámpírból lett denevér Robert Pattinson",
    category:"MOVIES",
    image:"kepek/robertpattinson.webp",
    date:"2026. Május 13."
},
{
    id:7,
    title:"Minden amit tudunk az érkező Spider Noir sorozatról",
    category:"MOVIES",
    image:"kepek/spidernoir.webp",
    date:"2026. Május 13."
},
{
    id:8,
    title:"Megérkezett az Overwatch a Fortnite-ba",
    category:"GAMES",
    image:"kepek/fortnitexoverwatch.webp",
    date:"2026. Május 13."
},
{
    id:9,
    title:"Új hősök érkeztek a Marvel Rivals frissítésében",
    category:"GAMES",
    image:"kepek/mr8.webp",
    date:"2026. Május 13."
}

];

const container = document.getElementById("newsContainer");
const categoryBar = document.getElementById("categoryBar");

const categories = ["ALL", ...Array.from(new Set(news.map(n => n.category)))];

function renderCategories() {
  if (!categoryBar) return;
  categoryBar.innerHTML = categories.map(cat => {
    const label = cat === 'ALL' ? 'Összes' : cat.charAt(0) + cat.slice(1).toLowerCase();
    return `<button class="cat-btn" data-cat="${cat}">${label}</button>`;
  }).join('');

  categoryBar.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBar.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      if (cat === 'ALL') renderNews(news);
      else renderNews(news.filter(n => n.category === cat));
    });
  });

  const first = categoryBar.querySelector('.cat-btn');
  if (first) first.classList.add('active');
}

function renderNews(items) {
  if (!container) return;
  container.innerHTML = items.map(item => `

  <div class="news-card">

  <img src="${item.image}" alt="${item.title}">

  <div class="news-info">

  <span>${item.category}</span>
  <div class="date">${item.date || ''}</div>

  <h3>${item.title}</h3>

  <a href="new.html?id=${item.id}">Megnyitás</a>

  </div>

  </div>

  `).join('');
}

renderCategories();
renderNews(news);