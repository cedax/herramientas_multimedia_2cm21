import { useState } from 'react';
import { Producto } from '../interfaces/fetchAllProductoResponse';

export const useCarritoDeCompra = () => {
    const [productos, setProductos] = useState<Producto[]>([]);

    const agregarProducto = (producto: Producto) => {
        setProductos([...productos, producto]);
    }

    const eliminarProducto = (producto: Producto) => {
        setProductos(productos.filter(p => p.id !== producto.id));
    }

    return { productos, agregarProducto, eliminarProducto };
}