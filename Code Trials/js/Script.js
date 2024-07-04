var slideIndex = 0;
showSlides();

function validateForm() {
    let name = document.querySelector('name').value;
    let birthdate = document.querySelector('birthdate').value;
    let gender = document.querySelector('gender').value;
    let message = document.querySelector('message').value;

    console.log(name)
    console.log(birthdate)
    console.log(gender)
    console.log(message)
  }

  if  ("name" != null || "name" != '', birthdate != null || birthdate != '', gender != null || gender != '', message != null || message != ''){
    alert('Sukses kirim')
  } else{
    alert('Inputan ada yang kosong')
  }
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 5; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    let name = prompt("Masukkan nama Anda:");
    document.getElementById("nama").innerText = name ? name : "User";
});

