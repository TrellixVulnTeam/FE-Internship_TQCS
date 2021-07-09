//categories list 1
let listSelection = document.querySelectorAll('.categories-selection')
let listMenuStatus = []

for (let i = 0; i < listSelection.length; i++){
    listMenuStatus.push(false)
}
for (let i = 0; i < listSelection.length; i++){
    listSelection[i].addEventListener('click', () => {
        try {
            if (listMenuStatus[i]) {
                listSelection[i].nextElementSibling.style.display = 'none'
                listSelection[i].querySelector('i').classList.replace('fa-chevron-down','fa-chevron-right')
                listMenuStatus[i] = false
            } else {
                listSelection[i].nextElementSibling.style.display = 'block'
                listSelection[i].querySelector('i').classList.replace('fa-chevron-right','fa-chevron-down')
                listMenuStatus[i] = true
            }
        }catch {
        console.log('elemnt don\'t have menu')
    }
    })
}

// gallery product nav img
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
    galleryImgShow.style.backgroundImage = galleryNavImgList[markNavImgNumber].style.backgroundImage;
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
    galleryImgShow.style.backgroundImage = galleryNavImgList[markNavImgNumber].style.backgroundImage;    
    console.log('mark:' + markNavImgNumber);
}

for (let i = 0; i < galleryNavImgList.length; i++){
    galleryNavImgList[i].addEventListener('click', () => {
        markNavImgNumber = i;
        galleryNavImgList[0].style.marginLeft =
            '-' + markNavImgNumber * 96 + 'px';
        galleryImgShow.style.backgroundImage = galleryNavImgList[markNavImgNumber].style.backgroundImage;    
        
    })
}