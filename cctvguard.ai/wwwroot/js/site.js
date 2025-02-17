// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        document.querySelectorAll('.team-member').forEach(m => m.classList.remove('selected'));
        member.classList.add('selected');
    });
});



