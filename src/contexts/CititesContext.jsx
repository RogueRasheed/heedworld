import { createContext, useState, useEffect } from "react";


const BASE_URL = "http://localhost:8000";


const CititesContext = createContext();

 function CitiesProvider ({ children }) {
   const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function() {
      async function fetchCities(){
       try{ 
        setIsLoading(true);
        const res = await fetch (`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading the data...')
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, [])
  
  return (<CititesContext.Provider value={
    {cities,
    isLoading,}
  }>{children}</CititesContext.Provider>
    
    );
 }

 export { CitiesProvider }