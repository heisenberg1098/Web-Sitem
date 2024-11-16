
var sayi=0;
document.getElementById('renkdegis').addEventListener('click', function() {
    // CSS linki etiketini seç
    var stylesheet = document.getElementById('stylesheet');
    sayi++;
if(sayi==1){

    var newStyle = "styles2.css";  
}
else
   {
    var newStyle = "styles.css";  
sayi=0;
   } 
   
    stylesheet.href = newStyle;
});
