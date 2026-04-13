import { clamp,lerp } from "../src/ts/math/math";
import{distance, toVector} from "../src/ts/math/polar-vector";
import { normalize,dot,add, subtract } from "../src/ts/math/vector";
describe("Space Invaders - Math Utils", () => {
    test('clamp(1, 10 ,2) devrait retrourner 2', () => {
        expect(clamp(1, 10, 2)).toBe(2);
    });
    test('clamp(1, 10, -12) devrait retouner 1', () => {
        expect(clamp(1, 10, -12)).toBe(1);
    });
    test('lerp(1, 10 ,2) devrait retrourner 19', () => {
        expect(lerp(1, 10, 2)).toBe(19);
    });
    test('lerp(1, 10, -12) devrait retouner -107', () => {
        expect(lerp(1, 10, -12)).toBe(-107);
    });
    // test('la distance entre p1(5, 50) et p2(10, 100) devrait être environ 98.302', () =>{
    //     const p1 = {angle: 5, radius: 50};
    //     const p2 = {angle: 10, radius: 100};
    //     expect(polarDistance(p1 , p2)).toBeCloseTo(98.302,3);
    // });

});
describe("Space Invaders - Math Utils", () =>{
it("distance: calcule la distance entre deux points polaire", ()=>{
    expect(
        distance({angle: 5, radius: 50}, {angle: 10, radius: 100}), 
    ).toBeCloseTo(98.302, 3);
});
it("add: additionne deux vecteurs {x,y}", () =>{
    expect(add({x:5 , y: 50}, {x: 10, y: 100})).toEqual({x:15, y:150,});
});
});
describe("Space Invaders - Math Utils", () =>{
    it("normalize: rend un vecteur de longueur 1", () =>{
        const resultat = normalize({x: 5, y: 50});
        expect(resultat.x).toBeCloseTo(0.0995, 4);
        expect(resultat.y).toBeCloseTo(0.9950,4);
    });
});
describe ("Space Invaders - Math Utils", () => {
    it("toVector: transforme les coordonnées polaires en coordonnées cartésiennes", () =>{
        const result = toVector({angle: 5, radius: 50});
        expect(result.x).toBeCloseTo( 14.1831,4);
        expect(result.y).toBeCloseTo(-47.9462,4);
    });
});
describe ("Space Invaders - Math Utils", () =>{
    it("subtract: soustraire les deux vecteurs", () => {
        expect(subtract({x: 5, y: 50}, {x: 10, y: 100})).toEqual({x: -5, y: -50});
    });
});
describe ("space Invaders - Math Utils", () => {
    it ("dot: calcule le produit scalire des deux vecteurs", () => {
        const result2 = dot({ x: 5, y: 50 },{ x: 10, y: 100 });
        expect(result2).toBe(5050);
    });
});

    

