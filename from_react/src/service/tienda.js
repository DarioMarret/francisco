import { local_carrito } from './util/constante'
let CarritoProducto = [];
export const AgregarAlCarrito = (id, nombre, precio) => {
  VerCarritoItn();
  let cantidad = 1;
  let info = {
    id: id,
    cantidad: cantidad,
    precio: precio,
    nombre: nombre,
  };
  const existe = CarritoProducto.some(producto => producto.id === info.id);
  if (existe) {
    //Actualizamos la cantidad
    const productos = CarritoProducto.map(iten => {
      if (iten.id === info.id) {
        iten.cantidad++;
        return iten; //retorna la cantidad actualizada
      } else {
        return iten; // retorna los objetos que no son actualizado
      }
    });
    CarritoProducto = [...productos];
    localStorage.setItem(`${local_carrito}`, JSON.stringify(CarritoProducto));
  } else {
    // Agregamosn al carrito
    CarritoProducto = [...CarritoProducto, info];
    localStorage.setItem(`${local_carrito}`, JSON.stringify(CarritoProducto));
  }
};

const VerCarritoItn = () => {
  let iten = JSON.parse(localStorage.getItem(`${local_carrito}`));
  if (iten !== null) {;
    CarritoProducto = [];
    CarritoProducto = iten;
  }
};

//optener los productos y la cantidad
export const getProductoLocalStora=()=>{
    let iten = JSON.parse(localStorage.getItem(`${local_carrito}`));
    if (iten){
        return iten
    }else{
        return null;
    }
}
//eliminar del carrito de compra por id
export const EliminarIdStoragen=async(id)=>{
  let array = localStorage.getItem(`${local_carrito}`);
  let CarritoProducto = []
  CarritoProducto = JSON.parse(array).filter(carrito=> carrito.id !== id)
  localStorage.setItem(`${local_carrito}`,JSON.stringify(CarritoProducto));
  return true;
}
//actualizar la contidades de productos elegidos
export const ActualizarCantidadMas=async(id,cantidad)=>{
  let array = JSON.parse(localStorage.getItem(`${local_carrito}`));
  const existe = array.some(iten => iten.id === id)
  if(existe){
    const producto = array.map(iten =>{
      if(iten.id === id){
        iten.cantidad++;
        return iten;
      }else{
        return iten;
      }
    });
    let NCarrito = [];
    NCarrito = [...producto]
    localStorage.setItem(`${local_carrito}`,JSON.stringify(NCarrito))
  }
}
//decrementar la cantidad de los productos ya elegidos
export const DisminurCantidadMas=async(id,cantidad)=>{
  if(cantidad !== 1){
    let array = JSON.parse(localStorage.getItem(`${local_carrito}`));
    const existe = array.some(iten => iten.id === id)
    if(existe){
      const producto = array.map(iten =>{
        if(iten.id === id){
          iten.cantidad--;
          return iten;
        }else{
          return iten;
        }
      });
      let NCarrito = [];
      NCarrito = [...producto]
      localStorage.setItem(`${local_carrito}`,JSON.stringify(NCarrito))
    }
  }
}
//limpiar el carro de compra despues de aver pagado
export const LimpiarLocalStorage=async()=>{
  localStorage.removeItem(`${local_carrito}`)
  CarritoProducto = [];
}