import exclamation from "../assets/exclamation.svg";

export function InputErrorMessage(props) {
    return (
        <div className="input-error-message">
            <div>
                <img className="contained" src={exclamation}></img>
            </div>
            <p>{props.message}</p>
        </div>
    );
}
