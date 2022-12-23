export interface iButton {
    name: string;
    description: string;
    function: string | number;
    element: string;
    keyboard: string;
    type: button;
    input?: string;
}

export type iButtons = iButton[];
export type button = "special" | "operator" | "number";
