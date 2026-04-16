import { clamp,lerp } from "../src/ts/math/math";
import{distance, toVector} from "../src/ts/math/polar-vector";
import { normalize,dot,add, subtract } from "../src/ts/math/vector";
import { Input } from "../src/ts/input";
import {calculate, enemies, projectiles, } from "../src/ts/physics";
import { createEnemy,Type } from "../src/ts/enemy";


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
// test fonctionnel
// 1- test de déplacement du joueur: vérifier que la fonction slerp déplace bien le currentPosition vers la destination fournie pas l'input
describe ("Space Invaders - Math Utils", () =>{
    it("doit déplacer le jouer vers la position de l'input", () => {
        const mockInput = {
            axes: {x: 1, y:0},// le joueur va vers la droite 
            fire: false
        };
        //on exécute la  physique 
        const output = calculate ({
            input : mockInput,
            deltaTime: 0.1,
            addPoints:() =>{},

        });
        expect(output.playerPosition.x).toBeGreaterThan(0);
    });
})
// 2- collision : destruction de l'ennemi
describe ("Space Invaders - Math Utils", () =>{
    it("collision: un projectile doit détruire un ennemi", () => {
        //  on vite tout pour repartir de zéro en gros on vide le tableau const projectile = projectiles[pKey]
        enemies.length = 0 ;
        projectiles.length = 0;
        // l'ennemi se place à une position précis
        const positionChoc = {angle: 0 , radius: 200};
        enemies.push(createEnemy(Type.Basic, positionChoc));
        // le projectile se place au même endroit
        projectiles.push({position:{...positionChoc}});
        const resultat = calculate({
            input: {axes: {x: 0, y: 0}, fire: false},
            deltaTime: 0.0001,
            addPoints: () =>{},

        });
        expect(resultat.enemies.length).toBe(0);
        expect(resultat.projectiles.length).toBe(0);

        
    });
});
// 3- Game over : si l'ennemi s'approche trop du centre la partie s'arrête
describe ("Space Invaders - Math Utils", () => {
    it("Game Over: le jeu s'arrête quand un ennemi touche le centre", () =>{
        // on vide les ennemis
        enemies.length = 0;
        // on crée un ennemi au centre
        enemies.push(createEnemy(Type.Basic,{angle: 0 , radius:10}));
        const resultat = calculate({
            input: {axes: {x:0 , y:0}, fire: false},
            deltaTime:0.1,
            addPoints: () => {},
        });
        expect(resultat.gameOver).toBe(true);
    });
});

    

