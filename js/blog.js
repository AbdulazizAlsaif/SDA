var url = new URL(window.location.href);
var id=url.searchParams.get('id');
console.log(id)


var author=document.getElementById("author")
var title=document.getElementById("title")
var article=document.getElementById("article")
var img=document.getElementById("img")

displayBlog()

function displayBlog(){

blog= getBlogs()[id]

document.title=blog.title
title.innerHTML+=`${blog.title}`;
author.innerHTML+=`${blog.author} <small class="text-muted">${blog.date} </small>`;
article.textContent=blog.article;
img.setAttribute("src",blog.image)

}


function getBlogs(){
  savedBlogs = JSON.parse(localStorage.getItem("blogs"));
  return savedBlogs;
}