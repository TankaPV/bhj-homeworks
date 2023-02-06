const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form); 
    //formData.append('file',document.getElementById('file').files[0]);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr);
        }
    }
    
    xhr.upload.onprogress = (event) => { 
        progress.value = event.loaded / event.total; 
    }
    
    // xhr.upload.onloadstart = () => {
    //     progress.value = 0.25;
    // }
    // xhr.upload.onprogress = () => {
    //     progress.value = 0.5;
    // }
    // xhr.upload.onload = () => {
    //     progress.value = 0.75;
    // }
    // xhr.upload.onloadend = () => {
    //     progress.value = 1; 
    // }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});
