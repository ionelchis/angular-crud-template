import { Device } from "../device/device";

export interface User {
    id: number;
    name: string;
    role: string;
    devices: Device[]
}