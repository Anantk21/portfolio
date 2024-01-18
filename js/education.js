AOS.init();

// MOOCs Cards

const moocs = document.querySelector("#mooc");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "images/education/coursera2.svg",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Cryptography",
    cardImage: "images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "images/education/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "images/education/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "images/education/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "images/education/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "images/education/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "images/education/coursera2.svg",
    moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "images/education/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "images/education/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "images/education/c1.png",
  },
  {
    img: "images/education/c2.jpg",
  },
  {
    img: "images/education/c3.png",
  },
  {
    img: "images/education/c4.png",
  },
  {
    img: "images/education/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image"); // Remove #

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let intervalId; // Variable to store the interval ID

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
  addEventListeners();
});

function showExperience() {
  intervalId = setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

function addEventListeners() {
  prevBtn.addEventListener("click", function () {
    clearInterval(intervalId); // Clear the interval on button click
    currentItem = (currentItem - 1 + experience.length) % experience.length;
    const item = experience[currentItem];
    img.src = item.img;
  });

  nextBtn.addEventListener("click", function () {
    clearInterval(intervalId); // Clear the interval on button click
    const item = experience[currentItem];
    img.src = item.img;
    currentItem = (currentItem + 1) % experience.length;
  });
}


const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here
  showCards();
});


// /* Badges*/

// const bagdes = document.querySelector(".badges");
// const badgesection = [
//   {
//     title: "Google Developer Essentials",
//     image: "images/education/badge1.png",
//     description: "Earned May 20, 2020",
//   },
//   {
//     title: "VM Migration",
//     image: "images/education/badge2.png",
//     description: "Earned June 20, 2020",
//   },
//   {
//     title: "G Suite Essentials",
//     image: "images/education/badge3.png",
//     description: "Earned July 20, 2020",
//   },
// ];

// const showCards1 = () => {
//   let output = "";
//   badgesection.forEach(
//     ({ title, image, description }) =>
//       (output += `       
//       <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
//         <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
//           <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
//           <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
//       </div>`)
//   );
//   bagdes.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards1);

// /* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});



    // Intersection Observer
    const achieveContainer = document.querySelector('.achieve');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          achieveContainer.classList.add('achieve-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(achieveContainer);
