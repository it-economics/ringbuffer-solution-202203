export class Ringbuffer<T> {

    private buffer: T[] = [];

    constructor(private _size: number) { }
    add(value: T): void {
        if (this.buffer.length >= this._size) {
            this.take();
        }
        this.buffer.push(value)
    }
    take(): T | undefined {
        return this.buffer.shift();
    }
    count(): number { return this.buffer.length; }
    // Anzahl ungelesene Elemente (<= Size())
    get size(): number { return this._size } // Größe des Ringbuffers
}