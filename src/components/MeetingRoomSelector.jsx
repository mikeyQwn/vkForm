export function MeetingRoomSelector() {
    const NUMBER_OF_MEETING_ROOMS = 10;
    const options = new Array(NUMBER_OF_MEETING_ROOMS).fill(0).map((_, i) => {
        return {
            value: i + 1,
            label: i + 1
        };
    });

    return (
        <div className="form-children-container">
            <label>Выберите номер переговорки:</label>
            <select onChange={(e) => console.log(e.target.value)}>
                {options.map((option, index) => (
                    <option
                        key={`meetingRoom-option-${index}`}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
