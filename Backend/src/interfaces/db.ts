export interface DBRooms {
    id: number;
    room: string;
    limit: number;
    personnel: number;
    floor: number;
}

export interface DBRoomApplicant {
    id: number;
    roomId: number;
    userId: number;
    name: string;
    class: string;
}