class File {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void
    {
        this.name = name;
    }
}

export default File