import { TimeIntervalSelector } from "./TimeIntervalSelector";

const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr"
};

export function DateAndIntervalPicker(props) {
    return (
        <div className="form-children-container" style={style}>
            <label>Выберите дату пребывания:</label>
            <label>Выберите время пребывания:</label>
            <input
                value={props.formData.stayDate}
                type="date"
                onChange={(e) => {
                    props.setFormData((formData) => {
                        return { ...formData, stayDate: e.target.value };
                    });
                }}
            ></input>
            <TimeIntervalSelector
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>
    );
}
