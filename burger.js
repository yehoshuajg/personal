function handleChecked(checkbox){
    let navLinks = document.getElementsByClassName('nav-link');
    if (checkbox.checked == true){
        Array.from(navLinks).forEach((navLink, index) => {
            navLink.classList.add('active-link');
        })
    }
    else{
        Array.from(navLinks).forEach((navLink, index) => {
            navLink.classList.remove('active-link');
        })
    }
}