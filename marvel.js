document.addEventListener("DOMContentLoaded", () => {
  // Navigation Menu Toggle
  function toggleMenu() {
    const nav = document.getElementById("nav2");
    if (nav) {
      nav.classList.toggle("show");
    } else {
      console.warn("Navbar element with ID 'nav2' not found.");
    }
  }

  // Cursor Ball Animation
  const ball = document.querySelector(".cursor-ball");
  let mouseX = 0;
  let mouseY = 0;
  let ballX = 0;
  let ballY = 0;

  if (ball) {
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      ballX += (mouseX - ballX) * 0.1;
      ballY += (mouseY - ballY) * 0.1;

      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";

      requestAnimationFrame(animate);
    }
    animate();
  } else {
    console.warn("Cursor ball element with class 'cursor-ball' not found.");
  }

  // --- Data Definitions ---
  // The 'browse' array is enhanced to be the primary source for detailed information.
  // Other arrays (popular, vikvings, nowBodyMovies, marvelShows) contain basic display data.
  // To link them to the detail page, ensure their titles match an entry in 'browse'.

  const popular = [
    { img: "hiro img/1739947275375-v.jpeg", title: "Farscape", timeLeft: "7m left", progress: "80" },
    { img: "hiro img/s1.jpeg", title: "Game of Thrones Discussion", timeLeft: "17m left", progress: "90" },
    { img: "hiro img/s2.jpg", title: "Game of Thrones Section 2", timeLeft: "190m left", progress: "20" },
    { img: "hiro img/s3.jpg", title: "Game of Thrones Section 3", timeLeft: "149m left", progress: "30" },
    { img: "hiro img/s4.webp", title: "Game of Thrones Section 4", timeLeft: "8m left", progress: "95" },
    { img: "hiro img/s6.jpg", title: "Game of Thrones Section 5", timeLeft: "199m left", progress: "10" },
    { img: "hiro img/s8.jpeg", title: "Game of Thrones Section 6", timeLeft: "78m left", progress: "80" },
    { img: "hiro img/s9.jpg", title: "Game of Thrones Section 7", timeLeft: "67m left", progress: "70" },
    { img: "hiro img/s5.webp", title: "Game of Thrones Section 8", timeLeft: "9m left", progress: "70" },
  ];

  const vikvings = [
    { img: "hiro img/11.jpg", title: "Viking Section 1", timeLeft: "15m left", progress: "80" },
    { img: "hiro img/12.jpeg", title: "Viking Section 2", timeLeft: "30m left", progress: "90" },
    { img: "hiro img/13.jpeg", title: "Viking Section 3", timeLeft: "45m left", progress: "20" },
    { img: "hiro img/14.jpg", title: "Viking Section 4", timeLeft: "60m left", progress: "30" },
    { img: "hiro img/15.jpg", title: "Viking Section 5", timeLeft: "75m left", progress: "95" },
    { img: "hiro img/16.jpg", title: "Viking Section 6", timeLeft: "90m left", progress: "10" },
    { img: "hiro img/17.jpg", title: "Viking Section 7", timeLeft: "105m left", progress: "80" },
    { img: "hiro img/18.jpg", title: "Viking Section 8", timeLeft: "120m left", progress: "70" },
    { img: "hiro img/14.jpg", title: "Viking Section 9", timeLeft: "135m left", progress: "70" },
  ];

  const nowBodyMovies = [
    { img: "hiro img/1734001770086-v.jpeg", title: "Z Nation", timeLeft: "39m left", progress: "70" },
    { img: "hiro img/1734086580237-v.jpeg", title: "Dr. Phil", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1734945421848-v.jpeg", title: "Daily Show", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1734949344354-v.jpeg", title: "The Late Show", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1734952231247-v.jpeg", title: "Good Morning America", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1735212603441-v.jpeg", title: "NBC Nightly News", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1739947275375-v.jpeg", title: "Farscape", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1748753948802-v.jpeg", title: "The Office", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1749277088443-v.jpeg", title: "Friends", timeLeft: "31m left", progress: "60" },
    { img: "hiro img/1749797114539-v.jpeg", title: "Seinfeld", timeLeft: "31m left", progress: "60" },
  ];

  const marvelShows = [
    {
      img: "hiro img/22.jpg",
      title: "Z Nation",
      timeLeft: "39m left",
      progress: "70",
      desc: "A group of everyday heroes must transport the only known survivor of a zombie plague across the country to a lab that is waiting for his blood.",
      genre: "Action, Horror, Comedy",
      trailer: "videos/z-nation-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.1",
      reviews: ["Fun zombie show!", "Surprisingly good for a Syfy series.", "Great characters."],
      cast: "Kellita Smith, DJ Qualls, Keith Allan, Anastasia Baranova",
    },
    {
      img: "hiro img/23.jpg",
      title: "Dr. Phil", // Assuming this is not a Marvel show, but keeping your original title
      timeLeft: "31m left",
      progress: "60",
      desc: "A talk show hosted by Dr. Phil McGraw, offering advice on a variety of personal and family issues.",
      genre: "Reality, Talk Show",
      trailer: "videos/dr-phil-promo-marvel.mp4", // Placeholder: Replace with actual path
      rating: "3.0",
      reviews: ["Insightful sometimes.", "Can be controversial."],
      cast: "Dr. Phil McGraw",
    },
    {
      img: "hiro img/24.jpg",
      title: "Daily Show", // Assuming this is not a Marvel show
      timeLeft: "31m left",
      progress: "60",
      desc: "A satirical news program that offers a comedic look at current events and political figures.",
      genre: "Comedy, News, Satire",
      trailer: "videos/daily-show-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.7",
      reviews: ["Always makes me laugh and think.", "Great host."],
      cast: "Trevor Noah, Jon Stewart, Stephen Colbert, Samantha Bee",
    },
    {
      img: "hiro img/31.jpeg",
      title: "The Late Show", // Assuming this is not a Marvel show
      timeLeft: "30m left",
      progress: "60",
      desc: "Stephen Colbert brings his signature satire and comedic take on current events to the late-night scene.",
      genre: "Talk Show, Comedy",
      trailer: "videos/late-show-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.3",
      reviews: ["Colbert is brilliant.", "Good celebrity interviews."],
      cast: "Stephen Colbert",
    },
    {
      img: "hiro img/26.jpg",
      title: "Good Morning America", // Assuming this is not a Marvel show
      timeLeft: "32m left",
      progress: "65",
      desc: "A popular American morning television show that provides news, interviews, and features.",
      genre: "News, Talk Show, Lifestyle",
      trailer: "videos/gma-marvel.mp4", // Placeholder: Replace with actual path
      rating: "3.8",
      reviews: ["My go-to morning news.", "Good mix of topics."],
      cast: "Robin Roberts, George Stephanopoulos, Michael Strahan",
    },
    {
      img: "hiro img/27.jpeg",
      title: "NBC Nightly News", // Assuming this is not a Marvel show
      timeLeft: "29m left",
      progress: "55",
      desc: "A flagship evening television newscast providing comprehensive coverage of national and international news.",
      genre: "News",
      trailer: "videos/nbc-news-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.0",
      reviews: ["Reliable and informative.", "Good summary of the day's events."],
      cast: "Lester Holt",
    },
    {
      img: "hiro img/28.jpeg",
      title: "Farscape", // Not a Marvel show, but I'll add details based on its actual genre
      timeLeft: "31m left",
      progress: "58",
      desc: "An American astronaut is accidentally propelled across the universe into a new galaxy, where he joins a crew of alien fugitives.",
      genre: "Sci-Fi, Adventure, Drama",
      trailer: "videos/farscape-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.6",
      reviews: ["Visually stunning and creative.", "Deep storyline and characters."],
      cast: "Ben Browder, Claudia Black, Anthony Simcoe, Gigi Edgley",
    },
    {
      img: "hiro img/36.jpeg",
      title: "The Office", // Not a Marvel show
      timeLeft: "33m left",
      progress: "62",
      desc: "A mockumentary-style sitcom depicting the everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
      genre: "Comedy, Sitcom",
      trailer: "videos/the-office-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.9",
      reviews: ["Hilarious, rewatchable!", "Iconic characters."],
      cast: "Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer",
    },
    {
      img: "hiro img/33.jpeg",
      title: "Friends", // Not a Marvel show
      timeLeft: "28m left",
      progress: "50",
      desc: "Follows the lives of six twenty-somethings living in New York City as they navigate the ups and downs of friendship, love, and careers.",
      genre: "Comedy, Romance, Sitcom",
      trailer: "videos/friends-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.8",
      reviews: ["A timeless classic!", "So relatable and funny."],
      cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer",
    },
    {
      img: "hiro img/35.jpeg",
      title: "Seinfeld", // Not a Marvel show
      timeLeft: "34m left",
      progress: "64",
      desc: "The 'show about nothing' follows the observational humor of comedian Jerry Seinfeld and his eccentric group of friends in New York City.",
      genre: "Comedy, Sitcom",
      trailer: "videos/seinfeld-marvel.mp4", // Placeholder: Replace with actual path
      rating: "4.7",
      reviews: ["Pure genius comedy!", "Still relevant and funny today."],
      cast: "Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards, Jason Alexander",
    },
  ];

  // The 'browse' array now includes all detail properties
  const browse = [
    {
      id: "browse-znation",
      img: "hiro img/1734001770086-v.jpeg",
      name: "Z Nation", // Using 'name' to align with card display, can also use 'title'
      moviestime: "39m left",
      progress: "70",
      desc: "A post-apocalyptic zombie series following survivors across the US.",
      genre: "Action, Drama, Sci-Fi",
      trailer: "videos/z-nation-trailer.mp4", // Replace with your actual video path
      rating: "4.5",
      reviews: ["Great action!", "Compelling story.", "Good zombie show."],
      cast: "Kellita Smith, DJ Qualls, Michael Welch",
    },
    {
      id: "browse-drphil",
      img: "hiro img/1734086580237-v.jpeg",
      name: "Dr. Phil",
      moviestime: "31m left",
      progress: "60",
      desc: "Talk show hosted by Dr. Phil McGraw offering life advice and counseling.",
      genre: "Reality, Talk Show",
      trailer: "videos/dr-phil-promo.mp4",
      rating: "3.0",
      reviews: ["Insightful.", "Helped me think differently."],
      cast: "Dr. Phil McGraw",
    },
    {
      id: "browse-dailyshow",
      img: "hiro img/1734945421848-v.jpeg",
      name: "Daily Show",
      moviestime: "31m left",
      progress: "60",
      desc: "A satirical news show covering politics and current events.",
      genre: "Comedy, News",
      trailer: "videos/daily-show-clip.mp4",
      rating: "4.8",
      reviews: ["Hilarious and informative!", "My go-to for news."],
      cast: "Jon Stewart, Trevor Noah, Hasan Minhaj",
    },
    {
      id: "browse-lateshow",
      img: "hiro img/1734949344354-v.jpeg",
      name: "The Late Show",
      moviestime: "31m left",
      progress: "60",
      desc: "Late night talk show with celebrity interviews and comedy sketches.",
      genre: "Talk Show, Comedy",
      trailer: "videos/late-show-clip.mp4",
      rating: "4.2",
      reviews: ["Always a good laugh.", "Great interviews."],
      cast: "Stephen Colbert",
    },
    {
      id: "browse-gma",
      img: "hiro img/1734952231247-v.jpeg",
      name: "Good Morning America",
      moviestime: "31m left",
      progress: "60",
      desc: "Morning news and entertainment show covering current topics.",
      genre: "News, Talk Show",
      trailer: "videos/gma-clip.mp4",
      rating: "3.9",
      reviews: ["Starts my day right.", "Good blend of news and fun."],
      cast: "Robin Roberts, George Stephanopoulos",
    },
    {
      id: "browse-nbcnews",
      img: "hiro img/1735212603441-v.jpeg",
      name: "NBC Nightly News",
      moviestime: "31m left",
      progress: "60",
      desc: "Evening news broadcast with top national and global stories.",
      genre: "News",
      trailer: "videos/nbc-news-clip.mp4",
      rating: "4.0",
      reviews: ["Reliable news.", "Good coverage."],
      cast: "Lester Holt",
    },
    {
      id: "browse-farscape",
      img: "hiro img/1739947275375-v.jpeg",
      name: "Farscape",
      moviestime: "31m left",
      progress: "60",
      desc: "A sci-fi series about an astronaut lost in a distant galaxy.",
      genre: "Sci-Fi, Adventure",
      trailer: "videos/farscape-trailer.mp4",
      rating: "4.7",
      reviews: ["Mind-bending sci-fi!", "Amazing puppets and story."],
      cast: "Ben Browder, Claudia Black, Anthony Simcoe",
    },
    {
      id: "browse-theoffice",
      img: "hiro img/1748753948802-v.jpeg",
      name: "The Office",
      moviestime: "31m left",
      progress: "60",
      desc: "Mockumentary-style comedy about office life and awkward coworkers.",
      genre: "Comedy, Sitcom",
      trailer: "videos/the-office-clip.mp4",
      rating: "4.9",
      reviews: ["Best comedy ever!", "Rewatchable!"],
      cast: "Steve Carell, John Krasinski, Jenna Fischer",
    },
    {
      id: "browse-friends",
      img: "hiro img/1749277088443-v.jpeg",
      name: "Friends",
      moviestime: "31m left",
      progress: "60",
      desc: "Iconic sitcom following six friends navigating life in NYC.",
      genre: "Comedy, Romance",
      trailer: "videos/friends-clip.mp4",
      rating: "4.8",
      reviews: ["Classic sitcom!", "So relatable."],
      cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
    },
    {
      id: "browse-seinfeld",
      img: "hiro img/1749797114539-v.jpeg",
      name: "Seinfeld",
      moviestime: "31m left",
      progress: "60",
      desc: "A show about nothing — daily life of a stand-up comic and his quirky friends.",
      genre: "Comedy, Sitcom",
      trailer: "videos/seinfeld-clip.mp4",
      rating: "4.7",
      reviews: ["Genius comedy!", "Still makes me laugh."],
      cast: "Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards",
    },
  ];

  // --- Show Details Function ---
  // This function now robustly handles displaying details for any show object
  function showDetails(showData) {
    if (!showData) {
      console.error("No show data provided to showDetails function.");
      return;
    }

    const detailPoster = document.getElementById("detailPoster");
    const detailTitle = document.getElementById("detailTitle");
    const detailDesc = document.getElementById("detailDesc");
    const detailGenre = document.getElementById("detailGenre");
    const castInfo = document.getElementById("cast");
    const detailTrailer = document.getElementById("detailTrailer");
    const trailerSource = detailTrailer ? detailTrailer.querySelector("source") : null;
    const ratingStarsSpan = document.querySelector(".rating-stars span");
    const reviewsDiv = document.getElementById("reviews");

    // Elements for section visibility
    const movieDetailsSection = document.getElementById("movieDetails");
    const sliderContainer = document.querySelector(".slider-container"); // Assuming this wraps all your sliders

    if (detailPoster) detailPoster.src = showData.img || "";
    if (detailTitle) detailTitle.innerText = showData.name || showData.title || "N/A";
    if (detailDesc) detailDesc.innerText = showData.desc || "No description available.";
    if (detailGenre) detailGenre.innerText = `Genre: ${showData.genre || "N/A"}`;
    if (castInfo) castInfo.innerText = `Cast: ${showData.cast || "N/A"}`;

    if (trailerSource && showData.trailer) {
      trailerSource.src = showData.trailer;
      if (detailTrailer) detailTrailer.load();
    } else if (trailerSource) {
      trailerSource.src = ""; // Clear source if no trailer is provided
      if (detailTrailer) detailTrailer.load();
      console.warn(`No trailer found for ${showData.name || showData.title}`);
    }

    const ratingStarsContainer = document.querySelector(".rating-stars");
    if (ratingStarsSpan && showData.rating) {
      ratingStarsSpan.innerText = `⭐ ${showData.rating} / 5`;
      if (ratingStarsContainer) ratingStarsContainer.style.display = "block";
    } else {
      if (ratingStarsContainer) ratingStarsContainer.style.display = "none";
    }

    if (reviewsDiv && showData.reviews && showData.reviews.length > 0) {
      const reviewsHtml = showData.reviews.map((r) => `<p>🌟 "${r}"</p>`).join("");
      reviewsDiv.innerHTML = reviewsHtml;
    } else if (reviewsDiv) {
      reviewsDiv.innerHTML = "<p>No reviews available.</p>";
    }

    // Hide main content and show details section
    if (sliderContainer) sliderContainer.classList.add("hidden");
    if (movieDetailsSection) {
      movieDetailsSection.classList.remove("hidden");
      movieDetailsSection.classList.add("show");
    }
  }

  // Function to hide details and show main content
  function hideDetails() {
    const movieDetailsSection = document.getElementById("movieDetails");
    const sliderContainer = document.querySelector(".slider-container");

    if (sliderContainer) sliderContainer.classList.remove("hidden");
    if (movieDetailsSection) {
      movieDetailsSection.classList.add("hidden");
      movieDetailsSection.classList.remove("show");
    }
  }

  // Event listener for the back button on the details page
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", hideDetails);
  }



  // Render Browse Cards
  const browseSliderTrack = document.getElementById("sliderTrack");
  if (browseSliderTrack) {
    browseSliderTrack.innerHTML = "";
    browse.forEach((show) => {
      const card = document.createElement("div");
      card.className = "slider-card";
      card.innerHTML = `
        <img src="${show.img}" alt="${show.name}" />
        <div class="badge-live text-overlay">LIVE</div>
        <div class="bar-wrap">
          <div class="bar-fill" style="width: ${show.progress}%"></div>
        </div>
        <h4>${show.name}</h4>
        <p>${show.moviestime}</p>
      `;
      // Pass the full show object for details
      card.addEventListener("click", () => showDetails(show));
      browseSliderTrack.appendChild(card);
    });
  } else {
    console.warn("Element with ID 'sliderTrack' not found for browse slider.");
  }

  // Render Popular Cards
  const popularSliderElement = document.getElementById("popularSlider");
  if (popularSliderElement) {
    popularSliderElement.innerHTML = "";
    popular.forEach((show) => {
      const card = document.createElement("div");
      card.className = "popular-card";
      card.innerHTML = `
        <div class="popular-img-wrap">
          <img src="${show.img}" alt="${show.title}" />
          <span class="popular-live-badge">LIVE</span>
          <div class="popular-progress-bar">
            <div class="popular-progress-fill" style="width: ${show.progress}%"></div>
          </div>
        </div>
        <h4>${show.title}</h4>
        <p>${show.timeLeft}</p>
      `;
      // Find full details from 'browse' array based on title
      card.addEventListener("click", () => {
        const fullShowDetails = browse.find(item => item.name === show.title);
        if (fullShowDetails) {
          showDetails(fullShowDetails);
        } else {
          console.warn(`Full details not found in 'browse' for popular show: ${show.title}`);
          // You could show a generic alert or simplified details here if full data is not available
        }
      });
      popularSliderElement.appendChild(card);
    });
  } else {
    console.warn("Element with ID 'popularSlider' not found.");
  }

  

  // Render Trending (Vikvings) Cards
  const trendingSliderElement = document.getElementById("trendingSlider");
  if (trendingSliderElement) {
    trendingSliderElement.innerHTML = "";
    vikvings.forEach((show) => {
      const card = document.createElement("div");
      card.className = "popular-card"; // Reusing class for consistent styling
      card.innerHTML = `
        <div class="popular-img-wrap">
          <img src="${show.img}" alt="${show.title}" />
          <span class="popular-live-badge">LIVE</span>
          <div class="popular-progress-bar">
            <div class="popular-progress-fill" style="width: ${show.progress}%"></div>
          </div>
        </div>
        <h4>${show.title}</h4>
        <p>${show.timeLeft}</p>
      `;
      card.addEventListener("click", () => {
        const fullShowDetails = browse.find(item => item.name === show.title || item.title === show.title);
        if (fullShowDetails) {
          showDetails(fullShowDetails);
        } else {
          console.warn(`Full details not found in 'browse' for trending show: ${show.title}`);
        }
      });
      trendingSliderElement.appendChild(card);
    });
  } else {
    console.warn("Element with ID 'trendingSlider' not found.");
  }

  // Render Now Body Movies Cards
  const nowBodyMoviesSliderTrack = document.getElementById("nowBodyMoviesSliderTrack");
  if (nowBodyMoviesSliderTrack) {
    nowBodyMoviesSliderTrack.innerHTML = "";
    nowBodyMovies.forEach((show) => {
      const card = document.createElement("div");
      card.className = "slider-card";
      card.innerHTML = `
        <img src="${show.img}" alt="${show.title}" />
        <div class="badge-live text-overlay">LIVE</div>
        <div class="bar-wrap">
          <div class="bar-fill" style="width: ${show.progress}%"></div>
        </div>
        <h4>${show.title}</h4>
        <p>${show.timeLeft}</p>
      `;
      card.addEventListener("click", () => {
        const fullShowDetails = browse.find(item => item.name === show.title || item.title === show.title);
        if (fullShowDetails) {
          showDetails(fullShowDetails);
        } else {
          console.warn(`Full details not found in 'browse' for 'Now Body Movies' show: ${show.title}`);
        }
      });
      nowBodyMoviesSliderTrack.appendChild(card);
    });
  } else {
    console.warn("Element with ID 'nowBodyMoviesSliderTrack' not found.");
  }

  // Render Marvel Shows Cards
  const marvelSliderTrack = document.getElementById("marvelSliderTrack");
  if (marvelSliderTrack) {
    marvelSliderTrack.innerHTML = "";
    marvelShows.forEach((show) => {
      const card = document.createElement("div");
      card.className = "marvel-card";
      card.innerHTML = `
        <img src="${show.img}" alt="${show.title}" />
        <div class="marvel-live-badge">LIVE</div>
        <div class="marvel-progress">
          <div class="marvel-progress-fill" style="width: ${show.progress}%"></div>
        </div>
        <h4>${show.title}</h4>
        <p>${show.timeLeft}</p>
      `;
      // For Marvel shows, we now pass the 'show' object directly since it contains full details
      card.addEventListener("click", () => showDetails(show));
      marvelSliderTrack.appendChild(card);
    });
  } else {
    console.warn("Element with ID 'marvelSliderTrack' not found.");
  }

  // --- Slider Navigation Setup ---
  // This function sets up scroll buttons for each slider
  function setupSlider(trackId, prevBtnSelector, nextBtnSelector, cardClass, scrollMultiplier = 2) {
    const sliderTrack = document.getElementById(trackId);
    // Find the closest parent container to locate the buttons
    const container = sliderTrack ?
      sliderTrack.closest(".slider-container, .popular-slider-wrapper, .marvel-slider-container, .trending-slider-wrapper") :
      null;

    if (!container) {
      console.warn(`Container for slider track: ${trackId} not found. Cannot set up slider.`);
      return;
    }

    const prevBtn = container.querySelector(prevBtnSelector);
    const nextBtn = container.querySelector(nextBtnSelector);

    if (sliderTrack && prevBtn && nextBtn) {
      const firstCard = sliderTrack.querySelector(`.${cardClass}`);
      let scrollAmount = 300; // Default scroll amount

      if (firstCard) {
        // Calculate scroll amount based on card width and margin
        const computedStyle = getComputedStyle(firstCard);
        const marginRight = parseFloat(computedStyle.marginRight);
        scrollAmount = firstCard.offsetWidth + (isNaN(marginRight) ? 0 : marginRight);
      }

      prevBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({
          left: -scrollAmount * scrollMultiplier,
          behavior: "smooth",
        });
      });

      nextBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({
          left: scrollAmount * scrollMultiplier,
          behavior: "smooth",
        });
      });
    } else {
      console.warn(`Slider elements (track, prevBtn, or nextBtn) not fully found for track: ${trackId}.`);
    }
  }

  // Initialize all sliders
  setupSlider("sliderTrack", ".slider-btn.prev", ".slider-btn.next", "slider-card", 2);
  setupSlider("popularSlider", ".popular-nav-btn.prev", ".popular-nav-btn.next", "popular-card", 2);
  setupSlider("trendingSlider", ".trending-nav-btn.prev", ".trending-nav-btn.next", "popular-card", 2); // Assuming trending uses popular-card class
  setupSlider("nowBodyMoviesSliderTrack", ".movie-btn.prev", ".movie-btn.next", "slider-card", 2);
  setupSlider("marvelSliderTrack", ".marvel-nav-btn.marvel-prev", ".marvel-nav-btn.marvel-next", "marvel-card", 2);
});