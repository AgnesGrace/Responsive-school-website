const navbar = document.querySelector(".main__nav")
const questions = document.querySelectorAll(".question")
const navList = document.querySelector(".list__item")
const openBtn = document.querySelector("#openMenuBtn")
const closeBtn = document.querySelector("#closeBtn")




//scroll....y-axis
window.addEventListener("scroll", ()=>{
    navbar.classList.toggle("window-scroll", window.scrollY > 0)

})

//js for the questions section

questions.forEach(question => {
    question.addEventListener("click", ()=>{
        question.classList.toggle("show")

        //to change the icon while opened to -
        const icon = question.querySelector(".question__icon i")
        if(icon.className ==="uil uil-plus"){
            icon.className = "uil uil-minus"
        }
        else{
            icon.className ="uil uil-plus"
        }

    })

    
});

//media query nav
openBtn.addEventListener("click", () =>{
    navList.style.display = "flex"
    closeBtn.style.display = "inline-block"
    openBtn.style.display = "none"
    
})

const closeListBtn = () => {
    navList.style.display = "none"
    closeBtn.style.display = "none"
    openBtn.style.display = "inline-block"
}
closeBtn.addEventListener("click", closeListBtn)