// Fetch character Json data
fetch('../scripts/quests.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(que) {
    for (let i = 0; i < Object.keys(que.quests).length; i++) {
      create_quest_card(que, i);
    }
    delete_empty_quest();
    for (let i = 0; i < Object.keys(que.bounties).length; i++) {
      create_bounty_card(que, i);
    }
    delete_empty_bounty();
  })
  .catch(function(error) {
    console.error('something went wrong with JSON file');
    console.error(error);
  });

// Quest Card Template
function create_quest_card(quest, i) {
  var temp = document.getElementById("quest-template");
  var clon = document.getElementById("quest-list");
  var node, a, b, c, d, e;

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

// Bounty Card Template
function create_bounty_card(bounty, i) {
  var temp = document.getElementById("bounty-template");
  var clon = document.getElementById("bounty-list");
  var node, a, b, c, d, e;

  node = temp.content.cloneNode(true);

  // Creating Character Card Attributes
  bounty_title = bounty.bounties[i].title;
  bounty_party = bounty.bounties[i].party;
  bounty_type = bounty.bounties[i].type;
  bounty_hook = bounty.bounties[i].hook;
  bounty_img = bounty.bounties[i].img;
  bounty_img_cred = bounty.bounties[i].img_cred;

  a = temp.content.getElementById("bounty-img");
  a.setAttribute("src", bounty_img);
  b = temp.content.getElementById("bounty-title");
  b.innerHTML = bounty_title
  c = temp.content.getElementById("bounty-party");
  c.innerHTML = bounty_party
  d = temp.content.getElementById("bounty-type");
  d.innerHTML = bounty_type
  e = temp.content.getElementById("bounty-hook");
  e.innerHTML = bounty_hook

  clon.appendChild(node);
}

// Empty Early HTML Templates
function delete_empty_quest() {
  var temp
  temp = document.getElementById("quest-list").firstElementChild;
  temp.remove();
  temp = document.getElementById("quest-list").firstElementChild;
  temp.remove();
}
function delete_empty_bounty() {
  var temp
  temp = document.getElementById("bounty-list").firstElementChild;
  temp.remove();
  temp = document.getElementById("bounty-list").firstElementChild;
  temp.remove();
}
