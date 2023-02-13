import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toStrictEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("getHeroeById debe de retornar undefined si no existe el id", () => {
    const id = 111;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroeByOwner debe regresar un arreglo de heroes de DC", () => {
    const owner = "DC";
    const heros = getHeroesByOwner(owner);
    expect(heros).toStrictEqual(heroes.filter((hero) => hero.owner === owner));
    expect(heros.length).toBe(3);
  });
  test("getHeroeByOwner debe regresar un arreglo de heroes de Marvel", () => {
    const owner = "Marvel";
    const heros = getHeroesByOwner(owner);
    expect(heros).toStrictEqual(heroes.filter((hero) => hero.owner === owner));
    expect(heros.length).toBe(2);
  });
});
