serveBlogs()


function getBlogs(){
  savedBlogs = JSON.parse(localStorage.getItem("blogs"));
  return savedBlogs;
}



function serveBlogs(){

blogs =getBlogs();

let blogsDiv = document.getElementById("blogs")

for (let index = 0; index < blogs.length; index++) {
  
  

blogsDiv.innerHTML+=`   <div class="col-md-4 d-flex align-items-stretch ">
<a class="links" href="blog.html?id=${index}"> 
<div class="card ">
  <img  class="img-thumbnail image" src="${blogs[index].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title  font-weight-bold">${blogs[index].title}</h5>
    
    <p class="card-text align-items-end"> <small class="text-bold">${blogs[index].author}</small> - <small class="text-muted">${blogs[index].date} </small></p>
  </div>
</div>
</a>
</div>`
}

}