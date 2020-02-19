# OnlineMarketplace


## Summary 
Online Marketplace leverages Best Buys API to pull in products to the main page where the user can then click into catagories, search for products, add items to cart, and delete items form their cart. The user can also view individual products. This application was built using a react front end that pulls from the API based on user actions and renders components using setState. 


## Demo
![Site](demo.gif) 

 
## Technologies Used
- React: Used to dynamically render components on browser and initiate functionality of the game based on user inputs.
- MongoDB: Used as a templating engine for ul HTML snippets that hold the task cards, and separate the generation of the        different HTML from the rest of the JavaScript for cleaner and more organozed code.
- Morgan: Request logger middleware for Node. js that simplifies the process of logging requests to the applicaiton application.
- Express.js - Used for application set up of middle ware for end point connection between the front end and backend.
- Node.js - Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.
- Git - Version control system to track changes to source code.
- GitHub - Hosts repository that can be deployed to GitHub Pages.
 
## Code Snippet
With this snippet of code we are geetting products from the best buy API and setting the state that our react components aree then going to render on the page. This is done by setting the state into an object, then desctructuring that object by mapping specific data points with the compoenents on the card. 
```js

 componentDidMount() {
        this.loadProducts();
      }
    
      loadProducts = () => {
        API.getProducts("")
          .then(res => {
            console.log(res);
            this.setState({ 
              products: res.data, 
              name: res.data.name, 
              source: res.data.source, 
              shortDescription: res.data.shortDescription, 
              image: res.data.image })
          })

});
```

## Built With
* [React](https://reactjs.org/docs/getting-started.html)
* [Reactbootstrap](https://www.npmjs.com/package/react-bootstrap)
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Morgan](https://www.npmjs.com/package/morgan)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)


