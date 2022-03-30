export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}