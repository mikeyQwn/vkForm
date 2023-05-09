import { TimeIntervalSelector } from "./TimeIntervalSelector";

const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr"
};

export function DateAndIntervalPicker() {
    return (
        <div className="form-children-container" style={style}>
            <label>Выберите дату пребывания:</label>
            <label>Выберите время пребывания:</label>
            <input type="date"></input>
            <TimeIntervalSelector />
        </div>
    );
}
