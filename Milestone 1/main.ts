

const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skill = document.getElementById("skills") as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skill.style.display === 'none'|| skill.style.display === '') {
        skill.style.display = 'block';       //show the textarea if it is hidden
    } else {
        skill.style.display = 'none';       //hide the textarea if it is visible 
    }
});



