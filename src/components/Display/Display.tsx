import { useContext } from "react";
import { NumericFormat } from "react-number-format";
import InputContext from "../../store/input-context";

const Display = () => {
    const ctx = useContext(InputContext);
    return (
        <div className="screen">
            <NumericFormat
                value={ctx.displayValue}
                displayType={"text"}
                thousandSeparator={true}
            />
        </div>
    );
};

export default Display;
