import { Producto } from "../interfaces/fetchAllProductoResponse";
require("./ProductoCard.css");

export const ProductoCard = ({ id, thumbnail, price, title }: Producto) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-5 d-flex" key={id}>
            <div className="card" key={id}>
                <div className="imagenDiv">
                    <img className="card-img-top imagen" src={`${thumbnail}`} alt={title} />
                </div>
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text price">${(price/6.25).toFixed(0)}</p>
                    <div className="row botones">
                        <div className="col-7">
                            <button className="btn btn-dark w-100">Detalles</button>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-primary w-100" onClick={() => { 
                                let productos = [];
                                localStorage.getItem('carrito') ? productos = JSON.parse(localStorage.getItem('carrito')!) : productos = [];
                                localStorage.setItem('carrito', JSON.stringify([...productos, { id, thumbnail, price, title }]));
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
