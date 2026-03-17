const input = document.getElementById("input");
const faqiitem = document.querySelectorAll(".fak-item");
faqiitem.forEach((item)=>{
    const question = item.querySelector(".fak-question");
    question.addEventListener("click", ()=>{
        faqiitem.forEach((otheritem)=>{
            if(otheritem!==item){
                otheritem.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});

function filterFAQ(){
const input = document.getElementById("input");
const lower = input.value.toLowerCase();
const faqiitem = document.querySelectorAll(".fak-item");
faqiitem.forEach((i)=>{
    const questio = i.querySelector(".fak-question").textContent.toLowerCase();
    if(questio.includes(lower))
    {
     i.style.display = "block";  
    }
    else
    {
     i.style.display = "none" ; 
    }
});
}

