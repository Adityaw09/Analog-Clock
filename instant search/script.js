//assigning variables

const result=document.getElementById("result");
const filter=document.getElementById("filter");
const listItems=[]//initalise

getData() // on page load

filter.addEventListener("input", (e)=>filterData(e.target.value));

async function getData(){
  const res= await fetch("https://randomuser.me/api?results=50")


  const{results}=await res.json()

  result.innerHTML=""  //clear

   results.forEach(user => {
      const li= document.createElement("li")

      listItems.push(li)

      li.innerHTML=` <img src="${user.picture.medium}" alt="${user.name.first}">
      <div class="user-info">
          <h1>${user.name.first} ${user.name.last} </h1>
          <p>${user.location.city}, ${user.location.country}</p>
      </div>`

      result.appendChild(li)
       
   });

}
function filterData(searchTerm){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes
        (searchTerm.toLowerCase())){
             item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
}