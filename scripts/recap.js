var rp = document.getElementById("recapParagraph");

var names = {
    stormfang: "<b>Stormfang</b>",
    areyja: "<b>Areyja</b>",
    hadrian: "<b>Hadrian</b>",
    professor: "<b>Professor</b>",
    wynather: "<b>Wynather</b>",
    kipna: "<b>Kipna</b>",
    lilkip: "<b>Lil Kip</b>",
    cambyses: "<b>Cambyses</b>",
    decax: "<b>Decax</b>",
    sander: "<b>Sander</b>",
    rainpath: "<b>Rainpath</b>",

    strahd: "<b>Strahd Von Zarovich</b>",
    martikovs: "<b>Martikovs</b>",
    dimitri: "<b>Dimitri Krezkov</b>",

    krezk: "<b>Krezk</b>",
    berez: "<b>Ruins of Berez</b>"
}

var output = rp.innerHTML.replace(
    /stormfang|areyja|hadrian|professor|wynather|kipna|lilkip|cambyses|decax|sander|rainpath|martikovs|krezk|dimitri|berez|strahd/g, 
    function(matched){
        return names[matched];
    }
);

document.getElementById("recapParagraph").innerHTML = output