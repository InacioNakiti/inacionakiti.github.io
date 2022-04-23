"use strict";

const accepted = () => {
    document.querySelectorAll("requests_inner_container").style.display = 'none';
    document.querySelectorAll("accepted_msg").style.display = 'block';
}
const acceptedTwo = () => {
    document.querySelector(".requests_inner_container2").style.display = 'none';
    document.querySelector(".accepted_msg2").style.display = 'block';
}
const acceptedThree = () => {
    document.querySelector(".requests_inner_container3").style.display = 'none';
    document.querySelector(".accepted_msg3").style.display = 'block';
}

// ::::::::::::::::::::::: DECLINED REQUESTS :::::::::::::::::::::::::::: // 
const removed = () => {
    document.querySelectorAll("requests_inner_container").style.display = 'none';
    document.querySelectorAll("removed_msg").style.display = 'block';
}
const removedTwo = () => {
    document.querySelector(".requests_inner_container2").style.display = 'none';
    document.querySelector(".removed_msg2").style.display = 'block';
}
const removedThree = () => {
    document.querySelector(".requests_inner_container3").style.display = 'none';
    document.querySelector(".removed_msg3").style.display = 'block';
}

// END ::DR

const timeOut = () => {
setTimeout(() => {
  
    document.querySelector(".test-2 .hide").style.display = 'none';
    // document.querySelector(".test-2 .hide").style.display = 'none';

  }, 2500); 
}
const timeOutTwo = () => {
setTimeout(() => {
  
    document.querySelector(".hide2").style.display = 'none';

  }, 2500); 
}
const timeOutThree = () => {
setTimeout(() => {
  
    document.querySelector(".hide3").style.display = 'none';

  }, 2500); 
}


const menuItems = document.querySelectorAll('#menu_item');

// remove active class from all menu items 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.classList.contains('notification-popup')) {
            document.querySelector('.inac').style.display = 'block';
            document.querySelector('.alert').style.display = 'none';
        } else {
            document.querySelector('.inac').style.display = 'none';
        }
    })
});


const messages = document.querySelector('.msgs');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
    
            if(item.classList.contains('msg-notification')) {
            //    messages.style.border = '2px solid var(--primary)';
               document.querySelector('.msg-alert').style.display = 'none';
            
               if(document.querySelector('.messages-box').style.display == 'flex') {
                document.querySelector('.messages-box').style.display = 'none';
                document.querySelector('.messages-container').style.backgroundColor = 'var(--primary)';
                document.querySelector('.messages-container').style.color = 'white';
                } else {
                    document.querySelector('.messages-box').style.display = 'flex';
                    document.querySelector('.messages-container').style.backgroundColor = 'white';
                    document.querySelector('.messages-container').style.color = 'var(--gray-dark)';
                }

            //    setTimeout(() => {
            //     messages.style.border = 'none';
            //    }, 2000 );
            } 
        })
    });

const loadMore = document.querySelector('#btn-load');

loadMore.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#load_more').style.display = 'block';
});







// Open and close hambrger menu container on icon click 

function  myMenuFunction() {
    const hamburgerMenu = document.querySelector('.mobile-menu');
    const xIcon = document.querySelector('.x-icon');
    const barIcon = document.querySelector('.bar-icon');

    if(hamburgerMenu.style.display === 'block') {
        hamburgerMenu.style.display = 'none';
        barIcon.style.display = 'block';
        barIcon.style.padding = '0 0 0 12px';
        xIcon.style.display = 'none';

    } else {
        hamburgerMenu.style.display = 'block';
        barIcon.style.display = 'none';
        xIcon.style.display = 'block';
    }
}

function chat() {
    const messageChat = document.querySelector('.messages-container');
    const msgs = document.querySelector('.messages-box');

        messageChat.onclick = function() {

        if(msgs.style.display == 'flex') {
            msgs.style.display = 'none';
            messageChat.style.backgroundColor = 'var(--primary)';
            messageChat.style.color = 'white';
        } else {
            msgs.style.display = 'flex';
            messageChat.style.backgroundColor = 'white';
            messageChat.style.color = 'var(--gray-dark)';
        }
    }
}

// Status preview on click 
function status() {
    const statusImg = document.querySelector('.status-img'); 
    
    statusImg.style.marginTop = '0';

    setTimeout(() => {
        statusImg.style.marginTop = '-900px';
       }, 3000 );
}
function statusTwo() {
    const statusImg = document.querySelector('.status-img2'); 
    
    statusImg.style.marginTop = '0';

    setTimeout(() => {
        statusImg.style.marginTop = '-900px';
       }, 3000 );
}
function statusThree() {
    const statusImg = document.querySelector('.status-img3'); 
    
    statusImg.style.marginTop = '0';

    setTimeout(() => {
        statusImg.style.marginTop = '-900px';
       }, 3000 );
}
function statusFour() {
    const statusImg = document.querySelector('.status-img4'); 
    
    statusImg.style.marginTop = '0';

    setTimeout(() => {
        statusImg.style.marginTop = '-900px';
       }, 3000 );
}
