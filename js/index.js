webnataliaNode = document.querySelector(`#webnatalia`);

webnataliaNode.addEventListener(`click`, () => {
    webnataliaNode.innerHTML = `Недоступно`;
});

document.getElementById(`switchtheme`).addEventListener(`click`, function() {
    const currentTheme = document.body.className;
    if (currentTheme === `dark`) {
        document.body.className = 'light';
    } else {
        document.body.className = 'dark';
    }
});