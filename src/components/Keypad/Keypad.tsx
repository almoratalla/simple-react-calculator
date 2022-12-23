import { buttons } from "../../utils";
import CalculatorKey from "../CalculatorKey/CalculatorKey";
import {
    useEffect,
    MouseEvent,
    FC,
    useContext,
    SetStateAction,
    Dispatch,
} from "react";
import "../../index.css";
import InputContext from "../../store/input-context";

const Keypad: FC<{
    inputHandler: Dispatch<SetStateAction<string>>;
    preStateHandler: Dispatch<SetStateAction<string>>;
    curStateHandler: Dispatch<SetStateAction<string>>;
    operatorHandler: Dispatch<SetStateAction<string | null>>;
    totalHandler: Dispatch<SetStateAction<boolean>>;
}> = ({
    inputHandler,
    preStateHandler,
    curStateHandler,
    operatorHandler,
    totalHandler,
}) => {
    const ctx = useContext(InputContext);

    useEffect(() => {
        inputHandler("0");
    }, []);

    const operatorType = (e: any) => {
        totalHandler(false);
        operatorHandler(e.target.innerText);
        if (ctx.currEntry === "") return;
        if (ctx.prevEntry !== "") {
            equals(e);
        } else {
            preStateHandler(ctx.currEntry);
            curStateHandler("");
        }
    };

    const equals = (e: any) => {
        let cal;
        if (e?.target.innerText === "=") {
            cal = String(
                parseFloat(ctx.currEntry ? ctx.currEntry : ctx.prevEntry) * 2
            );
            totalHandler(true);
            operatorHandler(null);
            preStateHandler(cal);
            curStateHandler("");
            inputHandler(cal);
        }

        switch (ctx.operator) {
            case "+":
                cal = String(
                    parseFloat(ctx.prevEntry) +
                        parseFloat(
                            ctx.currEntry ? ctx.currEntry : ctx.prevEntry
                        )
                );
                break;
            case "-":
                cal = String(
                    parseFloat(ctx.prevEntry) -
                        parseFloat(
                            ctx.currEntry ? ctx.currEntry : ctx.prevEntry
                        )
                );
                break;
            case "/":
                cal = String(
                    parseFloat(ctx.prevEntry) /
                        parseFloat(
                            ctx.currEntry ? ctx.currEntry : ctx.prevEntry
                        )
                );
                break;
            case "x":
                cal = String(
                    parseFloat(ctx.prevEntry) *
                        parseFloat(
                            ctx.currEntry ? ctx.currEntry : ctx.prevEntry
                        )
                );
                break;
            case "=":
                cal = String(
                    parseFloat(ctx.prevEntry) +
                        parseFloat(
                            ctx.currEntry ? ctx.currEntry : ctx.prevEntry
                        )
                );
                break;

            default:
                return;
        }

        preStateHandler(cal);
        curStateHandler("");
        inputHandler(cal);
    };

    const minusPlus = () => {
        if (ctx.currEntry.charAt(0) === "-") {
            curStateHandler(ctx.currEntry.substring(1));
            inputHandler(ctx.currEntry.substring(1));
        } else {
            curStateHandler(
                ctx.currEntry ? `-${ctx.currEntry}` : `-${ctx.prevEntry}`
            );
            inputHandler(
                ctx.currEntry ? `-${ctx.currEntry}` : `-${ctx.prevEntry}`
            );
        }
    };

    const percent = () => {
        if (ctx.prevEntry) {
            curStateHandler(
                String((Number(ctx.currEntry) / 100) * Number(ctx.prevEntry))
            );
            inputHandler(
                String((Number(ctx.currEntry) / 100) * Number(ctx.prevEntry))
            );
        } else {
            curStateHandler(String(parseFloat(ctx.currEntry) / 100));
            inputHandler(String(parseFloat(ctx.currEntry) / 100));
        }
    };

    const reset = () => {
        preStateHandler("");
        curStateHandler("0");
        inputHandler("0");
    };

    const inputNum = (e: any) => {
        const currentText = e.target.innerText;
        if (ctx.currEntry.includes(".") && e.target.innerText === ".") return;

        if (ctx.total) {
            preStateHandler("");
        }

        if (ctx.currEntry && ctx.currEntry !== "0") {
            curStateHandler((pre: any) => {
                if (ctx.displayValue === "0") {
                    return currentText;
                } else {
                    return pre + currentText;
                }
            });
            inputHandler((pre: any) =>
                ctx.displayValue === "0" ? currentText : pre + currentText
            );
        } else {
            curStateHandler(
                currentText === "."
                    ? "0."
                    : Number(ctx.currEntry + currentText).toString()
            );
            ctx.currEntry;

            inputHandler(
                currentText === "."
                    ? "0."
                    : Number(ctx.currEntry + currentText).toString()
            );
        }
        totalHandler(false);
    };

    const keyClick = (
        keyInput: "num" | string,
        e: MouseEvent<HTMLButtonElement>
    ) => {
        if (keyInput === "num") {
            inputNum(e);
        }
        if (keyInput === "reset") {
            reset();
        }
        if (keyInput === "op") {
            operatorType(e);
        }
        if (keyInput === "equals") {
            equals(e);
        }
        if (keyInput === "change") {
            minusPlus();
        }
        if (keyInput === "percent") {
            percent();
        }
    };

    const clearDisplay = ctx.displayValue !== "0";
    const clearText = clearDisplay ? "C" : "AC";

    return (
        <div className="keypad">
            {buttons.map((b) => {
                return (
                    <CalculatorKey
                        data={b}
                        key={b.function}
                        handleKeyClick={keyClick}
                        clearText={clearText}
                    ></CalculatorKey>
                );
            })}
        </div>
    );
};

export default Keypad;
