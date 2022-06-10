const btns = document.getElementById("bnt");
const displayNo = document.getElementById("selectedRate");
const rateno = document.querySelectorAll(".rating-no");
const card1 = document.querySelector(".card_1");
const card2 = document.querySelector(".card_2");


    btns.addEventListener('click', onsubmit);
    rateno.forEach(btn => {
        btn.addEventListener('click', handleRatingClick)
    });


function onsubmit(){
    card1.classList.add('hide');
    card2.classList.remove('hide');
}


function handleRatingClick(event) {
    displayNo.innerHTML = event.target.innerHTML
rateno.forEach(btn => {
  btn.classList.remove('active');
})

if(event.target.classList.contains("rating-no")){
    event.target.classList.add("active");
} 
else{
    event.target.classList.remove("active");
}

}