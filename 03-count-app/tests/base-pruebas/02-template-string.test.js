import { getSaludo } from "../../src/base-pruebas/02-template-string.js";

describe("Pruebas 02-template-string", () => {
  test('getSaludo debe retornar "hola Josue"', () => {
    const name = "josue";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
