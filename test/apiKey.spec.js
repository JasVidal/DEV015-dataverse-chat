import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Declaramos constante
    const key = "apiKey";
    // Simulación de apiKey
    localStorage.setItem("apiKey", key);
    // Obtener el valor usando función
    const llamarApikey = getApiKey();
    // El resultado debe ser string
    expect(llamarApikey).toBe(key);
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    const key = "apiKey";
    // Set apikey recibe solo un parámetro, key es valor que se establece por usuario
    setApiKey(key);
    // LocalStorage guarda y to be llama a key que es el valor de key
    expect(localStorage.getItem("apiKey")).toBe(key);
  });
});
