function toggleInterests() {
    var interestsContainer = document.getElementById("interests-container");
    interestsContainer.style.display = (interestsContainer.style.display === "none" || interestsContainer.style.display === "") ? "block" : "none";
}

  // script.js
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    var button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function toggleDescription() {
    var description = document.getElementById('description');
    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
  }

function toggleDescription2() {
    var description2 = document.getElementById('description2');
    description2.style.display = (description2.style.display === 'none' || description2.style.display === '') ? 'block' : 'none';
  }

  function toggleDescription3() {
    var description2 = document.getElementById('description3');
    description2.style.display = (description2.style.display === 'none' || description2.style.display === '') ? 'block' : 'none';
  }