let lastScrollTop = 0;
let rotation = 0;

window.addEventListener('scroll', function () {
    //   let st = window.pageYOffset || document.documentElement.scrollTop;

    //   if (st > lastScrollTop){
    //     // Scrolling down
    //     rotation += 1; // Adjust rotation speed
    //   } else {
    //     // Scrolling up
    //     rotation -= 1; // Adjust rotation speed
    //   }


    //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

 
    const rect = document.querySelector("body").getBoundingClientRect();
    document.getElementById('steering-wheel').style.transform = `rotate(${360-(rect.top / 5)}deg)`;
    // console.log('offset' , window.pageYOffset );
    
});



// const progressbar = document.querySelector(".progressbar")

// for (let i = 0; i <= 80; i++) {
//     if (i % 5 === 0) {
//         progressbar.innerHTML += "<span class='bigLine'></span>";
//     } else {
//         progressbar.innerHTML += "<span class='line'></span>";
//     }
// }

const wonderArr = [
    {
        name: 'Velocity',
        description: ' Speed meets precision, with Velocity leading the charge on every road.',
        imgSrc: 'cruiser.png'
    },
    {
        name: 'Zephyr',
        description: 'Like a gentle breeze, Zephyr offers a smooth and effortless ride.',
        imgSrc: 'vigo.png'
    },
    {
        name: 'Obsidian',
        description: 'Dark and mysterious, Obsidian exudes strength and sophistication.',
        imgSrc: 'jeep.png'
    },
    {
        name: 'Fusion',
        description: 'Where elements combine, Fusion delivers a seamless and powerful experience.',
        imgSrc: 'SVG.png'
    },
    {
        name: 'Mirage',
        description: ' An illusion of perfection, Mirage captivates with its sleek and elusive design.',
        imgSrc: 'corolla.png'
    },
];

let currentImgIndex = 0;

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const sliderPrevImage = document.querySelector(".sliderPrevImage");
const sliderComingImage = document.querySelector(".sliderComingImage");
const sliderImage = document.querySelector(".sliderImage");
const sliderPrevImageCont = document.querySelector(".sliderPrevImageCont");
const sliderComingImageCont = document.querySelector(".sliderComingImageCont");
const sliderImageCont = document.querySelector(".sliderImage");
const infoHd = document.querySelector(".infoHd");
const infopara = document.querySelector(".infopara");


const SlideImage = (direction) => {
    const currentImage = wonderArr[currentImgIndex];
    if (direction === 'next') {
        sliderComingImageCont.style.transition = '0.3s';
        sliderComingImageCont.style.right = 0;
    } else {
        sliderPrevImageCont.style.transition = '0.3s';
        sliderPrevImageCont.style.left = 0;
    }

    setTimeout(() => {
        if (currentImgIndex === 0) {
            sliderPrevImage.src = `./images/${wonderArr[wonderArr.length - 1].imgSrc}`;
        } else {
            sliderPrevImage.src = `./images/${wonderArr[currentImgIndex - 1].imgSrc}`;
        }

        if (currentImgIndex === wonderArr.length - 1) {
            sliderComingImage.src = `./images/${wonderArr[0].imgSrc}`;
        } else {
            sliderComingImage.src = `./images/${wonderArr[currentImgIndex + 1].imgSrc}`;
        }

        sliderImage.src = `./images/${currentImage.imgSrc}`;
        infoHd.textContent = currentImage.name;
        infopara.textContent = currentImage.description;
        sliderComingImageCont.style.transition = 'unset';
        sliderComingImageCont.style.right = '-100%';
        sliderPrevImageCont.style.transition = 'unset';
        sliderPrevImageCont.style.left = '-100%';
    }, 300);

};

prevBtn.addEventListener('click', function () {
    if (currentImgIndex > 0) {
        currentImgIndex--;
    } else {
        currentImgIndex = wonderArr.length - 1;
    }
    SlideImage("prev");
});
nextBtn.addEventListener('click', function () {
    if (currentImgIndex < wonderArr.length - 1) {
        currentImgIndex++;
    } else {
        currentImgIndex = 0;
    }
    SlideImage("next");
});