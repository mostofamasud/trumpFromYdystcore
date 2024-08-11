        document.addEventListener("DOMContentLoaded", function () {
        const videoGallery = document.getElementById("videoGallery");
        const mainVideo = document.getElementById("myVideo");
        const videoPlayer = document.getElementById("videoPlayer");
        // const sliderWrapper = document.getElementsById("sliderWrapper");

        let isMouseOverGallery = false;

        // Show video gallery and shrink main video on mouse move to bottom
        document.addEventListener("mousemove", function (event) {
          const y = event.clientY || event.pageY;
          const windowHeight = window.innerHeight;
          if (y > windowHeight - 100) {
            videoGallery.classList.add("visible");
            videoPlayer.classList.add("shrink");
            
          } else if (!isMouseOverGallery) {
            // videoGallery.classList.remove("visible");
            // videoPlayer.classList.remove("shrink");
            
            videoGallery.classList.add("visible");
            videoPlayer.classList.add("shrink");

          }
        });

        // Keep video gallery visible while mouse is over it
        videoGallery.addEventListener("mouseenter", function () {
          isMouseOverGallery = true;
          videoGallery.classList.add("visible");
          videoPlayer.classList.add("shrink");
        });

        videoGallery.addEventListener("mouseleave", function () {
          isMouseOverGallery = false;
          // videoGallery.classList.remove("visible");
          // videoPlayer.classList.remove("shrink");
          
          videoGallery.classList.add("visible");
          videoPlayer.classList.add("shrink");
          
        });

        // Slider and main video functionality
        const slider = document.getElementById("slider");
        // const slider2 = document.getElementById("slider2");
        const prevBtn = document.getElementById("prevBtn");
        // const prevBtn2 = document.getElementById("prevBtn2");
        // const prevBtn3 = document.getElementById("prevBtn3");
        const nextBtn = document.getElementById("nextBtn");
        // const nextBtn2 = document.getElementById("nextBtn2");
        // const nextBtn3 = document.getElementById("nextBtn3");
        const playButton = document.getElementById("playButton");

        let slideIndex = 0;
        // let slideIndex2 = 0;
        // let slideIndex3 = 0;
        
        const slides = slider.getElementsByTagName("img");
        // const slides2 = slider2.getElementsByTagName("img");
        // const slides3 = slider3.getElementsByTagName("img");

        const slideCount = slides.length;
        // const slideCount2 = slides2.length;
        // const slideCount3 = slides3.length;
        const slideWidth =
          slides[0].offsetWidth +
          parseInt(getComputedStyle(slides[0]).marginRight);
        // const slideWidth2 =
        //   slides2[0].offsetWidth +
        //   parseInt(getComputedStyle(slides2[0]).marginRight);
        // const slideWidth3 =
        //   slides3[0].offsetWidth +
        //   parseInt(getComputedStyle(slides3[0]).marginRight);

        function updateSlider() {
          slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        }
        // function updateSlider2() {
        //   slider2.style.transform = `translateX(-${slideIndex2 * slideWidth2}px)`;
        // }
        // function updateSlider3() {
        //   slider3.style.transform = `translateX(-${slideIndex3 * slideWidth3}px)`;
        // }

        function nextSlide() {
          slideIndex = (slideIndex + 1) % slideCount;
          updateSlider();
        }

        function prevSlide() {
          slideIndex = (slideIndex - 1 + slideCount) % slideCount;
          updateSlider();
        }
        // function nextSlide2() {
        //   slideIndex2 = (slideIndex2 + 1) % slideCount2;
        //   updateSlider2();
        // }

        // function prevSlide2() {
        //   slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
        //   updateSlider2();
        // }
        // function nextSlide3() {
        //   slideIndex3 = (slideIndex3 + 1) % slideCount3;
        //   updateSlider3();
        // }

        // function prevSlide3() {
        //   slideIndex3 = (slideIndex3 - 1 + slideCount3) % slideCount3;
        //   updateSlider3();
        // }

        // Event listeners for manual navigation
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
        // nextBtn2.addEventListener("click", nextSlide2);
        // prevBtn2.addEventListener("click", prevSlide2);
        // nextBtn3.addEventListener("click", nextSlide3);
        // prevBtn3.addEventListener("click", prevSlide3);

        // Event listener for keyboard navigation
        document.addEventListener("keydown", function (event) {
          if (event.key === "ArrowRight") {
            nextSlide();
          } else if (event.key === "ArrowLeft") {
            prevSlide();
          }
        });

        // Event listener for thumbnails
        Array.from(slides).forEach((slide) => {
          slide.addEventListener("click", function () {
            const newVideoSrc = this.getAttribute("data-video");
            mainVideo.src = newVideoSrc;
            mainVideo.load();
            mainVideo.play();
            // Worked here
            mainVideo.style.height = "92vh";  
            mainVideo.style.width = "1520px";  
            mainVideo.style.marginTop = "-90px";  
            mainVideo.style.marginLeft = "0px";  
            mainVideo.style.marginRight = "0px";  
            mainVideo.style.PaddingRight = "100px";  
            mainVideo.style.zIndex = "3333333";  
            mainVideo.style.backgroundColor = "black";
          });
        });

        // Video play/pause functionality
        function togglePlay() {
          if (mainVideo.paused) {
            mainVideo.play();
            playButton.style.display = "none";
            mainVideo.style.zIndex = "3333333";  
          } else {
            mainVideo.pause();
            playButton.style.display = "block";
            mainVideo.style.zIndex = "3333333";  
          }
        }

        playButton.addEventListener("click", togglePlay);
        mainVideo.addEventListener("click", togglePlay);

        mainVideo.addEventListener("play", function () {
          playButton.style.display = "none";
          mainVideo.style.zIndex = "3333333";  
          mainVideo.style.width = "1560px";
          mainVideo.style.maxWidth= "1520px";
            
          mainVideo.style.height = "93vh";  
          mainVideo.style.marginTop = "-90px";  
          mainVideo.style.marginLeft = "-130px";  
          mainVideo.style.paddingRight = "0px";  
          mainVideo.style.background = "black";  
        });

        mainVideo.addEventListener("pause", function () {
          playButton.style.display = "block";
          mainVideo.style.zIndex = "3333333";  
        });
      });
