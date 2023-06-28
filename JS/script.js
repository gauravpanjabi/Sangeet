// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Taylor-Swift-Blank-Space.webp";
  song.src = "./assets/Songs/Taylor_Swift_-_Blank_Space_[NaijaGreen.Com]_.mp3";
  songName.innerText = "Blank Space";
  songBy.innerText = "Taylor Swift";
  title.innerText = "Taylor Swift";
  download.href = "./assets/Songs/Taylor_Swift_-_Blank_Space_[NaijaGreen.Com]_.mp3";
  aboutSong.innerText = "Blank Space is a song by American singer-songwriter Taylor Swift, from her fifth studio album, 1989 (2014). The song was released to US radio stations as the second single from 1989 on November 10, 2014, by Republic Records in partnership with Big Machine.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ilikemebetter.png";
  song.src = "./assets/Songs/I Like Me Better - Lauv.mp3";
  songName.innerText = "I Like Me Better";
  songBy.innerText = "Lauv";
  title.innerText = " I Like Me Better";
  download.href = "./assets/Songs/I Like Me Better - Lauv.mp3";
  aboutSong.innerText = "I Like Me Better is a song recorded by American singer-songwriter Lauv. It was released on May 19, 2017, and is included on Lauv's compilation album I Met You When I Was 18, which was released on May 31, 2018. It has also been used in an Android Auto app commercial, in the trailer of Netflix's romantic comedy To All the Boys I've Loved Before, and in the fall ball episode of Netflix's comedy series The Expanding Universe of Ashley Garcia.";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Taylor_Swift_-_Love_Story.png";
  song.src = "./assets/Songs/Taylor_Swift_-_Love_Story_Taylor_s_Version_.mp3";
  songName.innerText = "Love story";
  songBy.innerText = "Taylor swift";
  title.innerText = "Love story";
  download.href = "./assets/Songs/Taylor_Swift_-_Love_Story_Taylor_s_Version_.mp3";
  aboutSong.innerText = "Love Story is a song by American singer-songwriter Taylor Swift. It was released as the lead single from her second studio album, Fearless, on September 15, 2008, by Big Machine Records. Inspired by a boy who was unpopular with her family and friends, Swift wrote the song using William Shakespeare's tragedy Romeo and Juliet as a reference point.";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/F.R.I.E.N.D.S.webp";
  song.src = "./assets/Songs/I'll Be There For You (Friends Theme Song)- [PagalWorld.NL].mp3";
  songName.innerText = "I'll Be There for You (F.R.I.E.N.D.S)";
  songBy.innerText = "Yung Gravy";
  title.innerText = "I'll Be There for You (F.R.I.E.N.D.S)";
  download.href = "./assets/Songs/betty.mp3";
  aboutSong.innerText = "I'll Be There for You is a song by American pop rock duo the Rembrandts. The song was written by David Crane, Marta Kauffman, Michael Skloff, and Allee Willis as the main theme song to the NBC sitcom Friends, which was broadcast from 1994 to 2004.";
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Lovely.jpg";
  song.src = "./assets/Songs/Lovely(PagalWorld).mp3";
  songName.innerText = "Lovely";
  songBy.innerText = "Billie Eilish and Khalid";
  title.innerText = "Lovely";
  download.href = "./assets/Songs/Lovely(PagalWorld).mp3";
  aboutSong.innerText = "Lovely is a song by American singers Billie Eilish and Khalid. Darkroom and Interscope Records released it as the lead single from the Netflix drama series 13 Reasons Why's second season soundtrack. The artists wrote the song with Eilish's brother and producer Finneas O'Connell. The song has been described as a chamber pop ballad whose lyrics recount Eilish and Khalid trying to overcome serious depression together. The song also appears on the deluxe version of Eilish's EP Don't Smile at Me.";
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/baraat.jpeg";
  song.src = "./assets/Songs/baraat.mp3";
  songName.innerText = "Baaraat";
  songBy.innerText = "Ritviz";
  title.innerText = "Baaraat";
  download.href = "./assets/Songs/baraat.mp3";
  aboutSong.innerText = `"Baaraat" is a song from Ritviz's debut album, "Ved," which was released in 2018. The song showcases Ritviz's unique blend of electronic music with traditional Indian sounds, creating a dynamic and energetic track.`;
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ishq.jpg";
  song.src = "./assets/Songs/ishq.mp3";
  songName.innerText = "Ishq Bulaava";
  songBy.innerText = "Vishal-Shekhar & Shipra Goyal";
  title.innerText = "Ishq Bulaava";
  download.href = "./assets/Songs/ishq.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. Weaving magic once again, Label Day One announces the launch of 'Ishq Bulaava' that is ready to twirl up emotions and make you feel the jitters of love at first sight.";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Pyaar-Hota-Kayi-Baar-Hai.webp";
  song.src = "./assets/Songs/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3";
  songName.innerText = "Pyaar Hota Kayi Baar Hai";
  songBy.innerText = "Arijit Singh";
  title.innerText = "Pyaar Hota Kayi Baar Hai";
  download.href = "./assets/Songs/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3";
  aboutSong.innerText = "Pyaar Hota Kayi Baar Hai is a dedication to the lovelorn singles with a message to cast away their blues, because love doesn’t happen just once or twice, it happens many times. The song is a reminder to all the jilted lovers to fall in love again! This song is shot on a sprawling set and Ranbir looks dapper as he grooves to the beats choreographed by Bosco-Caeser. His on-screen and off-screen buddy Anubhan Singh Bassi also features in the song. With music by Pritam, vocals by Arijit Singh and quirky lyrics penned by Amitabh Bhattacharya this one is sure to resonate with all the singles.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/you.jpg";
  song.src = "./assets/Songs/you.mp3";
  songName.innerText = "Tu/You";
  songBy.innerText = "Armaan Malik";
  title.innerText = "Tu/You";
  download.href = "./assets/Songs/you.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Tu/You' was released in 2022";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/pal.jpg";
  song.src = "./assets/Songs/pal.mp3";
  songName.innerText = "Har Ek Pal";
  songBy.innerText = "Ashu Shukla";
  title.innerText = "Har Ek Pal";
  download.href = "./assets/Songs/pal.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Har Ek Pal' was released in 2017.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/chand.jpg";
  song.src = "./assets/Songs/chand.mp3";
  songName.innerText = "Chand Baliyan";
  songBy.innerText = "Aditya A";
  title.innerText = "Chand Baliyan";
  download.href = "./assets/Songs/chand.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Chand Baliyan' was released in 2023.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/aisay.jpeg";
  song.src = "./assets/Songs/aisay.mp3";
  songName.innerText = "Aisay Kaisay";
  songBy.innerText = "Hasan Raheem & Abdullah Kasumbi";
  title.innerText = "Aisay Kaisay";
  download.href = "./assets/Songs/aisay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Aisay Kaisay' was released in 2020.";
});






