import { useState } from "react";
import { CommentaryTextarea } from "./CommentaryTextarea";
import { DateAndIntervalPicker } from "./DateAndIntervalPicker";
import { FloorSelector } from "./FloorSelector";
import { FormControls } from "./FormControls";
import { MeetingRoomSelector } from "./MeetingRoomSelector";
import { TowerSelector } from "./TowerSelector";

const style = {
    width: "40%",
    minWidth: "550px",
    border: "0.3em solid black",
    borderRadius: "0.4em"
};

const DEFAULT_FORM_DATA = {
    tower: "А",
    floor: 3,
    meetingRoomNumber: 1,
    stayDate: "2021-04-07",
    stayStartTimeMs: 24400000,
    stayEndTimeMs: 24450000,
    commentary: ""
};

export function FormContainer() {
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
    return (
        <div style={style}>
            <TowerSelector formData={formData} setFormData={setFormData} />
            <FloorSelector formData={formData} setFormData={setFormData} />
            <MeetingRoomSelector
                formData={formData}
                setFormData={setFormData}
            />
            <DateAndIntervalPicker
                formData={formData}
                setFormData={setFormData}
            />
            <CommentaryTextarea formData={formData} setFormData={setFormData} />
            <FormControls
                formData={formData}
                setFormData={setFormData}
                defaultFormData={DEFAULT_FORM_DATA}
            />
        </div>
    );
}
