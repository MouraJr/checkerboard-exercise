for (let i = 0; i <= 80; i++) {
    const div = document.createElement('div');
    if (i % 2 === 0) {
        document.body.style.width = '90vw';
        document.body.style.height = '90vw';
        document.body.style.margin = '0';
        document.body.appendChild(div);
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.backgroundColor = 'red';
        div.style.float = 'left';
    } else {
        document.body.style.width = '100vw';
        document.body.style.height = '100vw';
        document.body.appendChild(div);
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.backgroundColor = 'black';
        div.style.float = 'left';
    }
}



