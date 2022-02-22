// hambuger menu 

add = document.getElementById("menu_nav_id")
function funclick() {
    add.style.display="block";
}

let closeBtn = document.getElementById("close_btn_id")

closeBtn.addEventListener("click",()=>{
    add.style.display="none"
})