let btnExtraer = document.getElementById("btnExtraer");
btnExtraer.onclick = mostrar_valores;

function mostrar_valores() {
    // obteniendo valores del nombre

    let apeNom = document.getElementById("apeNombre").value;
    let pal = apeNom.split(" ");
    document.getElementById("apePater").value = pal[0];
    document.getElementById("apeMater").value = pal[1];
    document.getElementById("nombres").value = pal[2];

    // Sacando datos de fecha y obteniendo valores
    let fecha = document.getElementById("fechaNac").value;
    let fechaN = new Date(fecha);
    let numYear = fechaN.getFullYear();
    let numMes = fechaN.getMonth();
    // Fecha del día
    let today = new Date();
    let year = today.getFullYear();

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    document.getElementById("mes").value = meses[numMes];

    document.getElementById("longApe").value = pal[0].length + pal[1].length;
    document.getElementById("edad").value = year - numYear;
    console.log(pal);
    console.log(numMes);
}

let btnColorear = document.getElementById("btnColorear");
btnColorear.onclick = cambiar_color;

let flag = 1;

function cambiar_color() {

    if (flag) {
        // cambiando colores de cajas izquierda
        let grupo1Apn = document.getElementById("grupo1Apn");
        let grupo1Fec = document.getElementById("grupo1Fec");

        grupo1Apn.style.backgroundColor = "#c55725"
        grupo1Fec.style.backgroundColor = "#c55725"


        let grupo2Pa = document.getElementById("grupo2Pa");
        let grupo2Ma = document.getElementById("grupo2Ma");
        let grupo2No = document.getElementById("grupo2No");
        grupo2Pa.style.backgroundColor = "#c55725"
        grupo2Ma.style.backgroundColor = "#c55725"
        grupo2No.style.backgroundColor = "#c55725"

        // cambiando colores de caja derecha
        let grupo3Lon = document.getElementById("grupo3Lon");
        let grupo3Eda = document.getElementById("grupo3Eda");
        let grupo3Mes = document.getElementById("grupo3Mes");

        grupo3Lon.style.backgroundColor = "#264486"
        grupo3Eda.style.backgroundColor = "#264486"
        grupo3Mes.style.backgroundColor = "#264486"
        flag = 0;
    } else {
        // cambiando colores de cajas izquierda
        let grupo1Apn = document.getElementById("grupo1Apn");
        let grupo1Fec = document.getElementById("grupo1Fec");

        grupo1Apn.style.backgroundColor = "#264486"
        grupo1Fec.style.backgroundColor = "#264486"

        let grupo2Pa = document.getElementById("grupo2Pa");
        let grupo2Ma = document.getElementById("grupo2Ma");
        let grupo2No = document.getElementById("grupo2No");

        grupo2Pa.style.backgroundColor = "#264486"
        grupo2Ma.style.backgroundColor = "#264486"
        grupo2No.style.backgroundColor = "#264486"

        // cambiando colores de caja derecha
        let grupo3Lon = document.getElementById("grupo3Lon");
        let grupo3Eda = document.getElementById("grupo3Eda");
        let grupo3Mes = document.getElementById("grupo3Mes");

        grupo3Lon.style.backgroundColor = "#c55725"
        grupo3Eda.style.backgroundColor = "#c55725"
        grupo3Mes.style.backgroundColor = "#c55725"
        flag = 1;
    }

}