fetch("./data.json")
.then((response) => response.json())
.then((bootcampData) => console.log(bootcampData))
.catch((error) => console.log(error))

let iterar = (bootcampData) => {
    console.log(bootcampData)
    for (const item of bootcampData.BootcampCrew) {
        console.log(item);
    }
}
const miembros = document.getElementById('BootcampMembers')
//miembros.innerHTML = `${item.Nombre}` + " " + `${item.Apellido}`