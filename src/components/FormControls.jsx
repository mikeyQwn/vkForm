const style = {
    flexDirection: "row"
};

const buttonStyle = {
    flex: 1,
    aspectRatio: "9/1"
};

export function FormControls(props) {
    return (
        <div className="form-children-container" style={style}>
            <button
                onClick={() => props.setFormData(props.defaultFormData)}
                style={buttonStyle}
            >
                Очистить
            </button>
            <button
                onClick={() => console.log(JSON.stringify(props.formData))}
                style={buttonStyle}
            >
                Отправить
            </button>
        </div>
    );
}
