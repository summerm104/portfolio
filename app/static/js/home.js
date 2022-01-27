// NAVBAR STYLING
$(document).ready(function() {
    const nav = $('nav');
    nav.removeClass(['bg-light', 'shadow']);

    $(window).scroll(function() {
        if (window.pageYOffset > 100) {
            nav.addClass(['bg-light', 'shadow']);
        }
        else {
            nav.removeClass(['bg-light', 'shadow']);
        }
    })
});

// HIGHLIGHT NAVBAR ITEM WHEN SCROLLING
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('#nav-list > li > a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    });
})

// SORT POSTS BY DATE
$(document).ready(function() {
    const selectElement = $("#sort-posts");
    selectElement.change(() => {
        window.location.href = `/home-sort-posts/${selectElement.val()}` + `#post-section-title`;
    })
});