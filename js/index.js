function myBlog(){
    window.location.href='./blog.html';
}


const nav = document.querySelector('header');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 0){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})