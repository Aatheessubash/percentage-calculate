function percentage(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var total = parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)*2;
    var percentage =parseFloat(total)/4;
     document.getElementById("show").innerHTML="you percentage = "+percentage;
}