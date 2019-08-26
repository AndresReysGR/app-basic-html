const buttons = document.querySelectorAll('button');
const playnote = event =>{
    console.log(event.target.dataset.note);
            alert('Load')

}


buttons.forEach(
    button => button.addEventlistener('click', playnote)
);