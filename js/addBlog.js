var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function getDate(date) {
  var t = new Date(date);
  t.getDate()
  return  monthShortNames[t.getMonth()] + ', ' + t.getFullYear();
}



class Blog{

  
  constructor(title,author,article,image){
    this.title=title;
    this.author=author;
    this.article=article;
    this.image=image;
    this.date=getDate(new Date())
  }

   
}

if (localStorage.getItem('blogs')==undefined){
  var blogs=[];
  localStorage.setItem("blogs",JSON.stringify(blogs));
}

var title=document.getElementById("title")
var author=document.getElementById("author")
var article=document.getElementById("article")
var img;
document.querySelector('#img').addEventListener("change", function() {
  
  console.log(this.files)
  const reader = new FileReader();
  reader.addEventListener("load" , ( ()=> {img=reader.result }))
  reader.readAsDataURL(this.files[0])
})





function validateBlogData(){

  
  let flag=true
  if (title.value == ''){
    title.classList.add("is-invalid")
    flag=false
  }
  if (author.value == ''){
    author.classList.add("is-invalid")
    flag=false
  }
  if (article.value == ''){
    article.classList.add("is-invalid")
    flag=false
  }
  if (img == undefined){
    flag=false
    document.getElementById("imgCaption").innerHTML+="Please provide a valid image"
  }

  if (flag != false){
    addBlogData()
  }


}

function addBlogData(){
  

  let blog=new Blog(title.value,author.value , article.value , img);
  addBlog(blog)
  

}

//Save and retrieve blogs

function addBlog(blog){
  
  savedBlogs = JSON.parse(localStorage.getItem("blogs"));
  id=savedBlogs.length
  savedBlogs.push(blog);
  localStorage.setItem("blogs",JSON.stringify(savedBlogs));
  location.href="blog.html?id="+ id

}

