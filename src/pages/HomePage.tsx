import { Loading } from "../components/Loading";
import { ProductoCard } from "../components/ProductoCard";
import { useProducto } from "../hooks/useProducto";
import { Producto } from "../interfaces/fetchAllProductoResponse";
import { Fragment } from 'react';

require("./HomePage.css");

export const HomePage = () => {
  const { isLoading, productos } = useProducto();

  return (
    <Fragment>
      <div className="mt-5">
        <div className="row">
          {
            productos.map((producto: Producto) => (
              <ProductoCard key={producto.id} {...producto} />
            ))
          }
        </div>
        {
          isLoading && <Loading />
        }
      </div>
    </Fragment>
  )
}
