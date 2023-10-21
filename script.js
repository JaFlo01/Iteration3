const searchSongBtn = document.querySelector(".search-button");
const songRequest = document.querySelector(".search-container");

searchSongBtn.addEventListener("click", function (event) {
  alert("Searching song");
});

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-container");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchInput = document.getElementById("song");
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "" || searchTerm === " ") {
      alert("Please enter a song!");
      searchInput.focus();
    } else {
      alert(`Song requested: ${searchTerm}`);
      searchForm.submit();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("h2.showtime");
  header.textContent = "Updated Showtime";

  let radioHost = {
    name: "James",
    showName: "Top 100 Hip-Hop Classics",
    yearsExperience: 10,
  };

  console.log("Host's name:", radioHost.name);

  radioHost.yearsExperience = 5;

  radioHost.timeSlot = "8pm-12am";

  console.log("Radio Host object after update:", radioHost);
});

window.addEventListener("load", function () {
  window.alert("Loaded successfully!");
});
