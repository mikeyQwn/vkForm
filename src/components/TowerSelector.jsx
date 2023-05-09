export function TowerSelector() {
    const options = [
        { value: "А", label: "А" },
        { value: "Б", label: "Б" }
    ];

    return (
        <div className="form-children-container">
            <label>Выберите башню:</label>
            <select onChange={(e) => console.log(e.target.value)}>
                {options.map((option, index) => (
                    <option key={`tower-option-${index}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
