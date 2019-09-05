// search.js

var service = $.url('?service');
var query = $.url('?query');
var nextUrl = $.url('?next');
if (nextUrl) {
    // $('#next-url').text('正带您去搜索结果！').append($('<a>').addClass('sub header').attr('href', nextUrl).text(`${service}：${query}`));
    window.location.replace(nextUrl);
};
