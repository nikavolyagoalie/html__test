$(function () {
    let allNavs = document.querySelectorAll('.navbar-nav .nav-item')
    console.log(allNavs)

    for (let nav of allNavs) {
        nav.addEventListener('click', () => {
            for (let nav of allNavs) {
                nav.classList.remove('active')
            }
            nav.classList.add('active')
        })
    }

    let mobToggler = document.querySelector('.navbar-toggler');
    let mobTogglerModal = document.querySelector('nav .mobile__items .navbar-toggler');
    let mobMenu = document.querySelector('nav .mobile__items');
    let mobTogglerItem = document.querySelectorAll('nav .mobile__items .nav-item');

    mobToggler.addEventListener('click', (e) => {
        console.log('dgdfg')
        if (!mobMenu.classList.contains('show')) {
            mobMenu.classList.add('show')
            $('.mobile_bg').addClass('visible')
        }
    })

    mobTogglerModal.addEventListener('click', (e) => {
        console.log('derertrt')
        if (mobMenu.classList.contains('show')) {
            mobMenu.classList.remove('show')
            $('.mobile_bg').removeClass('visible')
        }
    })

    for (let item of mobTogglerItem) {
        item.addEventListener('click', () => {
            mobMenu.classList.remove('show')
            $('.mobile_bg').removeClass('visible')
        })
    }

    $('.job__card-btn').on('mouseover', function () {
        $(this).parent().addClass('job__card-hover');
    }).on('mouseout', function () {
        $(this).parent().removeClass('job__card-hover');
    })
})
