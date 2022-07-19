function find(){
    var source = "/scripts/recaps.json";

    fetch(source)
    .then(function(response) {
        return response.json();
    })
    .then(function(obj) {
        loadContent(obj.one);
        loadContent(obj.two);
    })
    .catch(function(error) {
        console.error('Something Went Wrong');
        console.error(error);
    });
}

function loadContent(content) {
    console.log(content.Title);
    // console.log(content.Date);
    // console.log(content.Content); // Very Long

    for (i = 0; i < 2; i++) {
        var temp = document.getElementsByTagName("template")[i]
        if (i == 0){
            temp.content.getElementById("item-title").innerHTML = content.Title
            temp.content.getElementById("item-date").innerHTML = content.Date
            var clon = temp.content.cloneNode(true);
            document.getElementById("buttons").appendChild(clon);
        } else {
            temp.content.getElementById("item-title").innerHTML = content.Title
            temp.content.getElementById("item-date").innerHTML = content.Date
            temp.content.getElementById("item-content").innerHTML = content.Content
            var clon = temp.content.cloneNode(true);
            document.getElementById("modals").appendChild(clon);
        }
    }
}

find()