//aca traje a main
const main = document.querySelector("main");
main.classList.add("d-flex", "flex-wrap", "gap-5", "justify-content-center");

console.log(main);
console.log("");
console.log(main.innerHTML);
console.log("");
console.log(main.outerHTML);
//con este iner inyecto contenido dentro del main me borra todo y solo me deja lo que le ponga a este iner por eso asi en el html tenga varias card solo me muestra uno 


// for (let i = 0; i < mascotasVeterinario.length; i++) {
//     console.log(mascotasVeterinario[i])
//     main.innerHTML += `
// <div class="card" style="width: 18rem;">
// <img src=${mascotasVeterinario[i].link}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Nombre:${mascotasVeterinario[i].nombreMascota} </h5>
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">Especie:${mascotasVeterinario[i].especieMascota} </li>
//   <li class="list-group-item">Raza:${mascotasVeterinario[i].razaMascota} </li>
//   <li class="list-group-item">Edad:${mascotasVeterinario[i].edadMascota} </li>
//   <li class="list-group-item">Peso:${mascotasVeterinario[i].estadoMascota}</li>
//   <li class="list-group-item">Estado:${mascotasVeterinario[i].estadoMascota} </li>
//   <li class="list-group-item">Dueño:${mascotasVeterinario[i].propietarioMascota.nombreDueñoMascota} </li>
// </ul>
// </div>`;
// }

const button=document.querySelector("button")

button.addEventListener("click",function(){
    main.innerHTML=""
})







for (const mascota of mascotasVeterinario) {
    console.log(mascota)
    main.innerHTML += `
<div class="card" style="width: 18rem;">
<img src=${mascota.link}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Nombre:${mascota.nombreMascota} </h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Especie:${mascota.especieMascota} </li>
  <li class="list-group-item">Raza:${mascota.razaMascota} </li>
  <li class="list-group-item">Edad:${mascota.edadMascota} </li>
  <li class="list-group-item">Peso:${mascota.estadoMascota}</li>
  <li class="list-group-item">Estado:${mascota.estadoMascota} </li>
  <li class="list-group-item">Dueño:${mascota.propietarioMascota.nombreDueñoMascota} </li>
</ul>
</div>`;

}

// mascotasVeterinario.forEach(mascota => {
//     console.log(mascota)
// });
