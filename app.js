const wrapper = document.querySelector(".img");
const wrapper2 = document.querySelector(".circle");
const wrapper3 = document.querySelector(".boby");

wrapper.addEventListener("click", ()=>{
    console.log(wrapper.getAttribute("src"));
    console.log(wrapper2.getAttribute("src"));
})

