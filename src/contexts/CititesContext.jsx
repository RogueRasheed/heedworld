import { createContext, useState, useEffect, useContext } from "react";


const BASE_URL = "http://localhost:8000";


const CititesContext = createContext();

 function CitiesProvider ({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});


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
  }, []);

  async function getCity(id){
       try{ 
        setIsLoading(true);
        const res = await fetch (`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert('There was an error loading the data...')
      } finally {
        setIsLoading(false);
      }
    }

  
  return (<CititesContext.Provider value={
    {cities,
    isLoading,
    currentCity,
    getCity,}
  }>{children}</CititesContext.Provider>
    
    );
 }

 function useCities() {
    const context = useContext(CititesContext);
    if (context === undefined)
        throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
 }

 export { CitiesProvider, useCities }