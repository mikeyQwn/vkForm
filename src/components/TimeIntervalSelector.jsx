const style = {
    display: "flex",
    flexDirection: "row",
    gap: "0.2em"
};

const inputStyle = {
    width: "50%"
};

export function TimeIntervalSelector() {
    return (
        <div style={style}>
            <input style={inputStyle} onChange={(e) => {}} type="time"></input>
            <input style={inputStyle} type="time"></input>
        </div>
    );
}
