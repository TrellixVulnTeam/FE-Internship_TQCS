let tabsBtn = document.querySelectorAll('.main-content > .product-tabs > .product-tabs-btns > .product-tabs-btn');
let tabs = document.querySelectorAll('.main-content > .product-tabs > .product-tab');
for (let i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].addEventListener('click', () => {
        tabs[i].style.display = 'block';
        tabsBtn[i].style.border = '1px solid #b4c8c6';
        tabsBtn[i].style.borderBottom = 'none';
        tabsBtn[i].style.backgroundColor = '#ffffff';
        tabsBtn[i].style.fontWeight = 'bold';
        for (let j = 0; j < tabsBtn.length; j++) {
            if (i != j) {
                tabs[j].style.display = 'none';
                tabsBtn[j].style.border = 'none';
                tabsBtn[j].style.backgroundColor = '#f4f6f7';
                tabsBtn[j].style.fontWeight = '200';

            }
        }
    });
}

// menu more info

let productMoreInfoListContent = document.getElementsByClassName('product-more-info-list-item-content')
let productMoreInfoListBtn = document.getElementsByClassName('product-more-info-list-item-title')
let symbol = document.getElementsByClassName('product-more-info-list-item-title-symbol')
let statusList = []

for (let i = 0; i < productMoreInfoListBtn.length; i++){
    statusList.push(false)
}

console.log(statusList)
for (let i = 0; i < productMoreInfoListBtn.length; i++){
    productMoreInfoListBtn[i].addEventListener('click', (e) => {
        if (statusList[i]) {
            productMoreInfoListContent[i].style.display = 'none'
            symbol[i].innerHTML = '+'
            productMoreInfoListBtn[i].style.fontWeight = '300'
            statusList[i] = false
        }
        else {
            productMoreInfoListContent[i].style.display = 'flex'
            symbol[i].innerHTML = '-'
            productMoreInfoListBtn[i].style.fontWeight = 'bold'
            statusList[i] = true
        }
        console.log('click')
    })
}

// testimonials slider
let testimonialList = document.getElementsByClassName('testimonial')
let firstTestimonial = document.querySelector('.testimonial.first')
let testimonialPrevBtn = document.querySelector('.testimonial-prev-btn')
let testimonialNextBtn = document.querySelector('.testimonial-next-btn')
let testimonialSlider = document.querySelector('.testimonials-list')
let testimonialLenght = testimonialList.length
let testimonialMarkNumer = 0;

testimonialSlider.style.width = (testimonialLenght * 100) + "%"
for (let i = 0; i < testimonialList.length; i++){
    testimonialList[i].style.width = 100 / testimonialList.length + '%'
}

testimonialNextBtn.addEventListener('click', () => {
    if (testimonialMarkNumer < testimonialLenght - 1) {
        testimonialMarkNumer ++;
        console.log("-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%")
        firstTestimonial.style.marginLeft = "-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%"

    } else {
        testimonialMarkNumer = 0;
        firstTestimonial.style.marginLeft = "-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%"
    }
})
testimonialPrevBtn.addEventListener('click', () => {
    if (testimonialMarkNumer > 0) {
        testimonialMarkNumer --
        console.log("-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%")
        firstTestimonial.style.marginLeft = "-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%"

    } else {
        testimonialMarkNumer = 2;
        firstTestimonial.style.marginLeft = "-" + (testimonialMarkNumer / testimonialLenght) * 100 + "%"
    }
})



