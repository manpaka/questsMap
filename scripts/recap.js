var rp = document.getElementById("recapParagraph");

var names = {
    Stormfang: "<b>Stormfang</b>",
    Areyja: "<b>Areyja</b>",
    Hadrian: "<b>Hadrian</b>",
    Professor: "<b>Professor</b>",
    Wynather: "<b>Wynather</b>",
    Kipna: "<b>Kipna</b>",
    Lilkip: "<b>Lil Kip</b>",
    Cambyses: "<b>Cambyses</b>",
    Decax: "<b>Decax</b>",
    Sander: "<b>Sander</b>"
}

var output = rp.innerHTML.replace(
    /Stormfang|Areyja|Hadrian|Professor|Wynather|Kipna|Lilkip|Cambyses|Decax|Sander/g, 
    function(matched){
        return names[matched];
    }
);

document.getElementById("recapParagraph").innerHTML = output