# Shopping Cart App
[Live App](https://shopping-cart-app-brandhawa.netlify.app/)
![image](https://user-images.githubusercontent.com/35308786/185670287-ad051d88-aad5-46bf-91e3-f0b106328ed3.png)


### Description
In this project I connected my front-end to [This API](https://fakestoreapi.com). I created a generic home and about page and then
I have a store page which fetches product data (price, image , descriptions) from the api. When you click on the actual prdocut it gives you a more detailed view of the product with the ability to add mulitple products to your cart. 
You can add products to your cart and it updates the count, then when you access the cart you can see everything that you added the total of your cart. 
Once you click checkout it reloads you to the homepage and makes it as if you never visited the site before. 

##### Technologies
I used React  becuase it is a very popular front-end javascript library, and react-router-dom becuase its the best way to implement mulitple pages.
I used the Fetch API becasue its very well documented and very simple to use and interact with apis. 

##### Challenges
One of the more difficult chanllenges with this project was figuring out state mangement and how to organize the project so that the cart updated when products were added and making the cart update when multiples of the same products were added. 


### Goals
- [x] Learn how to connect a React app to a public api 
- [x] Learn how to use React-Router-Dom for page navigation 
- [x] State Management

## How to run locally 
1. Clone the project and save it in some directory
2. Run `npm install` to install all of the neccessary packages
3. Run `npm run start` and it should start working just fine
