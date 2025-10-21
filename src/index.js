function generatePoem(event) {
    event.preventDefault();


new Typewriter('#poem', {
  strings: "Lying, thinking last night. How to find my soul a home",
  autoStart: true,
  delay: 1,
  cursor: "",  

});
}

let poemFormElement = document.querySelector ("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);
