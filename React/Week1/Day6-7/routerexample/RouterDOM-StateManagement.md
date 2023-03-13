# React Router DOM 
- Think about how we can create multiple responsive pages in a react app , Since we only have one index.html file which contains the `root` div
- Therefore for routing in react we install the React Router DOM library 
 - To install RRD run  `npm install react-router-dom` and hit enter
- To understand check the router example app code

## Include this when youre using the React Router DOM
-  `import { BrowserRouter as Router , Routes , Route , Links } from "react-router-dom";`
- Each component which we are fetching from the React Router DOM have different use cases. 
 # Difference btw Router and Routes 
 - In the Router component we can have links to other pages, Essentially a navbar that exists in every single page can be render by adding the links in the Router Component
 - In case of Routes , every route you define has to be cased inside the routes component.
- In case of the Route component , it has two attributes : 
  - `path=""`
  - `element={}`
- As the name suggest they contain the element to be rendered and path to it 
- If you sometime need to navigate from one element lets say `about` to  the `contact` page , we can use the `useNavigate` hook.
- we can initialize a useNavigate by : 
           
           
              let navigate = useNavigate();`


- then on event of some change lets say onClick , we can call a function that redirects to another page 
 

               onClick={() => {
                navigate("/contact")
               }}





# State Management  in React

- Managing data in an app is little tricky when many components are sharing and updating it. useState, useReducer, useMemo etc. are some state management hooks in React, which are very efficient and have their own ways to work in different scenarios. Though all these hooks are effective, there are still some situations where managing state becomes difficult.
- React context is nothing but a global state to the app. It is a way to make a particular data available to all the components no matter how they are nested. Context helps you broadcast the data and changes happening to that data, to all the components. That’s why it is a very useful state management hook, when it comes to use cases like we discussed above. 