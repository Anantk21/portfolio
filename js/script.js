var typed = new Typed((".skills"),{
    strings : ["Frontend developer","Ui designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});




function downloadCV() {
    // Provide the path to your CV file
    var cvUrl = 'https://drive.google.com/file/d/1TECT91iks78t_yDmBiGlPiCWv-p-34SF/view?usp=drive_link';

    // Create an invisible anchor element
    var anchor = document.createElement('a');
    anchor.style.display = 'none';

    // Set the download attribute and href for the anchor
    anchor.setAttribute('download', 'your_cv.pdf');
    anchor.setAttribute('href', cvUrl);

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
}


    document.getElementById('githubIcon').addEventListener('click', function() {
        window.open('https://github.com/Anantk21', '_blank');
    });
    
    document.getElementById('linkedinIcon').addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/anant-krishna-429a12222/', '_blank');
    });
    
    document.getElementById('twitterIcon').addEventListener('click', function() {
        window.open('https://twitter.com', '_blank');
    });
    


