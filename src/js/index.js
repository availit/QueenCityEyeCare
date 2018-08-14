(function($){
  $(function(){ // on doc ready
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          coverTrigger: false // Displays dropdown below the button
        });
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    // FORM INPUTS INIT
    $('input#input_text, textarea#message_input').characterCounter();
    $('select').formSelect();
    // DATE OF BIRTH SELECTOR
    $('#birthdate').datepicker({
    defaultDate: new Date(1980,01,0),
    maxDate: new Date(2002,01,01),
    minDate: new Date(1919,01,01),
    yearRange: [1920, 2001],
    showMonthAfterYear: true,
    autoClose: true,
    });
    // Appointment Date Selector
    $('#appointmentDate').datepicker({
    disableDayFn: function (date) {
      // if it's a sunday disable it
      if (date.getDay() == 0) {
        return true
      } else {
        return false
      }
    },
    defaultDate: new Date(),
    yearRange: [2018, 2019],
    showMonthAfterYear: true,
    autoClose: true,
    });
    // Appointment Time SELECTOR
    $('.timepicker').timepicker({
      autoClose: true,
    });

  }); // end of document ready

})(jQuery); // end of jQuery name space
