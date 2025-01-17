$(function () {
    $('.copy-btn').click(function () {
        var text = $('#shortenedUrl').val();
        navigator.clipboard.writeText(text).then(() => alert(`${text} copied to clipboard`)).catch((err) => alert(err));

    });
});