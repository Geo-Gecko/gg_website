//Add an event listener for the form submission to create a new user

const form = document.querySelector("form");


const formEvent = form.addEventListener('submit', event => {
   event.preventDefault(); 
   const username = document.querySelector("#username").value;
   const email = document.querySelector("#email").value;
   const message = document.querySelector("#message").value;
   const myFarm = document.querySelector("#myFarm").checked;
   const workWithFarmers = document.querySelector("#workWithFarmers").checked;
   const governmentAgencies = document.querySelector("#governmentAgencies").checked;
   const unAgencies = document.querySelector("#unAgencies").checked;
   const physicalSurvey = document.querySelector("#physicalSurvey").checked;
   const other = document.querySelector("#other").checked;
 

   const user = { username, email, myFarm, workWithFarmers, governmentAgencies, unAgencies, physicalSurvey, other, message };

  

   createUser(user);
});




const createUser = (user) => {

    let postObject = {...user}

axios({
    method: 'post',
    url: 'http://35.208.17.212:8000/users/',
    data: {
      "username": `${postObject.username}`,
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
        text: 'You have already sent in information. We shall be in touch with you shortly, Please click on clear form button',
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






