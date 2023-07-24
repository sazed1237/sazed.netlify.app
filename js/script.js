$(document).ready(function() {
    $.ajax({
        url: "https://example.com/api/data",
        method: "GET",
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.log("AJAX request failed: " + error);
        }
    });
});




// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })

    // stricky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


