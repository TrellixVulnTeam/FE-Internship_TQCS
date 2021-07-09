var width = window.innerWidth;
var count = 1;
function nextSlide() {
    if (count == 1) {
        count = 2;
        document.getElementsByClassName('slides')[0].style.marginLeft =
            '-100vw';
    } else if (count == 2) {
        count = 3;
        document.getElementsByClassName('slides')[0].style.marginLeft =
            '-200vw';
    } else if ((count = 3)) {
        count = 1;
        document.getElementsByClassName('slides')[0].style.marginLeft = '0';
    }
}

function preSlide() {
    if (count == 1) {
        count = 3;
        document.getElementsByClassName('slides')[0].style.marginLeft =
            '-200vw';
    } else if (count == 2) {
        count = 1;
        document.getElementsByClassName('slides')[0].style.marginLeft = '0';
    } else if ((count = 3)) {
        count = 2;
        document.getElementsByClassName('slides')[0].style.marginLeft =
            '-100vw';
    }
}
var count2 = 1;
function nextPage() {
    if (count2 == 1) {
        count2 = 2;
        document.getElementById('classify-pages').style.marginLeft = '-100%';
    } else if (count2 == 2) {
        count2 = 1;
        document.getElementById('classify-pages').style.marginLeft = '0';
    }
}

function prePage() {
    if (count2 == 1) {
        count2 = 2;
        document.getElementById('classify-pages').style.marginLeft = '-100%';
    } else if (count2 == 2) {
        count2 = 1;
        document.getElementById('classify-pages').style.marginLeft = '0';
    }
}

// start price range

var inputLeft = document.getElementById('input-left');
var inputRight = document.getElementById('input-right');
var displayLeft = document.getElementById('display-left');
var displayRight = document.getElementById('display-right');

var thumbLeft = document.querySelector('.range-slider > .thumb.left');
var thumbRight = document.querySelector('.range-slider > .thumb.right');
var range = document.querySelector('.range-slider > .range');

var maxPrice = 2000;

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(
        parseInt(_this.value),
        parseInt(inputRight.value) - 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;
    var price = ((_this.value - min) / (max - min)) * 1000;
    thumbLeft.style.left = percent + '%';
    range.style.left = percent + '%';
    displayLeft.innerHTML = '$' + Math.round((price / 1000) * maxPrice);
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(
        parseInt(_this.value),
        parseInt(inputLeft.value) + 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;
    var price = ((_this.value - min) / (max - min)) * 1000;
    thumbRight.style.right = 100 - percent + '%';
    range.style.right = 100 - percent + '%';
    displayRight.innerHTML = '$' + Math.round((price / 1000) * maxPrice);
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

inputLeft.addEventListener('mouseover', function () {
    thumbLeft.classList.add('hover');
});
inputLeft.addEventListener('mouseout', function () {
    thumbLeft.classList.remove('hover');
});
inputLeft.addEventListener('mousedown', function () {
    thumbLeft.classList.add('active');
});
inputLeft.addEventListener('mouseup', function () {
    thumbLeft.classList.remove('active');
});

inputRight.addEventListener('mouseover', function () {
    thumbRight.classList.add('hover');
});
inputRight.addEventListener('mouseout', function () {
    thumbRight.classList.remove('hover');
});
inputRight.addEventListener('mousedown', function () {
    thumbRight.classList.add('active');
});
inputRight.addEventListener('mouseup', function () {
    thumbRight.classList.remove('active');
});

//button function

let isDisplay = false;
document.querySelector('.content2 .content2-selection').onclick = function () {
    if (!isDisplay2) {
        document.querySelector('.content2 .content2-list').style.display =
            'block';
        isDisplay2 = true;
    } else {
        document.querySelector('.content2 .content2-list').style.display =
            'none';
        isDisplay2 = false;
    }
};

let isDisplay2 = false;
document.querySelector('.content3 .content2-selection').onclick = function () {
    if (!isDisplay2) {
        document.querySelector('.content3 .content2-list').style.display =
            'block';
        isDisplay2 = true;
    } else {
        document.querySelector('.content3 .content2-list').style.display =
            'none';
        isDisplay2 = false;
    }
};

let isDisplaySorting = false;
let elementSorting = document.querySelector(
    '.products-nav-sorting .products-nav-sorting-selection'
);
let elementSortingOptions = document.querySelector(
    '.products-nav-sorting .products-nav-sorting-options'
);
elementSorting.addEventListener('click', () => {
    if (!isDisplaySorting) {
        isDisplaySorting = true;
        elementSortingOptions.style.display = 'block';
    } else {
        isDisplaySorting = false;
        elementSortingOptions.style.display = 'none';
    }
});

//  DESC / ASC button
let descAscmode = 'DESC'
let descAscBtn = document.querySelector('.products-nav-desc-asc .products-nav-desc-asc-range')
let descAscBtnTrack  = document.querySelector('.products-nav-desc-asc-range .products-nav-desc-asc-range-track')
descAscBtn.addEventListener('click', () => {
    if (descAscmode == 'DESC') {
        descAscmode = 'ASC'
        descAscBtnTrack.style.left = 'unset'
        descAscBtnTrack.style.right = '4px'
    } else {
        descAscmode = 'DESC'
        descAscBtnTrack.style.left = '4px'
        descAscBtnTrack.style.right = 'unset'
    }
})

//products-nav-show-page
let isDisplay3 = false
let productNaveShowPageSelection = document.querySelector('.products-nav-show-page .products-nav-show-page-selection')
let productNaveShowPageOptions = document.querySelector('.products-nav-show-page .products-nav-show-page-options')
productNaveShowPageSelection.addEventListener('click', () => {
    if (!isDisplay3) {
        isDisplay3 = true
        productNaveShowPageOptions.style.display = 'block'
    } else {
        isDisplay3 = false
        productNaveShowPageOptions.style.display = 'none'
    }
})