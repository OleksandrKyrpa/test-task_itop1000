const converter = (target, inputs, setInputs, fetchCurrencies) => {
  
    if (inputs.firstSelect === "UAH" && inputs.secondSelect === "USD") {
      console.log("UAH && USD")
        if (target.id === "firstInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value).toFixed(2),
              secondValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "USD").sale).toFixed(2),
            }
          )
        }
        if (target.id === "secondInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "USD").sale).toFixed(2),
              secondValue: parseFloat(target.value).toFixed(2),
            }
          )
        }
    } else if (inputs.firstSelect === "UAH" && inputs.secondSelect === "EUR") {
      console.log("UAH && EUR")
        if (target.id === "firstInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value).toFixed(2),
              secondValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "EUR").sale).toFixed(2),
            }
          )
        }
        if (target.id === "secondInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "EUR").sale).toFixed(2),
              secondValue: parseFloat(target.value).toFixed(2),
            }
          )
        }
    } else if (inputs.firstSelect === "USD" && inputs.secondSelect === "UAH") {
      console.log("USD && UAH")
      if (target.id === "firstInput") {
        setInputs(
          {
            ...inputs,
            firstValue: parseFloat(target.value).toFixed(2),
            secondValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "USD").buy).toFixed(2),
          }
        )
      }
      if (target.id === "secondInput") {
        setInputs(
          {
            ...inputs,
            firstValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "USD").buy).toFixed(2),
            secondValue: parseFloat(target.value).toFixed(2),
          }
        )
      }
    } else if (inputs.firstSelect === "USD" && inputs.secondSelect === "EUR") {
      console.log("USD && EUR")
        if (target.id === "firstInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value).toFixed(2),
              secondValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "USD").buy / fetchCurrencies.find(item => item.ccy === "EUR").sale).toFixed(2),
            }
          )
        }
        if (target.id === "secondInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "USD").buy * fetchCurrencies.find(item => item.ccy === "EUR").sale).toFixed(2),
              secondValue: parseFloat(target.value).toFixed(2),
            }
          )
        }
    } else if (inputs.firstSelect === "EUR" && inputs.secondSelect === "UAH") {
      console.log("EUR && UAH")
        if (target.id === "firstInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value).toFixed(2),
              secondValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "EUR").buy).toFixed(2),
            }
          )
        }
        if (target.id === "secondInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "EUR").buy).toFixed(2),
              secondValue: parseFloat(target.value).toFixed(2),
            }
          )
        }
    } else if (inputs.firstSelect === "EUR" && inputs.secondSelect === "USD") {
      console.log("EUR && USD")
        if (target.id === "firstInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value).toFixed(2),
              secondValue: parseFloat(target.value * fetchCurrencies.find(item => item.ccy === "EUR").buy / fetchCurrencies.find(item => item.ccy === "USD").sale).toFixed(2),
            }
          )
        }
        if (target.id === "secondInput") {
          setInputs(
            {
              ...inputs,
              firstValue: parseFloat(target.value / fetchCurrencies.find(item => item.ccy === "EUR").buy * fetchCurrencies.find(item => item.ccy === "USD").sale).toFixed(2),
              secondValue: parseFloat(target.value).toFixed(2),
            }
          )
        }
    } else if (inputs.firstSelect === inputs.secondSelect) {
        console.log(`${inputs.firstSelect} && ${inputs.secondSelect}`)
          if (target.id === "firstInput") {
            setInputs(
              {
                ...inputs,
                firstValue: parseFloat(target.value).toFixed(2),
                secondValue: parseFloat(target.value).toFixed(2),
              }
            )
          }
          if (target.id === "secondInput") {
            setInputs(
              {
                ...inputs,
                firstValue: parseFloat(target.value).toFixed(2),
                secondValue: parseFloat(target.value).toFixed(2),
              }
            )
          }
    }
  }

  export default converter;