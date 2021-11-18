var apikey="563492ad6f917000010000014b0881014f2b40a790c7d80d0aee28f3"

var input=document.querySelector("input");

var button=document.querySelector("#click");

var showMore=document.querySelector(".showmore");

let pageNumber=1;
let searchText="";
let search=false;


input.addEventListener("input", function(event){
    event.preventDefault();
    searchText=event.target.value;
})

button.addEventListener("click", function(event){
    if(input.value===""){
        alert("please enter some text")
        return;
    }
    clearGallery();
    search=true;
    searchPhotos(searchText,pageNumber)
})

//defining clearGallery function for initializing again

function clearGallery(){
    document.querySelector(".display-images").innerHTML="";
    pageNumber=1;
}

//fetching images using API
 async function CuratedPhotos(pageNumber){
  const data= await fetch(`https://api.pexels.com/v1/curated?page=${pageNumber}`,{
      method:"GET",
      headers:{
          "Accept":"application/json",
          "Authorization":apikey
      }
  })
  const response = await data.json()

  displayImages(response)
}

function displayImages(response){
    response.photos.forEach((image) =>{
        const photo = document.createElement("div");
       photo.innerHTML=`<img src=${image.src.large}>
       <figcaption>Photo by: ${image.photographer}</
       figcaption>`
       document.querySelector(".display-images").appendChild(photo)

    })
 }
 
 //
 async function searchPhotos(query,pageNumber){
     const data=await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${pageNumber}`,{
         method:"GET",
    headers:{
        'Accept':"application/json",
        "Authorization":apikey
    }
})
const response=await data.json()
displayImages(response);
}


//show more images function
showMore.addEventListener("click",function(){
    if(!search){
        pageNumber++
        CuratedPhotos(pageNumber)
    }
    else{
        if(searchText.value===""){
            pageNumber++;
            searchPhotos(searchText,pageNumber)
            return;
            
            
        }
    }
})
CuratedPhotos(pageNumber)