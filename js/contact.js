document.addEventListener('DOMContentLoaded', function () {
    var textareas = document.querySelectorAll('textarea');

    textareas.forEach(function (textarea) {
        textarea.addEventListener('input', function () {
            // Check if the textarea has content and apply the appropriate background color
            textarea.style.backgroundColor = textarea.value.trim() !== '' ? 'white' : '#04364a';
        });
    });
});