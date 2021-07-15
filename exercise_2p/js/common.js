//categories list 1
let listSelection = document.querySelectorAll('.categories-selection');
let listMenuStatus = [];

for (let i = 0; i < listSelection.length; i++) {
    listMenuStatus.push(false);
}
for (let i = 0; i < listSelection.length; i++) {
    listSelection[i].addEventListener('click', () => {
        try {
            if (listMenuStatus[i]) {
                listSelection[i].nextElementSibling.style.display = 'none';
                listSelection[i]
                    .querySelector('i')
                    .classList.replace('fa-chevron-down', 'fa-chevron-right');
                listMenuStatus[i] = false;
            } else {
                listSelection[i].nextElementSibling.style.display = 'block';
                listSelection[i]
                    .querySelector('i')
                    .classList.replace('fa-chevron-right', 'fa-chevron-down');
                listMenuStatus[i] = true;
            }
        } catch {
            console.log("elemnt don't have menu");
        }
    });
}

// gallery product nav img
try {
    let galleryNavImgBox = document.querySelector(
        '.gallery-slider-nav-box  .gallery-slider-nav-imgs'
    );
    let galleryNavImgList = document.querySelectorAll(
        '.gallery-slider-nav-box  .gallery-slider-nav-imgs  .gallery-slider-nav-img'
    );
    let galleryImgShow = document.querySelector(
        '.gallery-slider > .gallery-slider-img'
    );
    galleryNavImgBox.style.width = 96 * galleryNavImgList.length + 'px';
    let markNavImgNumber = Math.floor(galleryNavImgList.length / 2) - 1;
    //mark: 0 -> length - 1
    galleryNavImgList[0].style.marginLeft = '-' + markNavImgNumber * 96 + 'px';
    galleryImgShow.style.backgroundImage =
        galleryNavImgList[markNavImgNumber].style.backgroundImage;
    function nextGalleryImg() {
        if (markNavImgNumber < galleryNavImgList.length - 1) {
            markNavImgNumber++;
            galleryNavImgList[0].style.marginLeft =
                '-' + markNavImgNumber * 96 + 'px';
        } else if (markNavImgNumber > 0) {
            markNavImgNumber = 0;
            galleryNavImgList[0].style.marginLeft =
                '-' + markNavImgNumber * 96 + 'px';
        }
        galleryImgShow.style.backgroundImage =
            galleryNavImgList[markNavImgNumber].style.backgroundImage;
        console.log('mark:' + markNavImgNumber);
    }

    function prevGalleryImg() {
        if (markNavImgNumber > 0) {
            markNavImgNumber--;
            galleryNavImgList[0].style.marginLeft =
                '-' + markNavImgNumber * 96 + 'px';
        } else if (markNavImgNumber == 0) {
            markNavImgNumber = galleryNavImgList.length - 1;
            galleryNavImgList[0].style.marginLeft =
                '-' + markNavImgNumber * 96 + 'px';
        }
        galleryImgShow.style.backgroundImage =
            galleryNavImgList[markNavImgNumber].style.backgroundImage;
        console.log('mark:' + markNavImgNumber);
    }

    for (let i = 0; i < galleryNavImgList.length; i++) {
        galleryNavImgList[i].addEventListener('click', () => {
            markNavImgNumber = i;
            galleryNavImgList[0].style.marginLeft =
                '-' + markNavImgNumber * 96 + 'px';
            galleryImgShow.style.backgroundImage =
                galleryNavImgList[markNavImgNumber].style.backgroundImage;
        });
    }
} catch (e) {
    console.log('dont have gallery imgs');
}

// close btn

function closeParentBtn(e) {
    e.parentNode.style.animation = 'slideOutToTop  linear 1s';
    setTimeout(() => {
        e.parentNode.style.display = 'none';
    }, 1000);
}

function closeParentOfParenBtn(e) {
    let grand = e.parentNode.parentNode;
    console.log(grand);
    grand.style.animation = 'slideOutToLeft  linear 1s';
    setTimeout(() => {
        grand.style.display = 'none';
    }, 1000);
}

// show next sibling element

