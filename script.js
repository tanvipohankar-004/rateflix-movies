const movies = [

{
id:1,
title:"Article 370",
year:2024,
language:"Hindi",
genre:"Political Thriller",
theme:"Intelligence",
imdb:"7.8",
poster:"images/article370.jpg",
trailer:"https://www.youtube.com/embed/Nwce9WwkcMg",
director:"Aditya Suhas Jambhale",
starring:"Yami Gautam, Priyamani, Skand Thakur",
producer:"Jyoti Deshpande, Aditya Dhar",
productionHouse:"B62 Studios, Jio Studios",
budget:"₹20 Cr",
boxOffice:"₹110.57 Cr",
song:"Dua",
whereToWatch:"Netflix",
reviews:[
"Strong political thriller with gripping screenplay.",
"Yami Gautam delivers a powerful performance.",
"Sharp and engaging patriotic drama."
]
},

{
id:2,
title:"Baby",
year:2015,
language:"Hindi",
genre:"Action Thriller",
theme:"Spy Mission",
imdb:"7.9",
poster:"images/baby.jpg",
trailer:"https://www.youtube.com/embed/-Yu_2nyOP5o",
director:"Neeraj Pandey",
starring:"Akshay Kumar, Rana Daggubati, Taapsee Pannu",
producer:"Bhushan Kumar, Krishan Kumar",
productionHouse:"Friday Filmworks, T-Series",
budget:"₹59 Cr",
boxOffice:"₹143 Cr",
song:"Beparwah",
whereToWatch:"Disney+ Hotstar",
reviews:[
"One of the finest Indian spy thrillers.",
"Smart screenplay and realistic action.",
"Akshay Kumar shines throughout."
]
},

{
id:3,
title:"Bigil",
year:2019,
language:"Tamil",
genre:"Sports Drama",
theme:"Football",
imdb:"6.7",
poster:"images/bigil.jpg",
trailer:"https://www.youtube.com/embed/GR-Ui8-V2M0",
director:"Atlee",
starring:"Vijay, Nayanthara, Jackie Shroff",
producer:"Kalpathi S. Aghoram",
productionHouse:"AGS Entertainment",
budget:"₹180 Cr",
boxOffice:"₹305 Cr",
song:"Verithanam",
whereToWatch:"Amazon Prime Video",
reviews:[
"Mass entertainer with emotional sports angle.",
"Vijay dominates the screen.",
"Strong music and visuals."
]
},

{
id:4,
title:"De Dhakka 2",
year:2022,
language:"Marathi",
genre:"Comedy Drama",
theme:"Family",
imdb:"6.4",
poster:"images/dedhakka2.jpg",
trailer:"https://www.youtube.com/embed/QpvEWVVnICE",
director:"Mahesh Manjrekar, Sudesh Manjrekar",
starring:"Makarand Anaspure, Siddharth Jadhav, Shivaji Satam",
producer:"Yatin Jadhav",
productionHouse:"Ameya Vinod Khopkar Entertainment",
budget:"₹10 Cr",
boxOffice:"₹10.86 Cr",
song:"De Dhakka Title Song",
whereToWatch:"Amazon Prime Video",
reviews:[
"Fun family entertainer with strong Marathi humour.",
"Good continuation of the original.",
"Perfect weekend watch."
]
},

{
id:5,
title:"Deool Band",
year:2015,
language:"Marathi",
genre:"Spiritual Drama",
theme:"Faith",
imdb:"7.7",
poster:"images/deool-band.jpg",
trailer:"https://www.youtube.com/embed/zsQmvJmM5ZA",
director:"Pravin Tarde, Pranit Kulkarni",
starring:"Gashmeer Mahajani, Girija Joshi, Mohan Joshi",
producer:"Vatavriksha Entertainment",
productionHouse:"Vatavriksha Entertainment",
budget:"₹2.5 Cr",
boxOffice:"₹20 Cr",
song:"Utha Utha Sakaljan",
whereToWatch:"ZEE5",
reviews:[
"Emotionally powerful spiritual drama.",
"Mohan Joshi was exceptional.",
"Strong devotional atmosphere."
]
},

{
id:6,
title:"Deool Band 2",
year:2026,
language:"Marathi",
genre:"Spiritual Drama",
theme:"Faith",
imdb:"7.5",
poster:"images/deool-band2.jpg",
trailer:"https://www.youtube.com/embed/agTtkczLlww",
director:"Pravin Tarde",
starring:"Pravin Tarde, Snehal Tarde, Mohan Joshi",
producer:"Kailash Wani",
productionHouse:"Vatavriksha Production",
budget:"₹10 Cr",
boxOffice:"₹30.04 Cr",
song:"Swami Samarth Maharaj Bhakti Geet",
whereToWatch:"Theatres",
reviews:[
"Spiritual sequel with emotional storytelling.",
"Beautiful devotional soundtrack.",
"Strong performances throughout."
]
},

{
id:7,
title:"Drishyam",
year:2013,
language:"Malayalam",
genre:"Crime Thriller",
theme:"Family Protection",
imdb:"8.3",
poster:"images/drishyam.jpg",
trailer:"https://www.youtube.com/embed/64xJLmcA2K8",
director:"Jeethu Joseph",
starring:"Mohanlal, Meena, Asha Sharath",
producer:"Antony Perumbavoor",
productionHouse:"Aashirvad Cinemas",
budget:"₹5 Cr",
boxOffice:"₹50 Cr",
song:"Marivil",
whereToWatch:"Disney+ Hotstar",
reviews:[
"Masterpiece thriller with brilliant writing.",
"Mohanlal delivered an iconic performance.",
"One of Indian cinema's finest thrillers."
]
},

{
id:8,
title:"Drishyam 2",
year:2021,
language:"Malayalam",
genre:"Crime Thriller",
theme:"Suspense",
imdb:"8.4",
poster:"images/drishyam2.jpg",
trailer:"https://www.youtube.com/embed/cxA2y9Tgl7o",
director:"Jeethu Joseph",
starring:"Mohanlal, Meena, Murali Gopy",
producer:"Antony Perumbavoor",
productionHouse:"Aashirvad Cinemas",
budget:"₹15 Cr",
boxOffice:"OTT Blockbuster",
song:"Drishyam 2 Theme",
whereToWatch:"Amazon Prime Video",
reviews:[
"Brilliant continuation of the original.",
"Smart twists and suspense.",
"Georgekutty returns stronger."
]
},

{
id:9,
title:"Dhurandhar",
year:2025,
language:"Hindi",
genre:"Action Thriller",
theme:"Espionage",
imdb:"9.0",
poster:"images/dhurandhar.jpg",
trailer:"https://www.youtube.com/embed/oQ8K9K9F5iA",
director:"Aditya Dhar",
starring:"Ranveer Singh, Akshaye Khanna, Sanjay Dutt",
producer:"Jyoti Deshpande, Aditya Dhar",
productionHouse:"Jio Studios, B62 Studios",
budget:"₹255 Cr",
boxOffice:"₹1000 Cr",
song:"Ishq Jalakar",
whereToWatch:"Netflix",
reviews:[
"Massive blockbuster with intense action.",
"Ranveer Singh dominates the role.",
"Stylish spy thriller experience."
]
},

{
id:10,
title:"Dhurandhar 2",
year:2026,
language:"Hindi",
genre:"Action Thriller",
theme:"Espionage",
imdb:"9.0",
poster:"images/dhurandhar2.jpg",
trailer:"https://www.youtube.com/embed/x6vY3vP5v0M",
director:"Aditya Dhar",
starring:"Ranveer Singh, R. Madhavan, Sanjay Dutt",
producer:"Jyoti Deshpande, Aditya Dhar",
productionHouse:"Jio Studios, B62 Studios",
budget:"₹225 Cr",
boxOffice:"₹1850 Cr",
song:"Gehra Hua",
whereToWatch:"JioHotstar",
reviews:[
"High-voltage sequel with grand visuals.",
"Strong emotional and action balance.",
"One of the biggest Indian blockbusters."
]
},

{
id:11,
title:"Jawan",
year:2023,
language:"Hindi",
genre:"Action Thriller",
theme:"Vigilante",
imdb:"7.6",
poster:"images/jawan.jpg",
trailer:"https://www.youtube.com/embed/MWOlnZSnXJo",
director:"Atlee",
starring:"Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
producer:"Gauri Khan",
productionHouse:"Red Chillies Entertainment",
budget:"₹300 Cr",
boxOffice:"₹1160 Cr",
song:"Chaleya",
whereToWatch:"Netflix",
reviews:[
"Mass entertainer with strong social message.",
"SRK in peak commercial form.",
"Excellent action and music."
]
},

{
id:12,
title:"Kalki 2898 AD",
year:2024,
language:"Telugu",
genre:"Sci-Fi Action",
theme:"Mythology",
imdb:"7.0",
poster:"images/kalki.jpg",
trailer:"https://www.youtube.com/embed/BfCIPsEGAS8",
director:"Nag Ashwin",
starring:"Prabhas, Amitabh Bachchan, Deepika Padukone",
producer:"C. Aswani Dutt",
productionHouse:"Vyjayanthi Movies",
budget:"₹600 Cr",
boxOffice:"₹1100 Cr",
song:"Bhairava Anthem",
whereToWatch:"Netflix",
reviews:[
"Visual spectacle on a massive scale.",
"Unique mythology and sci-fi fusion.",
"Strong performances from ensemble cast."
]
},

{
id:13,
title:"Leo",
year:2023,
language:"Tamil",
genre:"Action Thriller",
theme:"Gangster",
imdb:"7.2",
poster:"images/leo.jpg",
trailer:"https://www.youtube.com/embed/Po3jStA673E",
director:"Lokesh Kanagaraj",
starring:"Vijay, Trisha Krishnan, Sanjay Dutt",
producer:"S. S. Lalit Kumar",
productionHouse:"Seven Screen Studio",
budget:"₹300 Cr",
boxOffice:"₹620 Cr",
song:"Naa Ready",
whereToWatch:"Netflix",
reviews:[
"Stylish action entertainer.",
"Lokesh cinematic universe expands strongly.",
"Vijay delivers a mass performance."
]
},

{
id:14,
title:"Mission Mangal",
year:2019,
language:"Hindi",
genre:"Drama",
theme:"Space Mission",
imdb:"6.5",
poster:"images/mission-mangal.jpg",
trailer:"https://www.youtube.com/embed/q10nfS9V090",
director:"Jagan Shakti",
starring:"Akshay Kumar, Vidya Balan, Taapsee Pannu",
producer:"Cape of Good Films",
productionHouse:"Fox Star Studios",
budget:"₹100 Cr",
boxOffice:"₹290.59 Cr",
song:"Dil Mein Mars Hai",
whereToWatch:"Disney+ Hotstar",
reviews:[
"Inspiring ISRO based drama.",
"Strong ensemble performances.",
"Proud cinematic experience."
]
},

{
id:15,
title:"Parmanu",
year:2018,
language:"Hindi",
genre:"Drama Thriller",
theme:"Nuclear Mission",
imdb:"7.6",
poster:"images/parmanu.jpg",
trailer:"https://www.youtube.com/embed/qN_9DnBh3hM",
director:"Abhishek Sharma",
starring:"John Abraham, Diana Penty, Boman Irani",
producer:"JA Entertainment",
productionHouse:"Zee Studios",
budget:"₹44 Cr",
boxOffice:"₹96 Cr",
song:"Thare Vaaste",
whereToWatch:"ZEE5",
reviews:[
"Engaging patriotic thriller.",
"Excellent suspense and pacing.",
"Interesting historical adaptation."
]
},

{
id:16,
title:"Raazi",
year:2018,
language:"Hindi",
genre:"Spy Thriller",
theme:"Espionage",
imdb:"7.7",
poster:"images/raazi.jpg",
trailer:"https://www.youtube.com/embed/YjMSttRJrhA",
director:"Meghna Gulzar",
starring:"Alia Bhatt, Vicky Kaushal",
producer:"Karan Johar",
productionHouse:"Dharma Productions",
budget:"₹35 Cr",
boxOffice:"₹195.75 Cr",
song:"Ae Watan",
whereToWatch:"Amazon Prime Video",
reviews:[
"Emotional and intelligent spy drama.",
"Outstanding performance by Alia Bhatt.",
"Powerful patriotic storytelling."
]
},

{
id:17,
title:"RRR",
year:2022,
language:"Telugu",
genre:"Action Drama",
theme:"Freedom Fighters",
imdb:"7.8",
poster:"images/rrr.jpg",
trailer:"https://www.youtube.com/embed/f_vbAtFSEc0",
director:"S. S. Rajamouli",
starring:"NTR Jr., Ram Charan, Alia Bhatt",
producer:"D. V. V. Danayya",
productionHouse:"DVV Entertainment",
budget:"₹550 Cr",
boxOffice:"₹1387 Cr",
song:"Naatu Naatu",
whereToWatch:"Netflix",
reviews:[
"Epic cinematic spectacle.",
"Action sequences are world-class.",
"Historic Oscar-winning soundtrack."
]
},

{
id:18,
title:"Raja Shivaji",
year:2026,
language:"Marathi",
genre:"Historical Drama",
theme:"History",
imdb:"8.8",
poster:"images/rajashivaji.jpg",
trailer:"https://www.youtube.com/embed/3CXt4GtjLmc",
director:"Riteish Deshmukh",
starring:"Riteish Deshmukh, Sanjay Dutt, Abhishek Bachchan",
producer:"Genelia Deshmukh",
productionHouse:"Mumbai Film Company",
budget:"₹75 Cr",
boxOffice:"₹124.55 Cr",
song:"Jai Shivrai",
whereToWatch:"Theatres",
reviews:[
"Grand Marathi historical film.",
"Powerful performances and visuals.",
"Emotional tribute to Shivaji Maharaj."
]
},

{
id:19,
title:"Sairat",
year:2016,
language:"Marathi",
genre:"Romantic Drama",
theme:"Love Story",
imdb:"8.3",
poster:"images/sairat.jpg",
trailer:"https://www.youtube.com/embed/iShPI_JF524",
director:"Nagraj Manjule",
starring:"Rinku Rajguru, Akash Thosar",
producer:"Nitin Keni",
productionHouse:"Zee Studios",
budget:"₹4 Cr",
boxOffice:"₹110 Cr",
song:"Zingaat",
whereToWatch:"ZEE5",
reviews:[
"Iconic Marathi love story.",
"Natural performances and music.",
"Emotionally heartbreaking climax."
]
},

{
id:20,
title:"Sam Bahadur",
year:2023,
language:"Hindi",
genre:"Biographical War Drama",
theme:"Military",
imdb:"7.9",
poster:"images/sam-bahadur.jpg",
trailer:"https://www.youtube.com/embed/6xJptj7AVSA",
director:"Meghna Gulzar",
starring:"Vicky Kaushal, Sanya Malhotra",
producer:"Ronnie Screwvala",
productionHouse:"RSVP Movies",
budget:"₹55 Cr",
boxOffice:"₹128.17 Cr",
song:"Sam Bahadur Title Track",
whereToWatch:"ZEE5",
reviews:[
"Vicky Kaushal delivers a stellar performance.",
"Strong military storytelling.",
"Inspirational biographical drama."
]
},

{
id:21,
title:"Shershaah",
year:2021,
language:"Hindi",
genre:"War Drama",
theme:"Military",
imdb:"8.3",
poster:"images/shershaah.jpg",
trailer:"https://www.youtube.com/embed/Q0FTXnefVBA",
director:"Vishnuvardhan",
starring:"Sidharth Malhotra, Kiara Advani",
producer:"Karan Johar",
productionHouse:"Dharma Productions",
budget:"₹55 Cr",
boxOffice:"OTT Blockbuster",
song:"Raataan Lambiyan",
whereToWatch:"Amazon Prime Video",
reviews:[
"Emotional patriotic war drama.",
"Excellent chemistry and storytelling.",
"One of the best military biopics."
]
},

{
id:22,
title:"Super 30",
year:2019,
language:"Hindi",
genre:"Biographical Drama",
theme:"Education",
imdb:"7.9",
poster:"images/super30.jpg",
trailer:"https://www.youtube.com/embed/QpvEWVVnICE",
director:"Vikas Bahl",
starring:"Hrithik Roshan, Mrunal Thakur",
producer:"Sajid Nadiadwala",
productionHouse:"Nadiadwala Grandson Entertainment",
budget:"₹60 Cr",
boxOffice:"₹208.93 Cr",
song:"Jugraafiya",
whereToWatch:"Disney+ Hotstar",
reviews:[
"Inspiring educational drama.",
"Hrithik Roshan gives heartfelt performance.",
"Strong emotional storytelling."
]
},

{
id:23,
title:"The Ghazi Attack",
year:2017,
language:"Hindi",
genre:"War Thriller",
theme:"Naval Warfare",
imdb:"7.5",
poster:"images/the-ghazi-attack.jpg",
trailer:"https://www.youtube.com/embed/Xn2qOnKuOoc",
director:"Sankalp Reddy",
starring:"Rana Daggubati, Kay Kay Menon, Taapsee Pannu",
producer:"Anvesh Reddy",
productionHouse:"PVP Cinema",
budget:"₹15 Cr",
boxOffice:"₹34.50 Cr",
song:"Taariqe",
whereToWatch:"Amazon Prime Video",
reviews:[
"Unique underwater war thriller.",
"Excellent tension and performances.",
"Underrated military film."
]
},

{
id:24,
title:"The Kerala Story",
year:2023,
language:"Hindi",
genre:"Drama",
theme:"Social",
imdb:"6.2",
poster:"images/keralastory.jpg",
trailer:"https://www.youtube.com/embed/3Jk3vquJDGs",
director:"Sudipto Sen",
starring:"Adah Sharma, Yogita Bihani",
producer:"Vipul Amrutlal Shah",
productionHouse:"Sunshine Pictures",
budget:"₹20 Cr",
boxOffice:"₹303.97 Cr",
song:"Amma",
whereToWatch:"ZEE5",
reviews:[
"Controversial yet commercially successful.",
"Strong lead performance.",
"Emotionally intense drama."
]
},

{
id:25,
title:"The Kerala Story 2",
year:2026,
language:"Hindi",
genre:"Drama",
theme:"Social",
imdb:"6.3",
poster:"images/keralastory2.jpg",
trailer:"https://www.youtube.com/embed/j0_038C5RRk",
director:"Kamakhya Narayan Singh",
starring:"Ulka Gupta, Aditi Bhatia",
producer:"Vipul Amrutlal Shah",
productionHouse:"Sunshine Pictures",
budget:"₹30 Cr",
boxOffice:"Hit",
song:"O Maayi Ri",
whereToWatch:"Theatres",
reviews:[
"Continues the emotional narrative.",
"Improved production quality.",
"Strong dramatic moments."
]
},

{
id:26,
title:"Ved",
year:2022,
language:"Marathi",
genre:"Romantic Drama",
theme:"Love",
imdb:"7.2",
poster:"images/ved.jpg",
trailer:"https://www.youtube.com/embed/Al2Gtph9ytI",
director:"Riteish Deshmukh",
starring:"Riteish Deshmukh, Genelia D'Souza",
producer:"Genelia D'Souza",
productionHouse:"Mumbai Film Company",
budget:"₹15 Cr",
boxOffice:"₹75 Cr",
song:"Ved Lavlay",
whereToWatch:"Disney+ Hotstar",
reviews:[
"Beautiful Marathi romantic drama.",
"Excellent chemistry between lead actors.",
"Strong music album."
]
},

{
id:27,
title:"Zootopia",
year:2016,
language:"English",
genre:"Animated Adventure",
theme:"Friendship",
imdb:"8.0",
poster:"images/zootopia.jpg",
trailer:"https://www.youtube.com/embed/jWM0ct-OLsM",
director:"Byron Howard, Rich Moore",
starring:"Ginnifer Goodwin, Jason Bateman",
producer:"Clark Spencer",
productionHouse:"Walt Disney Animation Studios",
budget:"$150 Million",
boxOffice:"$1.024 Billion",
song:"Try Everything",
whereToWatch:"Disney+",
reviews:[
"One of Disney's finest animated films.",
"Funny, emotional and meaningful.",
"Excellent world-building and characters."
]
},

{
id:28,
title:"Zootopia 2",
year:2025,
language:"English",
genre:"Animated Adventure",
theme:"Mystery",
imdb:"8.3",
poster:"images/zootopia2.jpg",
trailer:"https://www.youtube.com/embed/gWOHefknlhE",
director:"Jared Bush",
starring:"Ginnifer Goodwin, Jason Bateman, Ke Huy Quan",
producer:"Yvett Merino",
productionHouse:"Walt Disney Animation Studios",
budget:"$150 Million",
boxOffice:"$1.87 Billion",
song:"Zoo",
whereToWatch:"Disney+",
reviews:[
"Excellent sequel with fresh mystery.",
"Beautiful animation quality.",
"Judy and Nick remain iconic duo."
]
}

];


