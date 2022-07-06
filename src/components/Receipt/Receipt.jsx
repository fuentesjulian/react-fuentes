import "./Receipt.css";

function Receipt({ order }) {
  return <>Gracias por tu compra. ID de compra: {order.id}. En breve recibirás un email con detalles del envío!
  <h2>Factura</h2>
          <div className="buyerData">
            <div className="buyerDataField">
              <div className="fieldName">Id</div>
              <div className="fieldData">{order.id}</div>
            </div>
            <div className="buyerDataField">
              <div className="fieldName">Fecha</div>
              <div className="fieldData">{order.date}</div>
            </div>
            <div className="buyerDataField">
              <div className="fieldName">Nombre</div>
              <div className="fieldData">{order.buyer.name}</div>
            </div>
            <div className="buyerDataField">
              <div className="fieldName">Email</div>
              <div className="fieldData">{order.buyer.email}</div>
            </div>
            <div className="buyerDataField">
              <div className="fieldName">Telefono</div>
              <div className="fieldData">{order.buyer.phone}</div>
            </div>
          </div>
          
          
          <div className="orderData">
          <h5>Detalle productos</h5>
            {order.items.map((item) => (
              <div className="orderDataField">
                <div className="itemTitle">{item.title}</div>
                <div className="itemPrice">{item.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</div>
                <div className="itemQuantity"> x{item.quantity}</div>
                <div className="itemSubtotal">{item.subTotal.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</div>
              </div>
            ))}
          </div>
          <h5>Total: {order.total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</h5>
          
          
          </>;
}

export default Receipt;
