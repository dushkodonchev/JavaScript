
let firstTitle = document.getElementById('myTitle');

firstTitle.textContent='Lets change it';

console.log(firstTitle);

let firstParagraph = document.getElementsByClassName("paragraph")[0];

console.log(firstParagraph);

firstParagraph.textContent = 'Why not to change and this one';


let secondDiv = document.querySelector('.paragraph.second')


secondDiv.textContent='Change it!'

console.log(secondDiv);

let someText = document.getElementsByTagName('text')[0];


someText.textContent = 'YEAH!'
console.log(someText);



let lastDiv = document.getElementsByTagName('h1')[1]

console.log(lastDiv)

lastDiv.textContent = 'We can try';


let lastTextLine=document.getElementsByTagName('h3')[0];
console.log(lastTextLine);

lastTextLine.textContent = 'Last one';

console.log(lastTextLine);





// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed