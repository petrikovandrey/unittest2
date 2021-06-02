
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

test("sort descending to Be", () => {
    let list = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const result = sortHealth(list);
   
    expect(result[0].name).toBe("маг");
})