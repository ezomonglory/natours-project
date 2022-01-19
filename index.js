
var fields = document.querySelectorAll('.navigation-link')
var fieldval = Array.prototype.slice.call(fields);

fieldval.forEach(function (curr, index, array) {
    fieldval[index].addEventListener('click', function () {
        // document.querySelector('.navigation-background').style.transform = 'scale(.1)'
        document.querySelector('.navigation-checkbox').checked = false;
    });
});