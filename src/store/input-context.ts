import { createContext } from "react";

const InputContext = createContext<{
    prevEntry: string;
    currEntry: string;
    displayValue: string;
    operator: null | string;
    total: boolean | string;
}>({
    prevEntry: "",
    currEntry: "",
    displayValue: "0",
    operator: null,
    total: false,
});

export default InputContext;
