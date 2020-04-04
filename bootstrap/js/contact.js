//Add an event listener for the form submission to create a new user

const form = document.querySelector("form");


const formEvent = form.addEventListener('submit', event => {
   event.preventDefault(); 
   const username = document.querySelector("#username").value;
   const email = document.querySelector("#email").value;
   const message = document.querySelector("#message").value;
 

    //get all checked elements 
    let checkedElement = document.querySelectorAll('.input-contact:checked');
    let checkedElementValue = [];
    //loop through all checked element
    checkedElement.forEach(function(element){
      checkedElementValue.push(element.value);
    });
    if(checkedElementValue.length === 0) {
      console.log('No item checked')
    }
    else { 
      checkedElementValue
    }

  


   const user = { username, email,  checkedElementValue,message };
  //  const user2 = {checkedElementValue};
  

   createUser(user);
});




const createUser = (user) => {
  console.log("sngrgusus",user);
 // console.log("hafbauja",JSON.stringify(user2));

    let postObject = {...user}
axios({
    method: 'post',
    url: ' https://gg-web-api.herokuapp.com/users/',
    data: {
      "username": `${postObject.username}`,
      "email": `${postObject.email}`,
      "message": `${postObject.message}`,
     // "checkedElementValue": `${postObject.}`
    }
  });

}



//flash message when a user post data to the endpoint 
(function($) {
  $.fn.flash_message = function(options) {

    options = $.extend({
      text: 'Done',
      time: 3000,
      how: 'before',
      class_name: ''
    }, options);

    return $(this).each(function() {
      if ($(this).parent().find('.flash_message').get(0))
        return;

      var message = $('<span />', {
        'class': 'flash_message ' + options.class_name,
        text: options.text
      }).hide().fadeIn('fast');

      $(this)[options.how](message);

      message.delay(options.time).fadeOut('normal', function() {
        $(this).remove();
      });

    });
  };
})(jQuery);

$('.button').click(function() {

  $('#status-area').flash_message({
    text: 'Thank you for getting in touch!, Please click on clear form button',
    how: 'append'
  });
});




