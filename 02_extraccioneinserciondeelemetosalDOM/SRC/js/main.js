//coja la base de datos de el sistema de gestion veterinario y pegela aca cree un nuevo array con las imagenes de cada mascota le debe cambiar el nombre, la raza y la edad


//esta sera nuestra base de datos y por lo tanto aca se van a alamacenar todos los datos de el programa
let datos = {
  nombre: ["venus", "tomy", "alaska", "firulais", "niño", "tomate", "loco", "niño", "princesa", "niña"],
  especie: ["perro", "perro", "gato", "caballo", "vaca", "perro", "ave", "serpiente", "pez", "elefante"],
  raza: ["bulldog", "lobo siberiano", "persa", "pura sangre", "brahama", "fox terrier", "bull terrier", "loro", "piton", "goldfish", "tasmania"],
  edad: [new Date("2016-08-25"), new Date("2015-08-25"), new Date("2014-08-25"), new Date("2012-08-25"), new Date("2015-08-25"), new Date("2018-08-25"), new Date("2020-08-25"), new Date("2021-08-25"), new Date("2022-08-25"), new Date("2023-08-25")],
  peso: ["20kg", "15kg", "13kg", "13kg", "14kg", "38kg", "25kg", "17kg", "28kg", "13kg"],
  estado: ["estable", "estable", "critico", "estable", "critico", "estable", "critico", "estable", "critico", "estable"],
  nombrepropietario: ["juan", "andres", "felipe", "juan", "luisa", "pamela", "devora", "sofia", "julio", "carlos"],
  documentopropietario: ["103696715", "21255651", "10255845", "10369545", "10255856", "10365985", "102114565", "1022654", "102655540", "102255410"],
  telefono: ["3132797866", "2154625", "244555", "3455454", "345454545", "4535445", "3554445", "34553443", "453454534", "5833545"],
  correo: ["juan@gmail.com", "hola@gmail.com", "perro@gmail.com", "jli@gmail.com", "andri@gmail.com", "pepito@gmail.com", "hola@gmail.com", "buenas@gmail.com", "dato@gmail.com", "aquiles@gmail.com"],
  imagenes:[
    "https://i.pinimg.com/236x/26/24/9a/26249a78777f6e3527d959ed4399dc1e.jpg",
    "https://i.pinimg.com/236x/51/16/6d/51166d85df4f323ede2367c944556d9c.jpg",
    "https://billiken.lat/wp-content/uploads/2024/02/dt-17.jpg",
    "https://media.istockphoto.com/id/1041987488/es/foto/lindo-perro-de-poner-su-cara-en-sus-rodillas-y-el-hombre-sonriente-de-las-manos-rascarse-el.jpg?s=612x612&w=0&k=20&c=_-QrG1QimtXPttueHgPSkhchwUcn8DNtEclUpV991Cg=",
    "https://blog.coppel.com/wp-content/uploads/2022/12/perrito-1024x683.webp",
    "https://billiken.lat/wp-content/uploads/2024/02/cuerpo-38.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHfNIqa7IgN2Va6KLFsf6yyNCovAq3cPPuJ48jYkhZw&s",
    "https://assets-global.website-files.com/63634f4a7b868a399577cf37/63e10adfa64a34de9592b9a3_nombres%20para%20perritos%20blancos.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifofPTIlUX3g8S7INhJMM8_342BnTZlQKXPrOlpEYAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuowfV5oXyMJe9izftT7rQkx3OVOkhIR2q7y9aIP8yQ&s",
]
}
let edadesEnAnios = calcularEdadAños(datos.edad);
datos["edadEnAnios"] = edadesEnAnios;
function calcularEdadAños(fechasdenacimiento) {
  let enAños = []
  let ahora = new Date()
  for (let i = 0; i < fechasdenacimiento.length; i++) {
      let edadMiliSeg = ahora - fechasdenacimiento[i]
      let años = Math.floor(edadMiliSeg / (1000 * 60 * 60 * 24 * 365.25));
      enAños.push(años)
  }
  return enAños
}

//metodo antiguo
const header1 = document.getElementsByTagName("header");
console.log(header1[0]);
//metodo moderno
const header = document.querySelector("header");
console.log(header);

//para crear un titulo
const titulo = document.createElement("h1");
console.log(titulo);
titulo.textContent = "galeria de perritos";
//forma con una funcion moderna
titulo.setAttribute("id", "eltituloprincipal");

//forma antigua
// titulo.id="titulo principal"

titulo.style.color = "blue";
titulo.style = "color:red";

//agregar una nueva clase
titulo.classList.add("text-primary", "text-center", "bg-dark", "text-light");
header.classList.add("py-5", "bg-success");
header.classList.add("px-5", "bg-success");

//con esto remuevo todo lo que le agregue arriba
header.classList.remove("px-5", "py-5");
// titulo.classList.add("text-center")
// titulo.classList.add("bg-dark")

//para crear muchos perritos

const main = document.querySelector("main");

for (let i = 0; i <=datos.nombre.length-1; i++) {
  main.innerHTML += `<section class="card text-capitalize" style="width: 18rem;">
<img src="${datos.imagenes[i]}" class="card-img-top rounded mx-auto d-block" alt="...">
<div class="card-body">
  
  <!-- //con sm y con md lke damos el responsive text-star text-sm-center text-md-end -->
  <h3 class="card-title text-center">${datos.nombre[i]}</h3>
  <!-- <p>eres un dogo argentino</p> -->
  <span class="fw-bold">raza:</span><span>${datos.raza[i]}</span><br>
  <span class="fw-bold">edad:</span><span>${datos.edadEnAnios[i]} años</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
    tempora similique sapiente non, et earum fuga omnis temporibus
    obcaecati modi vel laboriosam ratione accusamus illo placeat illum
    tenetur reprehenderit sed?</p>
  <div class="d-flex justify-content-center">
    <button href="#" class="btn btn-primary ">adoptame</button>
  </div>
</div>
</section>`;
}

header.appendChild(titulo);
