
import { sortHealth } from "../src/index.js";

test("sort descending", () => {
    let list = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const result = sortHealth(list);
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    expect(result).toEqual(expected);
})

test("sort descending not to Be", () => {
    let list = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const result = sortHealth(list);
    const expected = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 }
    ];
    expect(result).not.toBe(expected);
})