import { iButtons } from "../interfaces";

export const buttons: iButtons = [
    {
        name: "all clear",
        description: "Clears all input",
        function: "ac",
        element: "AC",
        keyboard: "ctrl + a",
        type: "special",
        input: "reset",
    },
    {
        name: "change arithmetic sign",
        description: "Change arithmetic sign",
        function: "+/-",
        element: "+/-",
        keyboard: "c",
        type: "special",
        input: "change",
    },
    {
        name: "percentage",
        description: "Percentage using current entry and next entry",
        function: "%",
        element: "%",
        keyboard: "%",
        type: "special",
        input: "percent",
    },
    {
        name: "division operator",
        description: "Divides the current entry by the next entry",
        function: "/",
        element: "/",
        keyboard: "/",
        type: "operator",
        input: "op",
    },
    {
        name: "number 7",
        description: "input number 7",
        function: "7",
        element: "7",
        keyboard: "7",
        type: "number",
        input: "num",
    },
    {
        name: "number 8",
        description: "input number 8",
        function: "8",
        element: "8",
        keyboard: "8",
        type: "number",
        input: "num",
    },
    {
        name: "number 9",
        description: "input number 9",
        function: "9",
        element: "9",
        keyboard: "9",
        type: "number",
        input: "num",
    },
    {
        name: "multiplication operator",
        description: "Multiplies the current entry by the next entry",
        function: "*",
        element: "x",
        keyboard: "*",
        type: "operator",
        input: "op",
    },
    {
        name: "number 4",
        description: "input number 4",
        function: "4",
        element: "4",
        keyboard: "4",
        type: "number",
        input: "num",
    },
    {
        name: "number 5",
        description: "input number 5",
        function: "5",
        element: "5",
        keyboard: "5",
        type: "number",
        input: "num",
    },
    {
        name: "number 6",
        description: "input number 6",
        function: "6",
        element: "6",
        keyboard: "6",
        type: "number",
        input: "num",
    },
    {
        name: "subtraction operator",
        description: "Subtracts the current entry by the next entry",
        function: "-",
        element: "-",
        keyboard: "-",
        type: "operator",
        input: "op",
    },
    {
        name: "number 1",
        description: "input number 1",
        function: "1",
        element: "1",
        keyboard: "1",
        type: "number",
        input: "num",
    },
    {
        name: "number 2",
        description: "input number 2",
        function: "2",
        element: "2",
        keyboard: "2",
        type: "number",
        input: "num",
    },
    {
        name: "number 3",
        description: "input number 3",
        function: "3",
        element: "3",
        keyboard: "3",
        type: "number",
        input: "num",
    },

    {
        name: "addition operator",
        description: "adds the current entry by the next entry",
        function: "+",
        element: "+",
        keyboard: "+",
        type: "operator",
        input: "op",
    },

    {
        name: "number 0",
        description: "input number 0",
        function: "0",
        element: "0",
        keyboard: "0",
        type: "number",
        input: "num",
    },
    {
        name: "decimal point",
        description: "point separator for decimals",
        function: ".",
        element: ".",
        keyboard: ".",
        type: "number",
        input: "num",
    },
    {
        name: "equal",
        description: "outputs the operation",
        function: "=",
        element: "=",
        keyboard: "=",
        type: "number",
        input: "equals",
    },
];

export const CalculatorOperations = {
    "/": (prevValue: number, nextValue: number) => prevValue / nextValue,
    "*": (prevValue: number, nextValue: number) => prevValue * nextValue,
    "+": (prevValue: number, nextValue: number) => prevValue + nextValue,
    "-": (prevValue: number, nextValue: number) => prevValue - nextValue,
    "=": (prevValue: number, nextValue: number) => nextValue,
};

export default {
    buttons,
};
