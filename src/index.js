function displayPoem(response) {

console.log("poem generated");
new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();


    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "960t74of2af71309951ecd4291baaaa0";
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem only in basic HTML. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside <strong> element";
    let prompt = `User instructions: Generate a poem about home ${instructionsInput.value}`;
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      
console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);


axios.get(apiUrl).then(displayPoem);


}

let poemFormElement = document.querySelector ("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);
