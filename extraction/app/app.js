const fs = require("fs");
const book = "warandpeace.txt";

const stringSplit = str => {
  return str.split(/\s+/);
};

const clean = str => {
  const reg = /[.,"();*#\[\]?!@%_“$:”0-9‘]/g;
  return str.toLowerCase().replace(reg, "");
};

fs.readFile(book, "utf8", (err, str) => {
  //turn to lowercase
  str = clean(str);

  const search = stringSplit(str);

  let searchObject = {};

  search.forEach(element => {
    // empty string
    if (element.trim() == "") return;
    searchObject.hasOwnProperty(element)
      ? searchObject[element]++
      : (searchObject[element] = 1);
  });

  let word,
    count = 0;

  for (const prop in searchObject) {
    if (searchObject[prop] > count) {
      word = prop;
      count = searchObject[prop];
    }
  }

  console.log("the word most frequently used is....:" + word);
  console.log("appearing :" + count + " times");
});
