const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const resultP = document.getElementById("result");
  fetch("/api/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John", visitedCountries: ["USA", "Canada"] }),
  })
    .then((response) => response.json())
    .then((data) => {
      resultP.innerHTML = data.message;
    })
    .catch((error) => {
      resultP.innerHTML = "Error";
    });
});
