document.getElementById('submit').addEventListener('click', handleClick);
document.getElementById('more').addEventListener('click', moreFields);

function handleClick() {
    //Get everything in input list
    let inputs = document.getElementById('input-list').children;
    
    //Score list to hold numeric scores
    let scoreList = [];

    //Loop through the inputs and get the values;
    for (let input of inputs) {
        if (input.value.length !== 0) {
            scoreList.push(parseInt(input.value));
        }
    }

    //Compute the max and min of the list of scores
    let maxVal = Math.max(...scoreList);
    let minVal = Math.min(...scoreList);

    //Local avg variable
    let avgVal = 0; 

    let scoreListLen = scoreList.length;
    let totalVals = 0;

    for (let score in scoreList) {
        totalVals += scoreList[score];
    }

    //Compute the average of the scores
    avgVal = (totalVals / scoreListLen);

    //Update the html fields with the computed values
    document.getElementById('max').innerText = maxVal;
    document.getElementById('min').innerText = minVal;
    document.getElementById('average').innerText = avgVal;
}

function moreFields() {

    //Div holding inputs
    let inputs = document.getElementById('input-list');

    //Create 10 new elements of type input - text, append them to the div of inputs
    for(let i = 0; i < 10; i++) {
        let newField = document.createElement('input');
        newField.setAttribute('type', 'text');
        inputs.append(newField);
    }
}

// function toggleRemovable() {
//     //Div holding inputs
//     let inputs = document.getElementById('input-list');

//     let testField = document.createElement('input');
//     testField.setAttribute('type', 'text');

//     inputs.children[0].appendChild(testField)

//     //Create a 'x' button next to each box
//     for(let i = 0; i < inputs.children.length; i++)  {

//     }
// }