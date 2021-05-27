
function runDropdown(isActive: boolean, dropdownbId: string) {
    const dropdown = document.getElementById(dropdownbId);
    if (isActive) {
        dropdown?.classList.add('isActive');
        setTimeout(() => {
            dropdown?.getElementsByClassName('dropdown-options-child')[0].classList.add('isActive');
            dropdown?.getElementsByClassName('drop')[0].setAttribute('style', 'transform: rotate(180deg); transition: all .2s')
        }, 100);
    }
    else {
        dropdown?.getElementsByClassName('dropdown-options-child')[0].classList.remove('isActive');
        dropdown?.getElementsByClassName('drop')[0].setAttribute('style', 'transform: rotate(0deg); transition: all .2s')
        setTimeout(() => {
            dropdown?.classList.remove('isActive');
        }, 100);
    }
}

function manipulateScroll(isActive: boolean) {
    if (!isActive) document.body.classList.add('inactive-scroll');
    else document.body.classList.remove('inactive-scroll');
}

function decorateInput() {
    window.addEventListener("click", (e:any) => {
       console.log(e.path[0])
    })
}

export { runDropdown, manipulateScroll, decorateInput }


