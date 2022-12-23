import { FC } from "react";
import { button, iButton } from "../../interfaces";

const CalculatorKey: FC<{
    data: iButton;
    handleKeyClick: any;
    clearText?: string;
}> = ({ data, handleKeyClick, clearText }) => {
    const handleButtonType = (type: button, element: string) => {
        let buttonClass = "";
        switch (type) {
            case "special":
                buttonClass = "light-gray";
                break;
            case "operator":
                buttonClass = "orange";
                break;
            case "number":
                buttonClass = element === "0" ? "zero" : "";
                break;
            default:
                buttonClass = "";
        }
        return buttonClass;
    };
    return (
        <div
            className={`btn ${handleButtonType(data.type, data.element)}`}
            onClick={(e) => handleKeyClick(data.input || "", e)}
        >
            {data.input === "reset" ? clearText : data.element}
        </div>
    );
};

export default CalculatorKey;
