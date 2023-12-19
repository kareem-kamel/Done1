document.querySelector('.togglelist').addEventListener('click', function() {
    // Toggle the visibility of the nav-container div
    var navContainer = document.querySelector('.nav-container');
    navContainer.style.display = (navContainer.style.display === 'none' || navContainer.style.display === '') ? 'block' : 'none';
});