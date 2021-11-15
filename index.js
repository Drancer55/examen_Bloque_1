fetch("./data.json")
.then((response) => response.json())
.then((data) => bootcampData(data))
.catch((error) => console.log(error))

let bootcampData = (data) => {
    console.log(data)
    for (const item of data.BootcampCrew) {
        console.log(data.BootcampCrew);
        console.log(item.Nombre);
        const miembros = document.getElementById('BootcampMembers')
        miembros.innerHTML += `<b> Nombre: </b> ${item.Nombre}` + " " + `${item.Apellido}` + `<br>` +
        `<td>` + `<b> Edad: </b> ${item.Edad}` + `<br>` +
        `<td>` + `<b>Cumpleños: </b> ${item.Cumpleaños}` + `<br>`+ `<hr>`;
    }
}
