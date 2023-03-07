# Creating your First React App

- It is as simple as running the command `npx create-react-app {reactappnamehere}`
- This will take a minute to install all the modules and dependencies required for your react app
- We use JSX in React , which is a mix of JS and HTML which allows us to put logic inside of our ui
- Example you can create a variable and use that variable multiple times inside the JSX file
- Example :


            function App() {
                 //Example 1;
                  const name = <h1>John Doe</h1>;
                  const age = <h2>30</h2>
                  const email = <p>asdjlf@gmail.com</p>;
                  return (
                  //we can return only one  element
                   //we can use the above variables
                  <div className='App'>
                  <div>
                  {name}
                   {age}
                     {email}
                  </div>

                </div>
                );
                 }

                   export default App;


## Components
- Returns UI always
- Components are pieces of code that you have to use again and again 
- Call them using self closing tags
- Called inside other components or app.js
- Makes code look sorted & better 
- We can pass props when we call them , and then use them to produce dynamic components
- Check the React App to understand
- Reduce complex code writing 
- Check app.js to understand how it works (src/app.js)
