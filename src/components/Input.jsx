import { useState } from "react"

export default function UInput(){

    const [IInvestment, sIInvestment] = useState("")

    const [AInvestment, sAInvestment] = useState("")

    const [distribution, sdistribution] = useState("")

    const [EReturn, sEReturn] = useState("")

    return (
        <section id="user-input">
          <div className="input-group">
            <p>Initial investment</p>
            <input type="text" value={IInvestment}/>
          </div>

          <div className="input-group">
            <p>Anual investment</p>
            <input type="text" value={AInvestment}/>
          </div>

          <div className="input-group">
            <p>Distribution</p>
            <input type="text" value={distribution}/>
          </div>

          <div className="input-group">
            <p>Ecpected Return</p>
            <input type="text" value={EReturn}/>
          </div>
        </section>
    )
}