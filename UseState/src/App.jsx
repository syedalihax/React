import React, { useState } from 'react'

const App = () => {
    let [number, setNumber] = useState(0)
    const [count, setcount] = useState(0)
    let plus = () => {
        setcount(1)
        setNumber(number + 1)
    }
    let neg = () => {
        setcount(count + 1)
        if (number > 0) {
            setcount(1)
            setNumber(number - 1)
        } else {
            if (count < 10) {
                console.log("You win " + count + " Times")
            }
            else if (count < 20) {

                console.log(`You lose ${count} times.`)
            }
            else {
                console.log("Round draw " + count + " Times");

            }

        }

    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>+</button>
            <button onClick={neg}>-</button>
        </div>
    )
}

export default App
