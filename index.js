fetch("./data.json")
.then((response) => response.json())
.then((bootcampData) => console.log(bootcampData))
.catch((error)=> console.log(error))

const miembros = document.getElementById('BootcampMembers')

const iterando = (bootcampData) => {
    console.log(bootcampData)
    for (const item of bootcampData.BootcampCrew) {
        console.log(item);
    }
}
    //miembros.innerHTML += `<div> `${item.Nombre}` </div>`
    