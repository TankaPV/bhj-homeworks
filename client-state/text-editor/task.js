const editor = document.getElementById('editor');
const button = document.getElementById('button');

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
    if (!editor.value.trim()) {
        localStorage.clear();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.editor) {
        editor.value = localStorage.editor;
    }    
});

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
});
