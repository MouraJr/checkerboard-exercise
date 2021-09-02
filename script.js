for (let i = 0; i <= 80; i++) {
    if (i % 2 === 0) {
        const div = document.createElement('div');
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.appendChild(div);
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.backgroundColor = 'red';
        div.style.float = 'left';
    } else {
        const div = document.createElement('div');
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.appendChild(div);
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.backgroundColor = 'black';
        div.style.float = 'left';
    }
}



