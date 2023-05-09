var searchText = document.getElementById("text");
var proba = document.querySelector(".test");

searchText.addEventListener("input", () => {
  const searchTerm = searchText.value;

  // Do some processing with the search term here
  // For example, you could make an API request to get data based on the search term

  // Once you have the results, display them in the results div
  proba.innerHTML = `<p> ${searchTerm}</p>`;

  // Define the API URL
  // const apiUrl = "https://api.tvmaze.com/search/shows?q=" + searchTerm;
  const apiUrl =
    "https://itunes.apple.com/search?term=" + searchTerm + "&entity=song";
  // resultsTable.innerHTML = "";
  // Fetch the data from the API
  fetch(apiUrl, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Get the table body element
      const tbody = document.querySelector("#results-table tbody");

      if (data.results == "") {
        tbody.textContent = "Insert new query";
      } else {
        // Loop through the data and create a new row for each item
        data.results.forEach((item) => {
          // Create a new row element
          // if (!item) {
          //   tbody.innerHTML = "Insert new query111";
          // }
          const row = document.createElement("tr");

          // Create the cells and populate them with the data
          // const idCell = document.createElement("td");
          // idCell.textContent = item.show.id;

          // const nameCell = document.createElement("td");
          // nameCell.textContent = item.show.name;

          // const emailCell = document.createElement("td");
          // emailCell.textContent = item.show.rating.average;
          // const genreCell = document.createElement("td");
          // genreCell.textContent = item.show.genres;
          // const summaryCell = document.createElement("td");
          // summaryCell.innerHTML = item.show.summary;
          // Create the cells and populate them with the data
          const idCell = document.createElement("td");
          idCell.textContent = item.trackId;

          const nameCell = document.createElement("td");
          nameCell.textContent = item.artistName;

          const emailCell = document.createElement("td");
          emailCell.textContent = item.trackName;

          // Add the cells to the row
          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(emailCell);
          // row.appendChild(genreCell);
          // row.appendChild(summaryCell);
          // Add the row to the table body
          tbody.appendChild(row);
        });
      }
    })
    .catch((error) => console.log(error));
});
