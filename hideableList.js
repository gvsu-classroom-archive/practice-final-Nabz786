//Get the containers that have class name hideablelist
let hideDivs = document.getElementsByClassName('hideableList');

//Array to store our headers and keep track of open close status
let divArray = [];

//Add event listeners to the headings inside the components
for (let hideDiv of hideDivs) {

    //Add the event listener for when the header is clicked
    hideDiv.children[0].addEventListener('click', toggleList);

    //Change the display to inline so everything appears on one line
    hideDiv.children[0].style.display = 'inline'

    //Create the span with the little arrow
    let newItem = document.createElement("SPAN");
    newItem.innerText = '\u25BC';

    //Push the header element to the array so we can keep track of it
    divArray.push({elem: hideDiv.children[0].innerText, open: true});

    //Add the span with the arrow before the div
    hideDiv.insertBefore(newItem, hideDiv.children[0]);

};

function toggleList() {

    //The list is the next sibiling of the header, the span is the previous sibling of the header
    let list = event.srcElement.nextElementSibling;
    
    //Loop through our array and find a match for what was clicked
    for (let i = 0; i < divArray.length; i++) {
        if (divArray[i].elem === event.target.innerText) {
            if (divArray[i].open) {
                list.style.visibility = 'hidden';
                divArray[i].open = false;
                event.target.previousElementSibling.innerText = '\u25B6';
            } else {
                list.style.visibility = 'visible';
                divArray[i].open = true;
                event.target.previousElementSibling.innerText = '\u25BC';
            }
        }
    }
}