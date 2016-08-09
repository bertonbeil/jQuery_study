$(document).ready(function() {
    $('.imgs').click(checkForCode);

    function checkForCode () {
        var discount = Math.floor((Math.random() * 5) + 5),
            msg = '<p>Your discount ' + discount + '%</p>';

        $(this).append(msg);

        $('.imgs').each(function () {
            $(this).off('click');
        });
    }
    
});
