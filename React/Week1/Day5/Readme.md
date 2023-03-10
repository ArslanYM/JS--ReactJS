# Fetching Data from an api 
- We use the `fetch()` function to fetch data from any API
- We can use the `.then` method to tap into that data and use it as we want to 
- We can either use fetch or axios to fetch data from any API
 - To use axios , we need to install axios.
  - To install run `npm install axios `
- Now we can just write `Axios.get()`

## Better way to fetch data from API's
- If we just conventionally store the fetched data value in some state , and then display it in a UI, The app will keep fetching the data infinitly.
- We can use `useEffect()` too but it also renders the data twice because of mounting and unmounting.

- Example code : 
                 

                     const [generatedExcuse , setGeneratedExcuse]  = useState("");
                     const call = (excuse) => {
                     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
                      (res)=>{
                         setGeneratedExcuse(res.data[0].excuse)
                      }
                    );
                    }
                      return (  
                       <div className='App'>
                          <h1>Generate an excuse</h1>
                          <button
                          onClick={()=>call("party")}
                          >Party</button>
                          <button
                          onClick={()=>call("family")}
                          >Family</button>
                          <button
                          onClick={()=>call("office")}
                         >Office</button>
                          <p>{generatedExcuse}</p>
                       </div>
                      );