const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let wrapper = get("container");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
    wrapper.style.filter = 'blur(2px)';
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
    wrapper.style.filter = 'blur(0)';
})


