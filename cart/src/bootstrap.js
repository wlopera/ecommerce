import faker from "faker";

const mount = (el) => {
  const cartText = `<div>Tu tienes ${faker.random.number()} artículos en tu carrito</div> `;

  console.log("Cart: ", cartText);
  el.innerHTML = cartText;
};

/**
 * Escenario 1:
 * -----------
 *  + Estamos corriendo la aplicacion solo en desarrollo
 *  + Estamos usando nuestro index.html (local)
 *  + Existe un identificador (cart-dev)
 *  + Queremos renderizar inmediatamente al elemento
 */
if (process.env.NODE_ENV === "development") {
  // Asumiendo que nuestro contanedor no tiene un elemento con identificador 'cart-dev'
  const el = document.querySelector("#cart-dev");

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