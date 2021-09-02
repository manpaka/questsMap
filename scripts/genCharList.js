// Fetch character Json data
fetch('../scripts/characters.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(char) {
    for (i = 0; i < Object.keys(char.characters).length; i++) {
      create_char_card(char, i);
    }
    delete_empty_card();
  })
  .catch(function(error) {
    console.error('something went wrong with JSON file');
    console.error(error);
  });

// Character Template
function create_char_card(char, i) {
  var temp = document.getElementsByTagName("template")[0];
  var clon = document.getElementById("char_list");
  var node,a,b,c,d;

  node = temp.content.cloneNode(true);

  // Creating Character Card Attributes
  char_name = char.characters[i].name;
  char_class = char.characters[i].attribute;
  char_note = char.characters[i].note;
  char_img = char.characters[i].img;
  char_img_cred = char.characters[i].img_cred;

  a = temp.content.getElementById("char_img");
  a.setAttribute("src", char_img);
  b = temp.content.getElementById("char_name");
  b.innerHTML = char_name
  c = temp.content.getElementById("char_class");
  c.innerHTML = char_class
  d = temp.content.getElementById("char_notes");
  d.innerHTML = char_note

  clon.appendChild(node);
}

function delete_empty_card() {
  var temp
  temp = document.getElementById("char_list").firstElementChild;
  temp.remove();
  temp = document.getElementById("char_list").firstElementChild;
  temp.remove();
}
