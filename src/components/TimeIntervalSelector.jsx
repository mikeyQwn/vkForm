const style = {
    display: "flex",
    flexDirection: "row",
    gap: "0.2em"
};

const inputStyle = {
    width: "50%"
};

function getValueFromMillis(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    return timeString;
}

export function TimeIntervalSelector(props) {
    return (
        <div style={style}>
            <input
                style={inputStyle}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        const date = e.target.valueAsDate.getTime();
                        const offset =
                            e.target.valueAsDate.getTimezoneOffset() * 60000;
                        const offsetDate = date + offset;
                        return {
                            ...formData,
                            stayStartTimeMs: offsetDate
                        };
                    });
                }}
                value={getValueFromMillis(props.formData.stayStartTimeMs)}
                type="time"
            ></input>
            <input
                style={inputStyle}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        const date = e.target.valueAsDate.getTime();
                        const offset =
                            e.target.valueAsDate.getTimezoneOffset() * 60000;
                        const offsetDate = date + offset;
                        return {
                            ...formData,
                            stayEndTimeMs: offsetDate
                        };
                    });
                }}
                value={getValueFromMillis(props.formData.stayEndTimeMs)}
                type="time"
            ></input>
        </div>
    );
}
