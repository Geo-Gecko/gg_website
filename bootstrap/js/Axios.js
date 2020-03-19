//Add an event listener for the form submission to create a new user

const form = document.querySelector('');


const formEvent = form.addEventListener('', event => {
   event.preventDefault(); 

   const name = document.querySelector('').Value;
   const email = document.querySelector('').Value;
   const message = document.querySelector('').Value;

   const user = { name, email, message };

   createUser(user);
});


const createUser = (user) => {
    axios.post('')
    .then(response => {
        const addedUser = response.data;
        console.log(`POST: user is added`, addedUser);

    })

    .catch(error => console.error(eror));
}

//getting the articles from an endpoint and passing it into the DOM

const createList = (articles) => {
    const li = document.createElement('li');
    //add articles to the 'li'
    li.textContent = `${articles.title}: ${articles.content}: ${articles.tag}`;
    return li;

};

const appendToDOM = (articles) => {
    const ul = document.querySelector('');
    //iteratw over all articles 
    articles.map(articles => {
        ul.appendChild(createList(articles));
    });
};

//getting articles from an endpoint 
const getArticles = () => {
    axios.get('')
    .then(response => {
        const articles = response.data.data;
        console.log(`GET List articles`, articles);
        //append to DOM
        appendToDOM(articles);
    })

    .catch(error => console.error(error));
};


getArticles();



