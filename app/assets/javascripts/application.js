// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function onlyOnce() {
  var button = $(event.target);
  button.prop("disabled", "true");
  button.closest("form").submit();
}

function hideDeletedElement() {
  var container = $(event.target).closest(".association.container");
  container.hide();
  container.find(".destroy").prop("checked", "true");
}

function hideAddElement() {
  var lastLink = $('#last-button');
  lastLink.closest(".association").hide();
}

function showAddElement() {
  lastLink = $('#last-button');
  lastLink.closest(".association").show() ;
}

function smoothScroll() {
  $('#nav a').on("click", function(){
    var navId = $(this).attr("href");
    $('body').animate({scrollTop: $(navId).offset().top}, 'slow');
    return false;
  });
}

$(smoothScroll);

function showCal() {
$('.datetimepicker').datetimepicker();
}
// jQuery('.datetimepicker3').datetimepicker({
//   format:'d.m.Y H:i',
//   inline:true,
//   lang:'en'
// });
