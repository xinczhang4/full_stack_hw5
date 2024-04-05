fetch("https://randomuser.me/api/?results=5")
    .then((response) => {
        return response.json();
    })
    .then((userData) => {
        console.log(userData);
        let tableContent = "";
        userData.results.map((user) => {
            tableContent += `
            <tr>
                <td>${user.name.first}</td>
                <td>${user.location.city}</td>
            </tr>`;
        });
        document.getElementById("table_body").innerHTML = tableContent;
    })
    .catch((error) => {
        console.log(error);
    });
