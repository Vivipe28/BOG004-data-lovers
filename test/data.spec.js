
import { filterData } from "../src/data.js";
import data from "../src/data/ghibli/ghibli.js";

describe("pruebas para la funcion filterData", () => {
  it("verificar que filterData es una funcion", () => {
    expect(typeof filterData).toBe("function");
  });

  it("deberia retornar la pelicula My Neighbor Totoro", () => {
    let tituloPelicula = "totoro";
    const peliculasFiltradas = filterData(data.films, (pelicula) =>
      pelicula.title.toLowerCase().includes(tituloPelicula)
    );
    expect(peliculasFiltradas[0].title).toBe("My Neighbor Totoro");
  });
});
  it("deberia retornar el miercoles", () => {
    const diasDeLaSemanas = filterData(
      [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo"
      ],
      (dato) => dato ==='miercoles'
    );
    expect(diasDeLaSemanas[0]).toBe("miercoles");
  });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');//   });
// });
