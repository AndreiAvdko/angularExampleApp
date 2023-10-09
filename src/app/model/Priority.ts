export class Priority {
    id: number;
    title: string;
    color: string;

    constructor(id: number, title: string, color: string) {
        this.color = color;
        this.id = id;
        this.title = title;
    }
}