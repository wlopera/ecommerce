import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  console.log("Productos: ", products);
  el.innerHTML = products;
};

/**
 * Escenario 1:
 * -----------
 *  + Estamos corriendo la aplicacion solo en desarrollo
 *  + Estamos usando nuestro index.html (local)
 *  + Existe un identificador (products-dev)
 *  + Queremos renderizar inmediatamente al elemento
 */
if (process.env.NODE_ENV === "development") {
  // Asumiendo que nuestro contanedor no tiene un elemento con identificador 'products-dev'
  const el = document.querySelector("#products-dev");

  // Corriendo de manera aislada en nuestro desarrollo
  if (el) {
    mount(el);
  }
}
/**
 * Escenario 2:
 * -----------
 *  + Estamos corriendo la aplicacion en desarrollo y produccion
 *    este ultimo a traves de un contenedor app
 *  + No hay garantia de que exista un identificador (products-dev)
 *  + No queremos renderizar inmediatamente al elemento de la APP.
 */
export { mount };
