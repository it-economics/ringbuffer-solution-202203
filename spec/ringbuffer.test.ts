import { Ringbuffer} from '../src/ringbuffer';

describe('RingBuffer', () => {
    it('behaves like example', () => {
        const ringbuffer = new Ringbuffer<number>(3);
        ringbuffer.add(1)
        ringbuffer.add(2)
        expect(ringbuffer.size).toEqual(3)
        expect(ringbuffer.count()).toEqual(2)
        expect(ringbuffer.take()).toEqual(1)
        ringbuffer.add(3)
        ringbuffer.add(4)
        ringbuffer.add(5)
        expect(ringbuffer.take()).toEqual(3)
    });

});
