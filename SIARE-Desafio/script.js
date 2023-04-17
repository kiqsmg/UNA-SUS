

//Creating the carousell effect for the text change

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');


setInterval(() => {
  slide1.classList.toggle('active');
  slide2.classList.toggle('active');
}, 15000);