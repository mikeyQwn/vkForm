const textareaStyle = {
    width: "100%",
    height: "100%"
};

export function CommentaryTextarea() {
    return (
        <div className="form-children-container">
            <label>Введите комментарий</label>
            <textarea style={textareaStyle}></textarea>
        </div>
    );
}
