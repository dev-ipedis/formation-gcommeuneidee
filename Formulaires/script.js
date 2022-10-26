$(document).ready(function() {

    //----Validate Form on submit---------------------------------------------------------------------------------------------------------
    $("#signup-form").on("submit", function() {
      var validate = 0;
      $(".numeric").each(function() {
        validateNumber("#" + $(this).attr("id"));
      });

      // Validate all required fields
      $(".required-field").each(function() {
        var fieldValue = $(this).val();
        if (fieldValue == "") {
          validate++;
          //Error handling for screen readers
          $(this).parent().find(".error-message").show(); //Show error message
        } else {
          $(this).parent().find(".error-message").hide(); //Hide error mesage
        }
      });

      //----Validate Phone Number and Postal Code-----------------------------------------------------------------------------------------------------
      function validateNumber(element) {
        let value = $(element).val();
        var limit = element == "#p_num" ? 8 : 5; // Assign correct limit of length depending on field
        var reg = /^\d+$/; //Number regex
        if (!reg.test(value)) { // Check if value of field contains only numbers
          $(element).parent().find(".error-message").show(); //display error message
          validate++;
        } else if (value.length < limit) {
          $(element).parent().find(".error-message").show(); //display error message
          validate++;
        } else {
          $(element).parent().find(".error-message").hide(); //hide error message
        }
      }

      // Validate all required fields
      $(".checkbox").each(function() {
        if (!$(this).is(":checked")) {
          validate++;
          //Error handling for screen readers
          $(this).parent().find(".error-message").show(); //Show error message
        } else {
          $(this).parent().find(".error-message").hide(); //Hide error mesage
        }
      });

      if (validate != 0) {
        return false;
      }
      return false;
    });
  });