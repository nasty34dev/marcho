$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    // onStart: function (data) {
    //   $('.filter-price__form').text(data.from);
    //   $('.filter-price__to').text(data.to);
    // },
    onChange: function (data) {
      $('.filter-price__form').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })


});