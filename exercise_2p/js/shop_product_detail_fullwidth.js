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


// tabs 2

let tabsBtn2 = document.querySelectorAll('.product-tabs.style2 > .product-tabs-btns > .product-tabs-btn');
let tabs2 = document.querySelectorAll('.product-tabs.style2 > .product-tab');
for (let i = 0; i < tabsBtn2.length; i++) {
    tabsBtn2[i].addEventListener('click', () => {
        console.log('click')
        tabs2[i].style.display = 'block';
        tabsBtn2[i].style.border = '1px solid #b4c8c6';
        tabsBtn2[i].style.borderRight = 'none';
        tabsBtn2[i].style.backgroundColor = '#ffffff';
        tabsBtn2[i].style.fontWeight = 'bold';
        for (let j = 0; j < tabsBtn2.length; j++) {
            if (i != j) {
                tabs2[j].style.display = 'none';
                tabsBtn2[j].style.border = 'none';
                tabsBtn2[j].style.backgroundColor = '#f4f6f7';
                tabsBtn2[j].style.fontWeight = '300';
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



// slider 

let sliderBox = document.querySelector('.container > .slider')
let slides = document.querySelector('.container > .slider > .slides')
let sliderList = document.querySelectorAll('.container > .slider > .slides > .slide')

slides.style.width = sliderList.length * 100 + 'vw'
let markSlideNumber = 0;

function nextSlide() {
    if (markSlideNumber < sliderList.length - 1) {
        markSlideNumber++
        sliderList[0].style.marginLeft = '-' + (markSlideNumber / sliderList.length) * 100 + '%'
    }
    else {
        markSlideNumber = 0
        sliderList[0].style.marginLeft = '-' + (markSlideNumber / sliderList.length) * 100 + '%'
    }
}
function prevSlide() {
    if (markSlideNumber > 0) {
        markSlideNumber--
        sliderList[0].style.marginLeft = '-' + (markSlideNumber / sliderList.length) * 100 + '%'
    }
    else {
        markSlideNumber = sliderList.length - 1
        sliderList[0].style.marginLeft = '-' + (markSlideNumber / sliderList.length) * 100 + '%'
    }
}
