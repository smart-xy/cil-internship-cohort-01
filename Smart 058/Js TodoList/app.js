const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    //When you double click it deletes the text
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    //When you click it rules a line through
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    
    })
})

function removeAll()
{
    document.querySelector('.to-dos').innerHTML = "";
}