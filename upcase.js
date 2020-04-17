//Add an event listener to the button
document.getElementById('decorate').addEventListener('click', handleClick);

function handleClick() {

    //Get everything with the classname allcaps
    let toAllCaps = document.getElementsByClassName('allcaps');

    //Get everything with the classname upcase
    let upperCase = document.getElementsByClassName('upcase');
    
    //make everything with the classname upcase, uppercase
    for (let item of toAllCaps) {
        item.style.textTransform = 'uppercase';
    }

    //Make the first character uppercase and add the rest of the 
    for (let item of upperCase) {
        //If it's just a single word we can split it and capitalize the first letter
        if (item.innerText.split(' ').length === 1) {
                item.innerText = item.innerText.charAt(0).toUpperCase() + item.innerText.slice(1);
        } else {
            //For multiple words we can use split to store them in array and then capitalize the first letter of each array index
            let word = item.innerText.split(' ');
            for (let i = 0; i < word.length; i++) {
                word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
            }
            item.innerText = word.join(' ');
        }
    }     
}
