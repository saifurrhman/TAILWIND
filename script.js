const navdialog = document.getElementById('nav-dialog');
function handleMenu() {
    navdialog.classList.toggle('hidden')

}
const initialTranslateLTR=-48*4;
const initialTranslateRTL=-36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const IntersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler)
        }
        else (
            document.removeEventListener('scroll', scrollHandler)
        )
    }

    const intersectionObserve = new IntersectionObserver(IntersectionCallback)
    intersectionObserve.observe(element);
    function scrollHandler(){
        console.log("scroling")
        const translateX=(window.innerHeight-element.getBoundingClientRect().top )*speed;
        let totaltranslate=0;
        if(isLTR){
            totaltranslate=translateX+initialTranslateLTR;
        }else{
        totaltranslate=-(translateX+initialTranslateRTL);
        }
        element.style.transform=`translateX(${totaltranslate}px)`;
    }
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);
const dtElements = document.querySelectorAll('dt');
    dtElements.forEach(element=>{
        element.addEventListener('click',()=>{
            const ddId = element.getAttribute('aria-controls');
            const ddElement = document.getElementById(ddId);
            const ddArrowIcon = element.querySelectorAll('i')[0];

            ddElement.classList.toggle('hidden');
            ddArrowIcon.classList.toggle('-rotate-180');
        })
    })
