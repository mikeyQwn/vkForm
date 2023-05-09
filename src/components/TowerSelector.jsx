export function TowerSelector(props) {
    const options = [
        { value: "А", label: "А" },
        { value: "Б", label: "Б" }
    ];

    return (
        <div className="form-children-container">
            <label>Выберите башню:</label>
            <select
                value={props.formData.tower}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        return { ...formData, tower: e.target.value };
                    });
                }}
            >
                {options.map((option, index) => (
                    <option key={`tower-option-${index}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
