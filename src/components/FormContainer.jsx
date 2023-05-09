import { CommentaryTextarea } from "./CommentaryTextarea";
import { DateAndIntervalPicker } from "./DateAndIntervalPicker";
import { FloorSelector } from "./FloorSelector";
import { FormControls } from "./FormControls";
import { MeetingRoomSelector } from "./MeetingRoomSelector";
import { TowerSelector } from "./TowerSelector";

const style = {
    width: "40%",
    border: "0.66em solid black"
};

export function FormContainer() {
    return (
        <div style={style}>
            <TowerSelector />
            <FloorSelector />
            <MeetingRoomSelector />
            <DateAndIntervalPicker />
            <CommentaryTextarea />
            <FormControls />
        </div>
    );
}
