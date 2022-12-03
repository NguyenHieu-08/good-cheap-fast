function eventChange() {

    let gcf = document.querySelectorAll('input[type="checkbox"]:checked');
    
    let arr = Array.from(gcf);

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i].id === 'good' && arr[i+1].id === 'fast') {
            document.getElementById('cheap').removeAttribute('checked');
        }

        if(arr[i].id === 'good' && arr[i+1].id === 'cheap') {
            document.getElementById('fast').removeAttribute('checked');
        }

        if(arr[i].id === 'cheap' && arr[i+1].id === 'fast') {
            document.getElementById('good').removeAttribute('checked');
        }
    }
    
}