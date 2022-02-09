export interface DBRooms {
    id: number;
    room: string;
}

export interface DBRoomApplicant {
    id: number;
    roomId: number;
    userId: number;
    name: string;
    class: string;
}