let selectedLanguage = "All";
let selectedGenre = "All";
let selectedTheme = "All";
let selectedActor = "All";

/* -------------------------
   WISHLIST HELPERS
-------------------------- */

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function isWishlisted(id) {
  return getWishlist().includes(id);
}

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.padding = "12px 20px";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.borderRadius = "12px";
    toast.style.zIndex = "99999";
    toast.style.fontSize = "14px";
    toast.style.opacity = "0";
    toast.style.transition = "0.3s ease";
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);
}

function toggleWishlist(id) {
  let wishlist = getWishlist();

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(movieId => movieId !== id);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("Movie wishlisted ❤️");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  renderMovies();

  const modal = document.getElementById("modal");
  if (!modal.classList.contains("hidden")) {
    showDetails(id);
  }
}

/* -------------------------
   FILTERS
-------------------------- */

function unique(field) {
  return [
    "All",
    ...new Set(
      movies
        .map(movie => movie[field])
        .filter(Boolean)
    )
  ];
}

function renderFilters() {
  render("languageFilters", unique("language"), "Language");
  render("genreFilters", unique("genre"), "Genre");

  if (movies.some(movie => movie.theme)) {
    render("themeFilters", unique("theme"), "Theme");
  }

  const actors = [
    "All",
    ...new Set(
      movies.flatMap(movie =>
        movie.starring
          ? movie.starring.split(",").map(actor => actor.trim())
          : []
      )
    )
  ];

  render("actorFilters", actors, "Actor");
}

