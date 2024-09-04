export const getApiKey = () => {
    alert( localStorage.getItem('test') ); // 1
    // Implementa el código para obtener la API KEY desde Local Storage
 };
 
 export const setApiKey = (key) => {
    localStorage.setItem('test', 1);
   // Implementa el código para guardar la API KEY en Local Storage
 };