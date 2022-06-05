import { useEffect, useState } from "react";
import { fetchAllProductos } from "../helpers/fetchAllProductos";
import { Producto } from "../interfaces/fetchAllProductoResponse";

export const useProducto = () => {
    const [isLoading, setisLoading] = useState(true);
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        fetchAllProductos().then(productos => {
            setisLoading(false);
            setProductos(productos);
        });
    }, [])

    return { isLoading, productos };
}
