let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#btn-mode");

function enableDarkMode() {
  const modeText = document.querySelector("#mode-text");
  modeText.innerHTML = "Light";

  const modeIcon = document.querySelector("#light-mode-icon");
  modeIcon.classList.remove("hidden");

  const modeIcon2 = document.querySelector("#dark-mode-icon");
  modeIcon2.classList.add("hidden");

  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  const modeText = document.querySelector("#mode-text");
  modeText.innerHTML = "Dark";

  const modeIcon = document.querySelector("#light-mode-icon");
  modeIcon.classList.add("hidden");

  const modeIcon2 = document.querySelector("#dark-mode-icon");
  modeIcon2.classList.remove("hidden");

  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

// On Load of the page, check if the user already has darkMode
if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
