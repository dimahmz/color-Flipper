var backColor = document.getElementById("backColor");
backColor.textContent = "Background Color : rgb(255, 255, 255)";
document.body.style.backgroundColor = "rgb(255, 255, 255)";
var i = "RgbColor";
//to choose which type of Color code
var rgbColor;
//for the RGB color 
function RgbColor() {
    backColor.textContent = "Background Color : rgb(255, 255, 255)";
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    i = "RgbColor";
}
//for the HEX color 
function hexColor() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    backColor.textContent = "Background Color : #ffffff";
    i = "HexColor";

}
function changeColor() {
    // math.foor changes the floot to an integer 
    var var1 = Math.floor(Math.random() * 255);
    var var2 = Math.floor(Math.random() * 255);
    var var3 = Math.floor(Math.random() * 255);
    if (i == "RgbColor") {

        rgbColor = "rgb(" + var1 + "," + var2 + "," + var3 + ")";

    } else if (i == "HexColor") {
        // Exvar1 = "0" + Exvar1 to prevent write just a number examele 5 is 05 in hexadecimal

        let Exvar1 = var1.toString(16);
        if (var1 < 10) Exvar1 = "0" + Exvar1;
        let Exvar2 = var2.toString(16);
        if (var2 < 10) Exvar2 = "0" + Exvar2;
        let Exvar3 = var3.toString(16);
        if (var3 < 10) Exvar3 = "0" + Exvar3;
        rgbColor = "#" + Exvar1 + Exvar2 + Exvar3;

    }
    document.body.style.backgroundColor = rgbColor;
    backColor.textContent = "Background Color : " + rgbColor;



    // document.body.style.backgroundColor = rgbColor;
    // backColor.textContent = "Background Color : " + rgbColor;

}




