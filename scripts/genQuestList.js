// Fetch character Json data
fetch('../scripts/quests.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(que) {
    for (i = 0; i < Object.keys(que.quests).length; i++) {
      create_quest_card(que, i);
    }
    delete_empty_card();
  })
  .catch(function(error) {
    console.error('something went wrong with JSON file');
    console.error(error);
  });

// Character Template
function create_quest_card(quest, i) {
  var temp = document.getElementsByTagName("template")[0];
  var clon = document.getElementById("quest-list");
  var node,a,b,c,d,e;

  node = temp.content.cloneNode(true);

  // Creating Character Card Attributes
  quests_title = quest.quests[i].title;
  quests_party = quest.quests[i].party;
  quests_type = quest.quests[i].type;
  quests_hook = quest.quests[i].hook;
  quests_img = quest.quests[i].img;
  char_img_cred = quest.quests[i].img_cred;

  a = temp.content.getElementById("quest-img");
  a.setAttribute("src", quests_img);
  b = temp.content.getElementById("quest-title");
  b.innerHTML = quests_title
  c = temp.content.getElementById("quest-party");
  c.innerHTML = quests_party
  d = temp.content.getElementById("quest-type");
  d.innerHTML = quests_type
  e = temp.content.getElementById("quest-hook");
  e.innerHTML = quests_hook

  clon.appendChild(node);
}

function delete_empty_card() {
  var temp
  temp = document.getElementById("quest-list").firstElementChild;
  temp.remove();
  temp = document.getElementById("quest-list").firstElementChild;
  temp.remove();
}
