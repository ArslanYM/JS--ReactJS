# React Query 
- Building front-end CRUD applications often starts out easy then turns complicated as you continue adding features. For every API endpoint, you’ll need to deal with state management, synchronization, caching and error handling. In this article, you’ll learn about a library called React Query and how it can help resolve all those issues. The library describes itself as the “missing data-fetching library” providing “server state management” for React.

-  One of the main advantages of React-Query is its ability to handle data fetching more efficiently. The useQuery hook allows you to fetch data and cache it in a way that makes it easy to handle complex data structures.


- Another advantage of React-Query is its ability to handle loading and error states seamlessly. The useQuery hook returns a status object that contains information about the loading state, error state, and the data returned from the query. This easily handles loading and error states in your application and provides a better user experience.

## To install 
- `npm install react-query`
-             import { QueryClient, QueryClientProvider } from "react-query";

                  function App() {
                    const queryClient = new QueryClient();

                     return (
                      <QueryClientProvider client={queryClient}>
                        /* place application containers/views here */
                      </QueryClientProvider>
                    );
                  }

                  export default App;


- Check the query.png image for better understanding 