function render(id, items, type) {
  const container = document.getElementById(id);

  if (!container) return;

  container.innerHTML = items
    .map(
      item => `
<button
class="filter-btn ${getSelected(type) === item ? "active" : ""}"
onclick="setFilter('${type}','${item}')">
${item}
</button>
`
    )
    .join("");
}

function getSelected(type) {
  if (type === "Language") return selectedLanguage;
  if (type === "Genre") return selectedGenre;
  if (type === "Theme") return selectedTheme;
  if (type === "Actor") return selectedActor;
}

function setFilter(type, value) {
  if (type === "Language") selectedLanguage = value;
  if (type === "Genre") selectedGenre = value;
  if (type === "Theme") selectedTheme = value;
  if (type === "Actor") selectedActor = value;

  renderFilters();
  renderMovies();
}

/* -------------------------
   MOVIES GRID
-------------------------- */

function renderMovies() {
  const search =
    document.getElementById("searchInput")?.value.toLowerCase() || "";

  const filtered = movies.filter(movie => {
    return (
      (selectedLanguage === "All" ||
        movie.language === selectedLanguage) &&

      (selectedGenre === "All" ||
        movie.genre === selectedGenre) &&

      (selectedTheme === "All" ||
        !movie.theme ||
        movie.theme === selectedTheme) &&

      (selectedActor === "All" ||
        movie.starring.includes(selectedActor)) &&

      movie.title.toLowerCase().includes(search)
    );
  });

  const movieGrid = document.getElementById("movieGrid");

  movieGrid.innerHTML = filtered
    .map(movie => {
      const wishlisted = isWishlisted(movie.id);

      return `
<div class="movie-card" style="max-width:340px;width:100%;margin:auto;position:relative;">

<button
onclick="toggleWishlist(${movie.id})"
style="
position:absolute;
top:10px;
right:10px;
border:none;
background:rgba(0,0,0,0.6);
color:white;
width:34px;
height:34px;
border-radius:50%;
cursor:pointer;
font-size:16px;
z-index:10;
">
${wishlisted ? "✕" : "♡"}
</button>

<img
src="${movie.poster}"
alt="${movie.title}"
style="
width:100%;
height:460px;
object-fit:cover;
border-radius:16px;
"
/>

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.language} • ${movie.genre}</p>

<p>IMDb ⭐ ${movie.imdb}</p>

<div class="btn-row">

<button
class="primary-btn"
onclick="showDetails(${movie.id})">
Details
</button>

<button
class="secondary-btn"
${!movie.trailer ? "disabled" : ""}
onclick="${
  movie.trailer
    ? `showTrailer('${movie.trailer}')`
    : ""
}">
${movie.trailer ? "▶ Trailer" : "Trailer N/A"}
</button>

</div>

</div>

</div>
`;
    })
    .join("");
}

