import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ choices: [{ message: { content: 'Hola mundo' } }] }),
  })
);

describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI debe devolver una respuesta de la API", () => {
    const messages = "cómo te llamas?"
    const data = { name: 'flor', description: 'hola soy tu mascota'};
    return communicateWithOpenAI(messages, data).then((respuesta) => {
      expect(respuesta.choices[0].message.content).toBe('Hola mundo');
    });
  });
});
