const dialog = document.querySelector('.dialog');
document.querySelector('.show').addEventListener('click', ()=> {
    dialog.showModal()
});

document.querySelector('.close').addEventListener('click', ()=> {
    dialog.close();
});