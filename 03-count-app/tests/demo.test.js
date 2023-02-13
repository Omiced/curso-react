describe("pruebas en el <demoComponent/>", () => {
  test("esta prueba no debe de fallar", () => {
    //1. Inicialización
    const message1 = "Hola mundo";
    //2. Estímulo
    const message2 = message1.trim();
    // 3. aserción obeservar el comportamiento
    expect(message1).toBe(message2);
  });
});
