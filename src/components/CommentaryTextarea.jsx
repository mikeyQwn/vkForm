import { useState } from "react";
import { InputErrorMessage } from "./InputErrorMessage";

const textareaStyle = {
    width: "100%",
    height: "100%",
    resize: "none"
};

const style = {
    position: "relative"
};

export function CommentaryTextarea(props) {
    const [isValid, setIsValid] = useState(true);
    return (
        <div style={style} className="form-children-container">
            <label>Введите комментарий</label>
            <textarea
                style={textareaStyle}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        return { ...formData, commentary: e.target.value };
                    });
                }}
                onBlur={() => {
                    setIsValid(props.formData.commentary.length != 0);
                }}
                value={props.formData.commentary}
            ></textarea>
            {!isValid && (
                <InputErrorMessage message="Пожалуйста, введите комментарий" />
            )}
        </div>
    );
}
