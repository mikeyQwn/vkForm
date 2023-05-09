const textareaStyle = {
    width: "100%",
    height: "100%",
    resize: "none"
};

export function CommentaryTextarea(props) {
    return (
        <div className="form-children-container">
            <label>Введите комментарий</label>
            <textarea
                style={textareaStyle}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        return { ...formData, commentary: e.target.value };
                    });
                }}
                value={props.formData.commentary}
            ></textarea>
        </div>
    );
}
