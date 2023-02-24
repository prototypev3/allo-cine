const moovies = fetch('/data/moovies.json')

moovies
    .then(function (reponse) {
        console.log(reponse);
        return reponse.json();
    })

    .then(function (mooviesList) {
        console.log(mooviesList);







        document.getElementById("movie").innerHTML = `
            <h1 class="mov-title d-flex justify-content-center  ml-2 pt-2 pb-4 bg-warning"> Projet Mini Allo-Ciné! </h1>
                ${mooviesList.map(function (movi) {
            return `
                        <div class="film container border bg-white mt-5 mb-5">
                            <div class="row ">
                                <div class="col-4 d-flex justify-content-center">
                            
                                    <img class="movi-photo pt-4 pb-4" src="${movi.Poster}">
                                </div>
                            
                                
                                <div class="col-6 pt-2 mb-2">

                                <h1> ${movi.Title}</h1> <br> 
                                Année de sortie du Film:  ${movi.Year}<br>
                                Réalisateur: ${movi.Director}<br><br>
                                Résumé:  ${movi.Plot}<br><br>
                                Notation: ${movi.Metascore} <br>
                                <img class="movi-images pt-3 pb-2" src="${movi.Images[0]}">
                                <img class="movi-images pt-3 pb-2" src="${movi.Images[1]}">
                                <img class="movi-images pt-3 pb-2" src="${movi.Images[2]}">
                                
                               
                                
                                    
                                </div>
                                
                                
                            </div>  
                        </div>    
                        `


        }).join('')
            }
           ` ;

    })


