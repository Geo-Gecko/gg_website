//Add an event listener for the form submission to create a new user

const form = document.querySelector("form");


const formEvent = form.addEventListener('submit', event => {
   event.preventDefault(); 
   const username = document.querySelector("#username").value;
   console.log("username: " + username);
   const email = document.querySelector("#email").value;
   const message = document.querySelector("#message").value;

   const user = { username, email, message };


   createUser(user);
});



const createUser = (user) => {
    console.log(user);
    let postObject = {...user}
axios({
    method: 'post',
    url: ' http://34.90.92.86:8887/users/',
    data: {
      "username": `${postObject.username}`,
      "email": `${postObject.email}`,
      "message": `${postObject.message}`
    }
  });

}

createUser();
// //getting the articles from an endpoint and passing it into the DOM

// const createList = (articles) => {
//     const li = document.createElement('li');
//     //add articles to the 'li'
//     li.textContent = `${articles.title}: ${articles.content}: ${articles.tag}`;
//     return li;

// };

// const appendToDOM = (articles) => {
//     const ul = document.querySelector('');
//     //iteratw over all articles 
//     articles.map(articles => {
//         ul.appendChild(createList(articles));
//     });
// };

//getting articles from an endpoint 
const getArticles = () => {
    axios.get('http://34.90.92.86:8887/articles/')
    .then(response => {
        const articles = response.data;
        console.log(`GET List articles`, articles);
        //append to DOM
        //appendToDOM(articles);
    })

    .catch(error => console.error(error));
};


getArticles();



