$(document).ready(function() {
    $('#next1').click(function() {
        $('#step1').hide();
        $('#step2').show();
    });
    $('#prev1').click(function() {
        $('#step2').hide();
        $('#step1').show();
    });
    $('#next2').click(function() {
        $('#step2').hide();
        $('#step3').show();
    });
    $('#prev2').click(function() {
        $('#step3').hide();
        $('#step2').show();
    });
});