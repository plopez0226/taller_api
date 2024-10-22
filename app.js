const apiUrl = 'https://rickandmortyapi.com/api/character';

// Función para hacer la solicitud a la API y mostrar los personajes
async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();

        console.log(data);
        // como ejemplo, mouestro los nombres de los personajes
        const characters = data.results;
        characters.forEach(character => {
            console.log(`Nombre: ${character.name}`);
        });   
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
// Llamada a la función para obtener los personajes
fetchCharacters();