var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var numText = document.getElementById("numbertext");
  var bookTitle = document.getElementById("book-title");
  var authorName = document.getElementById("author");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  console.log(dots[slideIndex-1]);
  console.log(dots[slideIndex-1].author);
  numText.innerHTML = "" + slideIndex + " / " + slides.length;
  bookTitle.innerHTML = getTitle(slideIndex);
  authorName.innerHTML = "by " + getAuthor(slideIndex);
}

// TODO: change titles
function getTitle(i) {
  if (slideIndex == 1) {
    return "Musicophilia: Tales of Music and the Brain (2007)";
  }
  else if (slideIndex == 2) {
    return "Why We Love Music: From Mozart to Metallica - The Emotional Power of Beautiful Sounds (2016)";
  }
  else if (slideIndex == 3) {
    return "This Is Your Brain on Music: The Science of a Human Obsession (2006)";
  }
  else if (slideIndex == 4) {
    return "Defining Music Therapy. Third Edition (2015)";
  }
  else {
    return "";
  }
}

// TODO: change authors
function getAuthor(i) {
  if (slideIndex == 1) {
    return "Oliver Sacks";
  }
  else if (slideIndex == 2) {
    return "John Powell";
  }
  else if (slideIndex == 3) {
    return "Daniel J. Levitin";
  }
  else if (slideIndex == 4) {
    return "Kenneth E. Bruscia";
  }
  else {
    return "";
  }
}