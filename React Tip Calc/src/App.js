import React, {useState} from 'react'

function Calculator() {


    const [Bill, setBill] = useState('')
    const [tip, setTip] = useState('')
    const [People, setPeople] = useState('')
    const [state, setState] = useState([]);

  let calc = 0;
   let  billInput = (event) => {
        setBill(event.target.value)
    }

    let tipRate = (e) => {
        setTip(e.target.value);
    }

    let nameInput= (eve) => {
        setPeople(eve.target.value)
    }
    
    let addPerson = () => {
        calc = Bill * tip;
        setState([...state,`${People} is Contributing ${calc} Rupees`]);
        setBill('')
        setTip('')
        setPeople('')
    }

    return(
      <div className='container'>
          <div>
          <label htmlFor='bill'>Bill Amount:</label>
          <input type="number" id='bill' value={Bill} className='input_box' onChange={billInput} />
          </div>
          <div>
          <label>Bill Amount:</label>
          <select value={tip} id="rating_tip" className="input_field" onChange={tipRate} > 
               <option>
                    Select Rate Of Interest
                </option>
                <option value="0.2" >
                    &#128523;  Excellent 20%
                </option>
                <option value="0.1">
                    &#128512;  Medium 10%
                </option>
                <option value="0.05">
                    &#128527;  Not so good 5%
                </option>
             </select>
          </div>

          <div>
          <label htmlFor='name'>Enter Your Name:</label>
          <input type="text" value={People} id='name' className='input_box' onChange={nameInput} />
          </div>

          <button onClick={addPerson}> Add Person </button>
          <div>
               {
                    state.map((ele, i) =>{
                        return <li key={i}> {ele} </li>
                    })
                }
          </div>

          <button onclick={sumOfTip}>Calculate Tip and Persons</button>
      </div>
    )
}

export default Calculator;