const fs = require("fs");
const files = "warandpeace.txt";
// let input = document.querySelector("input");

// let textarea = document.querySelector("textarea");

// input.addEventListener("change", () => {
//   let files = input.files;

//   if (files.length == 0) return;

//   const file = files[0];

//   let reader = new FileReader();

//   reader.onload = e => {
//     const file = e.target.search;
//     const lines = file.split(/\r\n|\n/);
//     textarea.value = lines.join("\n");
//   };

//   reader.onerror = e => alert(e.target.error.name);

//   reader.readAsText(file);

fs.readFile(files, "utf8", (err, str) => {
  //turn to lowercase
  str = cleanString(str);

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
// });

const stringSplit = str => {
  return str.split(/\s+/);
};

const cleanString = str => {
  const reg = /[.,"();*#\[\]?!@%_“$:”0-9‘]/g;
  return str.toLowerCase().replace(reg, "");
};
