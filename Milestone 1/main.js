var toggleButton = document.getElementById('toggle-skills');
var skill = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skill.style.display === 'none' || skill.style.display === '') {
        skill.style.display = 'block'; //show the textarea if it is hidden
    }
    else {
        skill.style.display = 'none'; //hide the textarea if it is visible 
    }
});
