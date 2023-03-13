
//xử lý hiệu ứng khi click nút by ticket
let byTicketElements = document.getElementsByClassName('tour-location-byTickets');
let formByTicket = document.querySelector('.tour-ticket')
let coverTourTicket = document.querySelector('.tour-ticket-wrap .tour-ticket-cover')
console.log(coverTourTicket)
for (var byTicketElement of byTicketElements) {
    byTicketElement.addEventListener('click', function () {
        formByTicket.className = 'tour-ticket-show';
        coverTourTicket.classList.add('tour-ticket-cover-show');
    })
}

let iconCloseForm = document.querySelector('.ti-close');
let textCloseForm = document.querySelector('.ticket-footer-close');
iconCloseForm.onclick = myFunction;
textCloseForm.onclick = myFunction;
function myFunction() {
    formByTicket.className = 'tour-ticket';
    coverTourTicket.classList.remove('tour-ticket-cover-show');
}

//navbar-moble
let menuNavbarMobile = document.querySelector('.nav-tablet-mobile .menu-btn');
let closebtnSubnav = document.querySelector('.nav-tablet-mobile .menu-btn div');
let numberToggle = 1;
menuNavbarMobile.addEventListener('click', function () {
    if (numberToggle === 1) {
        document.querySelector('.nav-tablet-mobile .subnav-tablet').classList.add('subnav-tablet-show');
        numberToggle = 0;
    } else {
        document.querySelector('.nav-tablet-mobile .subnav-tablet').classList.remove('subnav-tablet-show');
        numberToggle = 1
    }
})

let menuItems = document.querySelectorAll('.nav-tablet-mobile .subnav-tablet a');
for (let i = 0; i < menuItems.length; ++i) {
    let menuItem = menuItems[i];
    menuItem.onclick = function () {
        document.querySelector('.nav-tablet-mobile .subnav-tablet').classList.remove('subnav-tablet-show');
        numberToggle = 1
    }
}
