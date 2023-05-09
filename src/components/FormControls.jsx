const style = {
    flexDirection: "row"
};

const buttonStyle = {
    flex: 1,
    aspectRatio: "9/1"
};

export function FormControls() {
    return (
        <div className="form-children-container" style={style}>
            <button style={buttonStyle}>Очистить</button>
            <button style={buttonStyle}>Отправить</button>
        </div>
    );
}
