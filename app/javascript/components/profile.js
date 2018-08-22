// toggle for the tabs.
puppy_container = document.querySelector(".pup");
bookings_container = document.querySelector(".but");
// removing and insterting the HTML.
puppy_listings = document.querySelector(".puppy_listings")
bookings_listings = document.querySelector(".bookings_listings")

function remove_style(ele) {
  ele.classList.remove("active");
}

function add_style(ele) {
  ele.classList.add("active");
}

function hide_html(ele) {
  ele.style.display = "none";
}

function show_html(ele) {
  ele.style.display = null;
}

puppy_container.addEventListener("click", (event) => {
  remove_style(bookings_container)
  add_style(puppy_container)
  hide_html(bookings_listings)
  show_html(puppy_listings)
});

bookings_container.addEventListener("click", (event) => {
  remove_style(puppy_container)
  add_style(bookings_container)
  hide_html(puppy_listings)
  show_html(bookings_listings)
});