/* -------------------------
   TRAILER
-------------------------- */

function showTrailer(url) {
  if (!url) return;

  document.getElementById("modalBody").innerHTML = `
<button class="close-modal" onclick="closeModal()">✕</button>

<iframe
width="100%"
height="520"
src="${url}"
allowfullscreen
style="border:none;border-radius:16px;">
</iframe>
`;

  document.getElementById("modal").classList.remove("hidden");
}

/* -------------------------
   DETAILS MODAL
-------------------------- */

function showDetails(id) {
  const movie = movies.find(movie => movie.id === id);

  if (!movie) return;

  const wishlisted = isWishlisted(id);

  document.getElementById("modalBody").innerHTML = `
<button class="close-modal" onclick="closeModal()">✕</button>

<div class="modal-grid">

<div class="modal-left">
<img src="${movie.poster}" alt="${movie.title}">
</div>

<div class="modal-right">

<h2>${movie.title}</h2>

<div class="meta">
<span>⭐ ${movie.imdb}</span>
<span>${movie.year}</span>
<span>${movie.language}</span>
<span>${movie.genre}</span>
</div>

<p class="overview">
A cinematic ${movie.genre.toLowerCase()} experience from ${
    movie.language
  } cinema.
</p>

<div class="details-grid">

<div><b>Director:</b><br>${movie.director}</div>
<div><b>Cast:</b><br>${movie.starring}</div>
<div><b>Producer:</b><br>${movie.producer}</div>
<div><b>Production House:</b><br>${movie.productionHouse}</div>
<div><b>Budget:</b><br>${movie.budget}</div>
<div><b>Box Office:</b><br>${movie.boxOffice}</div>
<div><b>Song:</b><br>${movie.song}</div>
<div><b>Where to Watch:</b><br>${movie.whereToWatch}</div>

</div>

<div class="reviews-section">

<h3>Viewer Reviews</h3>

${movie.reviews
  .map(
    review => `
<div class="review-card">
"${review}"
</div>
`
  )
  .join("")}

</div>

<div class="btn-row" style="margin-top:24px;">

${
  movie.trailer
    ? `
<button
class="primary-btn"
onclick="showTrailer('${movie.trailer}')">
▶ Watch Trailer
</button>
`
    : ""
}

<button
class="secondary-btn"
onclick="toggleWishlist(${movie.id})">
${wishlisted ? "❤️ Remove Wishlist" : "🤍 Add Wishlist"}
</button>

</div>

</div>
</div>
`;

  document.getElementById("modal").classList.remove("hidden");
}


/* -------------------------
   MODAL CLOSE
-------------------------- */

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modalBody").innerHTML = "";
}

document.getElementById("modal")
?.addEventListener("click", e => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

/* -------------------------
   SEARCH
-------------------------- */

document
  .getElementById("searchInput")
  ?.addEventListener("input", renderMovies);

/* -------------------------
   INIT
-------------------------- */

renderFilters();
renderMovies();

localStorage.setItem(
  "movies",
  JSON.stringify(movies)
);