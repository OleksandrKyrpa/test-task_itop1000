import React from "react";
import cl from "./Header.module.css"

const Header = ({fetchCurrencies = {"ccy":"","base_ccy":"UAH","buy":"","sale":""}, 
                    loadingCurrencies, 
                    errorLoadingCurrencies}) => {
    
    return (
        <div
            className={cl.header}
        >
            {loadingCurrencies ?
            <div>
                Loading
            </div>
            :
            <div>
                {errorLoadingCurrencies 
                    ?
                    <div>
                        errorLoadingCurrencies
                    </div>
                    :
                    <table
                        className={cl.table}
                    >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buy</th>
                                <th>Sale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchCurrencies.map(item => 
                            <tr
                                key={item.ccy}
                            >
                                <th>{item.ccy}</th>
                                <td>{parseFloat(item.buy).toFixed(2)}</td>
                                <td>{parseFloat(item.sale).toFixed(2)}</td>
                            </tr>)}
                        </tbody>
                    </table>
                }
            </div>
            }
        </div>
    )
}

export default Header;