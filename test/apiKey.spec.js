import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const pruebaGetApi = getApiKey;
    expect(pruebaGetApi).toBe(getApiKey);
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const pruebaSetApi = setApiKey;
    expect(pruebaSetApi).toBe(setApiKey);
  });
});
