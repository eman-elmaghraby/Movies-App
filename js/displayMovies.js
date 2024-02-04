
export  function displayMovies(id, title, overview, poster_path, vote_average,release_date){
    this.id= id;
    this.title=title;
    this.overview=overview;
    this.poster_path=poster_path
    this.vote_average=vote_average
    this.release_date=release_date
   
  
      

        }


        displayMovies.prototype.display= async function (category= "now_playing"){
            document.querySelector(".loading").style.display = "block";
            let moviesApi= await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
            document.querySelector(".loading").style.display = "none";
                moviesApi= await moviesApi.json()
             let movies=moviesApi.results
                return movies
            }