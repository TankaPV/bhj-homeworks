(() => {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    getHole = (index) => document.getElementById(`hole${index}`);

    for (let index = 1; index < 10; ++index) {

        getHole(index).onclick = () => {

            if (getHole(index).classList.contains('hole_has-mole')) {
                
                dead.textContent = Number(dead.textContent) + 1;

            } else {
                
                lost.textContent = Number(lost.textContent) + 1;  
                                 
            }

            
                if (lost.textContent === '5') {

                    playing = false;
                    setTimeout(() => {
                        alert('Вы програли'),
                        dead.textContent = 0,
                        lost.textContent = 0
                    
                    },100);
                }    
            
                if (dead.textContent === '10') {

                    playing = false;
                    setTimeout(() => {
                        alert('Вы победили!')
                        dead.textContent = 0,
                        lost.textContent = 0
                    
                    },100);
                }    
        }
    }        
    
})(); 
    
