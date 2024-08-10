//Llamado al nodo de DOM
let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";

//Lista de datos (String)
let formulario = [
    {nombre: "Login", link: "login/login.html"},
    {nombre: "Formulario De Pedido", link: "Componentes/FormularioDePedido/DePedido.html"},
    {nombre: "Formulario De Busqueda", link: "Componentes/FormularioDeBusqueda/DeBusqueda.html"},
    {nombre: "Formulario De Registro", link: "Componentes/FormularioDeRegistro/DeRegistro.html"},
    {nombre: "Formulario De Contacto", link: "Componentes/FormularioDeContacto/DeContacto.html"},
    {nombre:"Formulario De Comentarios",link:"Componentes/FormularioComentarios/DeComentarios.html"}
];

formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);