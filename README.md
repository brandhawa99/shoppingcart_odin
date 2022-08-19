# Shopping Cart App
[Live App](https://shopping-cart-app-brandhawa.netlify.app/)
![image](https://user-images.githubusercontent.com/35308786/185670287-ad051d88-aad5-46bf-91e3-f0b106328ed3.png)

### Description
In this project, I connected my front-end to [This API](https://fakestoreapi.com). I created a generic home and about page, then
I have a store page that fetches product data (price, images, descriptions) from the API. When you click on the actual products, it takes you to a detail page that gives you more data about the product with the ability to add multiple products to your cart. 
You can add products to your cart, which updates the count in the top right corner. Then when you access your cart you can see everything that you added to your cart with the total of each product and the total for the whole cart at the bottom. 
Once you click "Checkout" it reloads you to the homepage and makes it as if you never visited the site before. 

##### Technologies
I used ReactJS because it is a popular and in-demand front-end javascript library, and react-router-dom to navigate multiple routes.
I used the Fetch API because it is well documented and makes it simple to use and interact with APIs. 

##### Challenges
One of the more difficult challenges with this project was figuring out state management. Making the cart count update when products were added especially when multiples of the same product were added was difficult to understand but, I figured it out in the end.  


### Goals
- [x] Learn how to connect a React app to a public api 
- [x] Learn how to use React-Router-Dom for page navigation 
- [x] State Management

## How to run locally 
1. Clone the project and save it in some directory
2. Run `npm install` to install all of the neccessary packages
3. Run `npm run start` and it should start working just fine
