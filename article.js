// =========================
// article.js
// =========================

const news = [

{
    id:1,

    title:"Kirakták a Lego Batman Deluxe Edition kiegészítőit",

    image:"kepek/legobatmandeluxe.webp",

    category:"GAMES",

    author:"Filip Film Studio",

    date:"2026. Május 13.",

    content:`

    <p>
    A DC Studios hivatalosan is megerősítette, hogy egy teljesen új Batman film fejlesztése jelenleg is folyamatban van. 
    A projekt célja, hogy sokkal sötétebb, komorabb és realisztikusabb hangulatot hozzon létre, mint amit az elmúlt évek 
    szuperhősfilmjeiben megszokhattunk.
    </p>

    <p>
    A film állítólag Gotham városának korrupt világára és Batman nyomozói oldalára fog koncentrálni. 
    A kiszivárgott információk alapján több ikonikus gonosztevő is feltűnhet majd, köztük Kétarc és Madárijesztő.
    </p>

    <p>
    A rajongók már most hatalmas izgalommal várják az első előzetest, ugyanis a koncepciós képek alapján 
    a látványvilág rendkívül filmes és brutális hangulatú lesz. A produkció forgatása várhatóan még idén elkezdődik.
    </p>

    <p>
    A DC célja egy olyan filmes univerzum felépítése, amely komolyabb történetmeséléssel és erősebb karakterközpontú 
    megközelítéssel különbözik majd a korábbi adaptációktól.
    </p>

    `
},

{
    id:2,

    title:"Megjelent az ABSOLUTE Ben 10 képregény",

    image:"kepek/absoluteben10.webp",

    category:"COMICS",

    author:"Filip Film Studio",

    date:"2026. Május 12.",

    content:`

    <p>
    A Marvel Studios több új projektet jelentett be a következő évekre, amelyek teljesen átalakíthatják az MCU jövőjét. 
    Az új történetek frissebb karakterekre, multiverzum eseményekre és sötétebb konfliktusokra fókuszálnak majd.
    </p>

    <p>
    A stúdió célja, hogy újra egy grandiózus filmes élményt hozzon létre, miközben visszahozza a korábbi filmek 
    epikus hangulatát is. Több klasszikus karakter visszatéréséről is pletykálnak.
    </p>

    <p>
    A rajongók különösen izgatottak az új Bosszúállók projektek miatt, amelyek állítólag egy hatalmas eseményfilmben 
    csúcsosodnak majd ki.
    </p>

    <p>
    A Marvel emellett több Disney+ sorozaton is dolgozik, amelyek közvetlen kapcsolatban lesznek a mozifilmek történetével.
    </p>

    `
},

{
    id:3,

    title:"Akció figurával mutatták be a Punisher teljesen új megjelenését",

    image:"kepek/punisherfigure.webp",

    category:"COMICS",

    author:"Filip Film Studio",

    date:"2026. Május 10.",

    content:`

    <p>
    Az Amazon hivatalosan is bejelentette, hogy érkezik a The Boys következő évada, amely minden eddiginél brutálisabb 
    és őrültebb történetet ígér.
    </p>

    <p>
    A készítők szerint az új részek sokkal nagyobb hangsúlyt helyeznek majd Homelander mentális állapotára és arra, 
    hogyan próbálja átvenni az irányítást az egész ország felett.
    </p>

    <p>
    A kiszivárgott képek alapján rengeteg akciójelenetre, véres összecsapásra és teljesen kiszámíthatatlan fordulatokra 
    számíthatnak a nézők.
    </p>

    <p>
    A sorozat továbbra is a modern szuperhős kultúra kifigurázására épít, miközben meglepően komoly társadalmi témákat is feldolgoz.
    </p>

    `
},
{
    id:4,
    title:"A mese karakterek horror verziói ellepik az internetet",
    image:"kepek/mousetrap.webp",
    category:"MOVIES",
    author:"Filip Film Studio",
    date:"2026. Május 8.",
    content:`
    <p>
    Az internetet elárasztották a mese karakterek horror verziói, amelyek egyre népszerűbbek a rajongók körében.
    </p>
    <p>
    Ezek a művészeti alkotások gyakran sötét, groteszk és félelmetes ábrázolásokat mutatnak be, amelyek teljesen ellentétesek
    a karakterek eredeti, barátságos megjelenésével.
    </p>
    <p>
    A művészek kreatív módon használják a félelmetes elemeket, hogy új értelmet adjanak a jól ismert karaktereknek,
    miközben megőrzik azok alapvető jellemzőit.
    </p>
    <p>
    A rajongók egyre inkább értékelik ezeket a műalkotásokat, amelyek új perspektívát kínálnak a klasszikus mese karakterekre,
    és egyre több ilyen alkotás jelenik meg a közösségi médiában.
    </p>
    `
}

];

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const article = news.find(item => item.id == id);

document.getElementById("articlePage").innerHTML = `

<div class="article-header">

<span class="article-category">
${article.category}
</span>

<h1>
${article.title}
</h1>

<div class="article-meta">

<p>
Írta: ${article.author}
</p>

<p>
${article.date}
</p>

</div>

</div>

<img src="${article.image}" class="article-image">

<div class="article-content">

${article.content}

</div>

`;