import React from "react";

const MainContainer = ({fetchCurrencies = {"ccy":"","base_ccy":"UAH","buy":"","sale":""},
                        loadingCurrencies,
                        inputs,
                        invokeConvertor,
                        toggleCCY}) => {

    const currencies = () => {
        let set = new Set();
        fetchCurrencies.map(item => {
            set.add(item.ccy);
            set.add(item.base_ccy);
        }) 
        return Array.from(set);
    }

    return (
        <div>
            {loadingCurrencies ?
            <div>
                Loading
            </div>
            :
            <div>
                <div>
                    <input
                        id="firstInput"
                        type="number"
                        value={inputs.firstValue}
                        onChange={(e) => invokeConvertor(e)}
                    />
                    <select
                        id="firstSelect"
                        value={inputs.firstSelect}
                        onChange={(e) => toggleCCY(e)}
                    >
                        {currencies().map(item => 
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        )}
                    </select>
                </div>              
                <div>
                    <input
                        id="secondInput"
                        type="number"
                        value={inputs.secondValue}
                        onChange={(e) => invokeConvertor(e)}
                    />
                    <select
                        id="secondSelect"
                        value={inputs.secondSelect}
                        onChange={(e) => toggleCCY(e)}
                    >
                        {currencies().map(item => 
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        )}
                    </select>
                </div>              
            </div>
            }
        </div>
    )
}

export default MainContainer;