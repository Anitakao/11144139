function toggleInterests() {
    var interestsContainer = document.getElementById("interests-container");
    interestsContainer.style.display = (interestsContainer.style.display === "none" || interestsContainer.style.display === "") ? "block" : "none";
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  
document.addEventListener("DOMContentLoaded", function () {
    var showInfoText = document.querySelector('.show-info');
    var infoBox = document.createElement('div');
    infoBox.className = 'info-box';
    infoBox.innerHTML = '暑假期間我'; // 添加介紹內容
  
    showInfoText.parentNode.appendChild(infoBox);
  });