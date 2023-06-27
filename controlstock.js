//APP PARA CONTROL DE INVENTARIO, CON VALIDACION DE ENTRADA DE DATOS DEL MENU
function menuInicio(){
        //variables ficticias de stock
        let remeras=86;
        let buzos = 63;
        let camperas = 78;
        let camisas = 47;
        let pantalones = 32;
        let zapatillas = 20;
        let bandera = false;
        let seguir;
do {
        let entrada= prompt("Ingrese el numero del articulo a consultar:\n 1. Remeras\n 2. Buzos\n 3. Camperas\n 4. Camisas\n 5. Pantalones\n 6. Zapatillas\n 0. Salir");
        switch(entrada){
                case '1': alert("La cantidad de remeras son: " + remeras);
                        bandera = false;
                break;
                case '2': alert("La cantidad de buzos son: " + buzos);
                bandera = false;
                break;
                case '3': alert("La cantidad de camperas son: " + camperas);
                        bandera = false;
                        break;
                case '4': alert("La cantidad de camisas son: " + camisas);
                        bandera = false;
                        break;
                case '5': alert("La cantidad de pantalones son: " + pantalones);
                        bandera = false;
                        break;
                case '6': alert("La cantidad de zapatillas son: " + zapatillas);
                        bandera = false;
                        break;
                case '0':
                        bandera = false;
                        seguir = "no";
                        break;
                default: alert("Codigo incorrecto, ingrese un numero valido (entre 0 y 6)");
                        bandera = true;
                        break;
        }
        if(entrada!=0 && bandera===false){
                seguir= prompt("¿Desea seguir consultando? (si/no)").toLowerCase();
                //VALIDACION DE SEGUIR
                while(seguir!="si" && seguir!="no"){
                alert("Opcion incorrecta, solo se admiten las palabras si/no");
                seguir= prompt("¿Desea seguir consultando? (si/no)").toLowerCase();
                }
        }
} while (bandera || seguir =="si");
}


alert("Bienvenidos a la app de control de inventario");
menuInicio();
alert("Consulta finalizada");