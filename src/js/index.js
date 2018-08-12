
(function($){
  $(function(){
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          coverTrigger: false // Displays dropdown below the button
        });
    $('input#input_text, textarea#message_input').characterCounter();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space
