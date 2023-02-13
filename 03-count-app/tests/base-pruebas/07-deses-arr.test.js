import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses", () => {
  test("Debe de retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toStrictEqual(expect.any(String));
    expect(numbers).toStrictEqual(expect.any(Number));
  });
});
