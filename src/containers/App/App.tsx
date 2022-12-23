import { useState } from "react";
import "./App.css";
import Display from "../../components/Display/Display";
import Keypad from "../../components/Keypad/Keypad";
import InputContext from "../../store/input-context";

function App() {
    const [input, setInput] = useState("0");
    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [operator, setOperator] = useState<null | string>(null);
    const [total, setTotal] = useState(false);

    return (
        <InputContext.Provider
            value={{
                prevEntry: preState,
                currEntry: curState,
                displayValue: input,
                operator: operator,
                total: total,
            }}
        >
            <div className="container">
                <div className="wrapper">
                    <Display />
                    <Keypad
                        inputHandler={setInput}
                        preStateHandler={setPreState}
                        curStateHandler={setCurState}
                        operatorHandler={setOperator}
                        totalHandler={setTotal}
                    />
                </div>
            </div>
        </InputContext.Provider>
    );
}

export default App;
