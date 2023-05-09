import { FormContainer } from "./FormContainer";
import "../App.css";

const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

function App() {
    return (
        <div style={style}>
            <FormContainer />
        </div>
    );
}

export default App;
