


// Redirect to pages
document.addEventListener('DOMContentLoaded', function() {
    if document.getElementById('season-button').addEventListener('click', function() {
        window.location.href = 'seasonemployee.html';
    });
    if document.getElementById('service-button').addEventListener('click', function() {
        window.location.href = 'serviceemployee.html';
    });

    if document.getElementById('sales-button').addEventListener('click', function() {
        window.location.href = 'salesemployee.html';
    });
});