let isDiaplay = false;
function showNextSiblingElement(e) {
    if (!isDiaplay) {
        isDiaplay = true;
        e.nextElementSibling.style.display = 'block';
    } else {
        isDiaplay = false;
        e.nextElementSibling.style.display = 'none';
    }
}
// header sticky
let posScrollY = 0;
let isDisplayHeader;
window.addEventListener('scroll', () => {
    // console.log(window.scrollbars)
    // if (window.scrollY > 20) {
    //     document.querySelector('.header-logo').style.display = 'none'
    // } else {
    //     document.querySelector('.header-logo').style.display = 'block'
    // }
    // if (posScrollY < window.scrollY) {
    //     posScrollY = window.scrollY;
    //     if (!isDisplayHeader) {
    //         document.querySelector('.sticky').style.animation = 'slideOutToTop  linear 0.4s';
    //         document.querySelector('.sticky').style.boxShadow = 'none'
    //         setTimeout(() => {
    //             document.querySelector('.sticky').style.transform = 'translateY(-100%)';
    //         }, 400);
    //         isDisplayHeader = true;
    //     }
    //     console.log('scrol down');
    // } else if (posScrollY > window.scrollY) {
    //     posScrollY = window.scrollY;
    //     if (isDisplayHeader) {
    //         document.querySelector('.sticky').style.animation =
    //             ' slideInFromTop  linear 0.4s';
    //         setTimeout(() => {
    //             document.querySelector('.sticky').style.transform = 'translateY(0)';
    //             document.querySelector('.sticky').style.boxShadow = '0 2px 10px #555'
    //         }, 400);
    //         isDisplayHeader = false;
    //     }
    //     console.log('scrol up');
    // }
    // if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    //     console.log('Bottom of page');
    // }
});

window.addEventListener('load', () => {
    ///footer

    //set size content for flickr-feed

    let flickrFeddList = document.querySelectorAll('.flickr-feed-item');
    let projectsClientsItemList = document.querySelectorAll(
        '.projects-clients-slide-item'
    );
    // console.log(flickrFeddList);
    for (let i = 0; i < flickrFeddList.length; i++) {
        flickrFeddList[i].style.width = 'calc((100% - 30px) /3)';
        flickrFeddList[i].style.height = flickrFeddList[i].clientWidth + 'px';
        flickrFeddList[i].style.marginRight = '10px';
        flickrFeddList[i].style.marginBottom = '10px';
    }
    for (let i = 0; i < projectsClientsItemList.length; i++) {
        projectsClientsItemList[i].style.width = 'calc((100% - 30px) /3)';
        projectsClientsItemList[i].style.height =
            projectsClientsItemList[i].clientWidth + 'px';
        projectsClientsItemList[i].style.marginRight = '10px';
        projectsClientsItemList[i].style.marginBottom = '10px';
    }

    //positon for slider of header
    var wdWidth = window.innerWidth;
    if (wdWidth <= 1200) {
        document.querySelector('header .slider').style.marginTop =
            document.querySelector('header .header-bottom').clientHeight + 'px';

        //related product: max 4 product
        // let relatedProductList = document.querySelectorAll('.related-products-content > *')
        // let relatedProductParentNode = document.querySelector('.related-products-content')
        // if (relatedProductList.length > 4) {
        //     relatedProductParentNode.removeChild(relatedProductParentNode.firstElementChild)
        //     relatedProductParentNode.removeChild(relatedProductParentNode.firstElementChild)
        //     for (let i = 0; i < relatedProductList.length; i++) {
        //         relatedProductList[i].style.width = (100 / relatedProductList.length ) * 100 + '%';
        //     }
        // }
    } else {
        document.querySelector('header .slider').style.marginTop = '0'
    }

});

window.addEventListener('resize', () => {
    ///footer

    //set size content for flickr-feed

    let flickrFeddList = document.querySelectorAll('.flickr-feed-item');
    let projectsClientsItemList = document.querySelectorAll(
        '.projects-clients-slide-item'
    );
    // console.log(flickrFeddList);
    for (let i = 0; i < flickrFeddList.length; i++) {
        flickrFeddList[i].style.width = 'calc((100% - 30px) /3)';
        flickrFeddList[i].style.height = flickrFeddList[i].clientWidth + 'px';
        flickrFeddList[i].style.marginRight = '10px';
        flickrFeddList[i].style.marginBottom = '10px';
    }
    for (let i = 0; i < projectsClientsItemList.length; i++) {
        projectsClientsItemList[i].style.width = 'calc((100% - 30px) /3)';
        projectsClientsItemList[i].style.height =
            projectsClientsItemList[i].clientWidth + 'px';
        projectsClientsItemList[i].style.marginRight = '10px';
        projectsClientsItemList[i].style.marginBottom = '10px';
    }

    //positon for slider of header
    var wdWidth = window.innerWidth;
    if (wdWidth <= 1200) {
        document.querySelector('header .slider').style.marginTop =
            document.querySelector('header .header-bottom').clientHeight + 'px';
        
        //related product: max 4 product
        // let relatedProductList = document.querySelectorAll('.related-products-content > *')
        // let relatedProductParentNode = document.querySelector('.related-products-content')
        // if (relatedProductList.length > 4) {
        //     relatedProductParentNode.removeChild(relatedProductParentNode.firstElementChild)
        //     relatedProductParentNode.removeChild(relatedProductParentNode.firstElementChild)
        //     for (let i = 0; i < relatedProductList.length; i++) {
        //         relatedProductList[i].style.width = (100 / relatedProductList.length ) * 100 + '%';
        //     }
        // }
    } else {
        document.querySelector('header .slider').style.marginTop = '0'
    }
});
