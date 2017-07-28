import React from 'react'; /*Importo a mi clase React todo el contenido de(from) "react"*/

/*Como paso final o si ya tenemos practica desde el principio debemos decirle que este archivo esta disponible para ser exportado (y lo importaremos en app.js)*/
export default class Lista extends React.Component{
    /*Creamos la clase Lista y le heredamos (extends) los atributos y componentes y cosas en general que tiene React en su apartado de Component*/
    render(){
        /*Render es un metodo de react que pinta, carga, pone los componentes en el DOM virtual (que luego se ven en el DOM real)*/
        return(
            /*El render digamos que cocina, pero no entrega, el retur las devuelve, es su salida*/
            <ul>
                <li>Frutas</li>
                <li>manzana</li>
                <li>pera</li>
            </ul>
        );
    }
}
