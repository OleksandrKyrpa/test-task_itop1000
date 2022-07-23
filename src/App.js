import { useEffect, useState } from "react";
import cl from "./App.module.css"
import Header from "./components/Header/Header"
import MainContainer from "./components/MainContainer/MainContainer";
import converter from "./converter";

const currentCurrencies = ["USD", "EUR"];

function App() {

const [fetchCurrencies, setFetchCurrencies] = useState([]);
const [errorLoadingCurrencies, setErrorLoadingCurrensies] = useState('');
const [loadingCurrencies, setLoadingCurrencies] = useState(false);
const [inputs, setInputs] = useState({
  firstSelect: "UAH", 
  secondSelect: "USD",
  firstValue: 0,
  secondValue: 0,
});

const invokeConvertor = (e) => {
  const target = e.target;
  converter(target, inputs, setInputs, fetchCurrencies);
}

const toggleCCY = (e) => {
  const target = e.target
  
  switch (target.id) {
    case "firstSelect":
      setInputs(
        {
          ...inputs,
          firstSelect: target.value,
        }
      )
      break

    case "secondSelect":
      setInputs(
        {
          ...inputs,
          secondSelect: target.value,
        }
      )
      break
  }
}

const getCurrencies = async () => {
  try {
    setLoadingCurrencies(true);
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
      .then(response => response.json())
      .then( result => setFetchCurrencies(result.filter((item) => currentCurrencies.includes(item.ccy))) );      
  } catch (e) {
    setErrorLoadingCurrensies(e.message);
  } finally {
    setLoadingCurrencies(false);
  }
}

useEffect(() => {
  getCurrencies()
}
, [])

return (
  <div className={cl.App}>
    <Header
      errorLoadingCurrencies={errorLoadingCurrencies} 
      fetchCurrencies={fetchCurrencies}
      loadingCurrencies={loadingCurrencies}      
    />
    <MainContainer
      inputs={inputs}
      toggleCCY={toggleCCY}
      invokeConvertor={invokeConvertor} 
      fetchCurrencies={fetchCurrencies}
      loadingCurrencies={loadingCurrencies}      
    />
  </div>
  );
}

export default App;