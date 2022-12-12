document.addEventListener('change', (e) => {
    let check = e.target;
    const ulTotal = check.closest('li.interest').querySelector('.interests_active');
    if (ulTotal !== null) {
        const inputAll = ulTotal.querySelectorAll('input');
        for (let i = 0; i < inputAll.length; i++) {
            inputAll[i].checked = check.checked; 
        }
    }
    const parent = check.closest('ul').parentElement;
    console.log(parent);
    const ch = pow(check,parent);
    console.log(ch);        
});

function pow(check, parent) {
    if (parent.matches('li')) {
        check = parent.querySelector('input');

        const childrenElements = Array.from(check.closest('li').querySelector('ul').querySelectorAll('input'));
        const checkStatus = childrenElements.map((item) => item.checked);
        console.log(checkStatus);
        const every = checkStatus.every(Boolean);
        console.log(every);
        const some = checkStatus.some(Boolean);
        console.log(some); 

        check.checked = every;
        check.indeterminate = !every & every !== some;

        return pow(check,check.closest('ul').parentElement);
    } else {
        return check;
    }
}