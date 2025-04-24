document.getElementById("loadData").addEventListener("click", function() {
    fetch("data.json") // AJAX request to fetch JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Convert response to JSON
        })
        .then(data => {
            let output = "<ul>";
            data.forEach(user => {
                output += `<li>${user.name} - ${user.email}</li>`;
            });
            output += "</ul>";
            document.getElementById("result").innerHTML = output; // Display data
        })
        .catch(error => console.error("Error fetching data:", error));
});