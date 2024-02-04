import { OpenNav } from "./Sidenav.js";
import { OverLayer } from "./OverLayer.js";
import { displayMovies } from "./displayMovies.js";
import { UpIcon } from "./UpIcon.js";
import { RejExContact } from "./RejExContact.js";




$(".nav-side").css("left", - $(".nav-side").outerWidth(true))
$(".title").css("top", "-100px");
$("rate").css("bottom", "-100px")
$(".nav-menu").click( OpenNav)
$(document).on('mouseenter', '.over-view', OverLayer);
$(document).on('mouseleave', '.over-view', OverLayer);

let cols=""
let movies= [];

// function to display movies

async function MainFunction (){
       let displayMovie= new displayMovies()
      movies=await displayMovie.display()

      for(let i=0 ; i< movies.length; i++){
    cols += generateMovie(movies[i])

      }

      document.querySelector(".displayMovies").innerHTML= cols

}
MainFunction()


// Display Movies By Category

async function DiplayByCategoty(category){
    let displayCategory= new displayMovies()
   movies= await displayCategory.display(category)

   let cols=""
   for(let i=0; i<movies.length; i++){
    cols+= generateMovie(movies[i])
   }
   document.querySelector(".displayMovies").innerHTML= cols;

}


//  function to display movies

function generateMovie(movie){
  return `<div class="col-lg-4 col-md-6">
  <div class="over-view position-relative overflow-hidden">
    <div class="cardImg w-100">
      <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' class="img-fluid rounded-2" alt="">
    </div>

    <div class="over-layer m-auto position-absolute top-0  bottom-0 start-0 end-0  px-2 overflow-hidden">
      <h3 class="title position-relative mb-2">${movie.title}</h3>
      <p class="p-Layer position-relative" style="color: #EDEDED;">${movie.overview}</p>
      <p >
        <span class="fst-normal">Release Date</span>
        <span> :${movie.release_date}</span>
      </p>
      <div class="rate position-relative">
        <i class="fa-solid fa-star text-warning fs-6"></i>
        <i class="fa-solid fa-star text-warning fs-6"></i>
        <i class="fa-solid fa-star text-warning fs-6"></i>
      </div>
      <p class="rate position-relative rounded-circle border border-1 border-success d-flex justify-content-center align-items-center mt-1 p-3" style="width: 30px; height: 30px;">${movie.vote_average}</p>
    </div>
  </div>
  
</div>`
}


// display movies by menu-li in navbar

let linkMovies= document.querySelectorAll(".menu-li");
for(let i=0; i<linkMovies.length; i++){
  linkMovies[i].addEventListener("click", (e) =>{
    let category = e.target.getAttribute("data-category");
        DiplayByCategoty(category)
  
  })
}


// up icon
UpIcon()
$(".up-icon-container").click(()=>{
  $('html, body').animate({"scrollTop": 0}, 1000);
})


//validation contact form

RejExContact()