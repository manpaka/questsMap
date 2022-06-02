dat = document.getElementById('myDiv')

get_data()

function get_data(){
    var source = "/marches/data/data.json";
    console.log(source)

    fetch(source)
    .then(function(response) {
        return response.json();
    })
    .then(function(obj) {
        content(obj.hellow)
    })
    .catch(function(error) {
        console.error('Something Went Wrong');
        console.error(error);
    });
}

function content(item) {
    console.log(item)
}