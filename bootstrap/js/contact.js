//Add an event listener for the form submission to create a new user

const form = document.querySelector("form");


const formEvent = form.addEventListener('submit', event => {
   event.preventDefault(); 
   const username = document.getElementById("username").value.split(" ");
   let last_name;
   if (username.length === 1) {
     last_name = ""
   } else {
     last_name = username[1]
   }

   const first_name = username[0];
   const email = document.querySelector("#email").value;
   const message = document.querySelector("#message").value;
   const myFarm = document.querySelector("#myFarm").checked;
   const workWithFarmers = document.querySelector("#workWithFarmers").checked;
   const governmentAgencies = document.querySelector("#governmentAgencies").checked;
   const unAgencies = document.querySelector("#unAgencies").checked;
   const physicalSurvey = document.querySelector("#physicalSurvey").checked;
   const other = document.querySelector("#other").checked;
 

   const user = {first_name, last_name, email, myFarm, workWithFarmers, governmentAgencies, unAgencies, physicalSurvey, other, message };

  

   createUser(user);
});




const createUser = (user) => {

    let postObject = {...user}

axios({
    method: 'post',
    url: 'http://35.208.17.212/users/',
    data: {
      "first_name": `${postObject.first_name}`,
      "last_name": `${postObject.last_name}`,
      "email": `${postObject.email}`,
      "message": `${postObject.message}`,
      "myFarm": `${postObject.myFarm}`,
      "workWithFarmers": `${postObject.workWithFarmers}`,
      "governmentAgencies": `${postObject.governmentAgencies}`,
      "unAgencies": `${postObject.unAgencies}`,
      "physicalSurvey": `${postObject.physicalSurvey}`,
      "other": `${postObject.other}`
    }
  })
  .then(function (response) {
      $('#status-area').flash_message({
        text: 'Thank you for getting in touch!, Please click on clear form button',
        how: 'append'
      });
     
    
  })
  .catch(function (error) {
      $('#status-area').flash_message({
        text: "There seems to be an error on our side. \
        Kindly resend your information at this time tomorrow if we do not get in touch by then",
        how: 'append'
      });
      
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
