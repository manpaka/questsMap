if (str.slice(3,4) == "+") {
  console.log("+");
} else if (str.slice(4,5) == "+") {
  console.log("++");
} else if (str.slice(5,6) == "+") {
  console.log("+++");
} else {
    console.log("Bonus Broken");
}

if (str.slice(1,2) == "d") {
  three = 2;
  two = 1;
} else if (str.slice(2,3) == "d") {
  three = 3;
  two = 2;
} else if (str.slice(3,4) == "d") {
  three = 4;
  two = 2;
} else if (str.slice(4,5) == "d") {
  three = 5;
  two = 2;
} else {
    console.log("Count Broken");
}
