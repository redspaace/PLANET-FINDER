import { useDispatch } from 'react-redux';
import axios from 'axios';

function useApiRequest() {
  const dispatch = useDispatch();
  const api = axios;
  request();

  async function request() {
    try {
      for(let id=1; id <= 20; id++) {
        const response = await api(`https://swapi.dev/api/planets/${id}/`);
        const planet = response.data;
  
        // Condição necessária, pois há um planeta na API que está sem registros.
        if(planet.name != 'unknown') 
          dispatch({ type: 'ADD_IN_PLANET_LIST_ARR', value: planet });
      } 
  
      console.log(`API consultada com sucesso!`);
    } catch (err) {
      console.log(`Falha na consulta da API! \n ${err}`);
    }
  }
}

export default useApiRequest;

// Código talvez reutilizável.
// dispatch({ type: 'UPDATE_PLANET_NAME', value: data.name });
// dispatch({ type: 'UPDATE_CLIMATE', value: data.climate });
// dispatch({ type: 'UPDATE_POPULATION', value: data.population });
// dispatch({ type: 'UPDATE_DIAMETER', value: data.diameter });