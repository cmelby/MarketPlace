# OnlineMarketplace


## Summary 
Online Marketplace leverages Best Buys API to pull in products to the main page where the user can then click into catagories, search for products, add items to cart, and delete items form their cart. The user can also view individual products. This application was built using a react front end that pulls from the API based on user actions and renders components using setState. 



## Demo
This application is deeployed on Heroku at:  https://ancient-savannah-99735.herokuapp.com/
![Site](sitedemo.gif) 

 
## Technologies Used
- React: Used to dynamically render components on browser and initiate functionality of the game based on user inputs.

- MongoDB: MongoDB is an object-oriented, simple, dynamic, and scalable NoSQL database. It is based on the NoSQL document store model. MongoBD in this application is used as the main data store for product and user information. 
- Morgan: Request logger middleware for Node.js that easily logs requests, errors, and more to the console. It’s easy to use, but still powerful and customizable.
- Dotenv: Dotenv is a zero-dependency module that loads environment variables from a . env file into process. env . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
- Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB
- Becrypt.js: Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power
- Express.js: Express. js is a Node. js web application server framework, designed for building single-page, multi-page, and hybrid web applications. Used in this application to set middle ware for end point connection between the front end and backend.
- Node.js: Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.
- Git:  Version control system to track changes to source code.
- GitHub: Hosts repository that can be deployed to GitHub Pages.
 
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
* [becrypt.js](https://github.com/dcodeIO/bcrypt.js#usage---async)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Mongoose](https://www.npmjs.com/package/mongoose)
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


