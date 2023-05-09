export function FloorSelector(props) {
    const MIN_FLOOR = 3;
    const MAX_FLOOR = 27;
    const options = new Array(MAX_FLOOR - MIN_FLOOR + 1).fill(0).map((_, i) => {
        return {
            value: i + MIN_FLOOR,
            label: i + MIN_FLOOR
        };
    });

    return (
        <div className="form-children-container">
            <label>Выберите этаж:</label>
            <select
                value={props.formData.floor}
                onChange={(e) => {
                    props.setFormData((formData) => {
                        return { ...formData, floor: e.target.value };
                    });
                }}
            >
                {options.map((option, index) => (
                    <option key={`floor-option-${index}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
