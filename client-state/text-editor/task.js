const editor = document.getElementById('editor');
const button = document.getElementById('button');

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
    if (!editor.value.trim()) {
        localStorage.removeItem('editor');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    editor.value = localStorage.getItem('editor');
});

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editor');
});
