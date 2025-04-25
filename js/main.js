const sectionImg = document.querySelectorAll('.section-img');

sectionImg.forEach(img => {
    const p = img.querySelector('.section-img-p');
    img.addEventListener('mouseenter', () => {
        img.classList.add('active-more-info');
        p.style.animation = 'aparecer 0.3s ease-in-out forwards';
    });
    img.addEventListener('mouseleave', () => {
        img.classList.remove('active-more-info');
        p.style.animation = 'desaparecer 0.3s ease-in-out forwards';
    });
})

let allbtn = document.querySelectorAll(".btn-nav");
let allitem = document.querySelectorAll(".text-art");

allbtn.forEach((btn,index) => {
    btn.addEventListener("click",() => {
        allitem.forEach(item => {
            item.classList.remove("active");
        });
        allbtn.forEach(item => {
            item.classList.remove("active");
        })

        btn.classList.add("active");
        allitem[index].classList.add("active");
    });
});
