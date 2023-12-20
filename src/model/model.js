import { readFileSync } from "node:fs";

const PATH = "../database/db-turis.json";

const cleanData = () => {
  const bufferData = readFileSync(PATH);
  const parsedData = JSON.parse(bufferData);
  return parsedData.provincias; //tiene que entrar a provincias porque sino no me lee el metodo find
};

// const prueba = cleanData()
// console.log(prueba);

/*Crear un método getCitiesBySurface(surface) -> el mismo recibirá la supercie como parametro y
 deberá devolver un array con todas las ciudades que posean mayor o igual superficie que la pasada
  por parametro. Los elementos del array deben tener solo tres propiedades:
   "nombre", "superficie_km2" y "habitantes". 
   [ { "nombre": "Buenos aires", "superficie_km2": 19283189, "habitantes": 12387192 }, { "nombre": "Santa Fe", "superficie_km2": 81289, "habitantes": 91919 } ] */

const getCitiesBySurface = (surface) => {
  const datosLimpios = cleanData();

  const ciudadFiltrada = datosLimpios.filter(
    (ciudad) => ciudad.superficie_km2 >= surface
  );

  const ciudadesMappeadas = ciudadFiltrada.map(
    ({ nombre, superficie_km2, habitantes }) => ({ //!ESTO DEBERIA SER UN INTERFAZ
      nombre,
      superficie_km2,
      habitantes,
    })
  ); //

  return ciudadesMappeadas;
};

// const ciudadesDato = getCitiesBySurface(155488);
// console.log(ciudadesDato);


/* 
Crear un método que se llame getToursByCapital(capital) -> 
Esta función debe retornar el array con todos los puntos turisticos.
 [ { "nombre": "Parque Nacional El Palmar", "tipo": "Parque Nacional", "atracciones": ["Palmares", "Senderismo"] },
  { "nombre": "Rosario", "tipo": "Ciudad", "atracciones": ["Monumento a la Bandera", "Parque Independencia"] } ]
*/

const getToursByCapital = (capital) => {
    const datosLimpios = cleanData();

    const ciudadFiltrada = datosLimpios.find((provincia) => provincia.capital.toLowerCase() === capital.toLowerCase());

    const tourDot = ciudadFiltrada.lugares_turisticos.map((lugar) => ({ //& INTERFAZ
        nombre: lugar.nombre,
        tipo: lugar.tipo,
        atracciones: lugar.atracciones,
      }));
    
      return tourDot;

}

const capital = getToursByCapital('SALTA');
console.log(capital);