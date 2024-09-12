import { communicateWithOpenAI } from '../src/utils/openAIApi.js';
import { data } from '../test/data.js';

describe('communicateWithOpenAI', () => {
  test('communicateWithOpenAI', () => {
    return communicateWithOpenAI(txtInput,data).then(data => {
      expect(data).toBe('Hola Mundo');
    });
  });
});
