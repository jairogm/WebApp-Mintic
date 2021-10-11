import React from "react";
import "./css/administrar-venta.css";

function AdministrarVenta() {
  return (
    <div className="adminsitar-ventas">
      <div className="tabla-productos">
        <table>
          <tr>
            <th>ID Producto</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio</th>
          </tr>
          <tr>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
          </tr>
          <tr>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
          </tr>
          <tr>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
          </tr>
          <tr>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
            <td>Lorem</td>
          </tr>
        </table>
      </div>
      <div className="total-container">
        <div className="total-detail">
          <h4>Subtotal:</h4>
          <h4>Envio:</h4>
          <h4>Total:</h4>
          <div className="dropBtn">
            <form>
              <label for="metodo-pago">Metodo de Pago:</label>
              <select name="metodo-pago" id="metodo-pago">
                <option value="combobox">ComboBox</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      <div className="form-datos-envio">
        <h2>Datos de envio</h2>
        <form>
          <label>Nombre del Cliente: </label>
          <input type="text" />

          <label> Direccion: </label>
          <input type="text" />

          <label>Email: </label>
          <input type="email" required />

          <label>Telefono: </label>
          <input type="tel" required />

          <label for="metodo-pago">Asignar venta:</label>
            <select name="metodo-pago" id="metodo-pago">
              <option value="combobox">ComboBox</option>
              
            </select>
            <div className="guardar-venta">
          <button>Guardar</button>
        </div>
        </form>
      </div>
      </div>
   
  );
}

export default AdministrarVenta;
