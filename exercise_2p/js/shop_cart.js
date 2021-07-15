// increase/ decrease quantity

function increaseQuantity(e) {
    e.previousElementSibling.innerHTML = parseInt(e.previousElementSibling.innerHTML) + 1
    
}

function decreaseQuantity(e) {
    if (parseInt(e.nextElementSibling.innerHTML) > 0) {
        e.nextElementSibling.innerHTML = parseInt(e.nextElementSibling.innerHTML) -1
    }
}