
var thumnailSpacing = 15;
var thumbnails = $('.thumbnail');
var debugReminder = $('.debug-reminder');
var thumbnailImages = $('.thumbnail-image');

function positionThumbnails() {
    debugReminder.css('display','none');
    var containerWidth = $('.photos').width();
    var containerRow = null;
    var containerColumn = null;
    var thumbnailWidth = thumbnailImages[0].outerWidth() + window.thumnailSpacing;
    var thumbnailHeight = thumbnailImages[0].outerHeight() + window.thumnailSpacing;
    var maximumColumns = Math.floor(containerWidth / thumbnailWidth);
}


$(document).ready(function () {

    $('.sorting').css('margin-bottom', window.thumnailSpacing + 'px');
    thumbnails.addClass('show');

    var sortingLinks = $('.sort-link');
    sortingLinks.on('click', function () {
       $(this).toggleClass('selected');
        $(this).preventDefault();
    });

    $(window).on('resize', function () {
        positionThumbnails();
    });

});