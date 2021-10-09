import React from 'react'
import "./css/administrar-venta.css"
function AdministrarVenta() {
    return (
        <div>
        
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

    <div class="total-container">
      <div class="total-detail">
        <h4>Subtotal:</h4>
        <h4>Envio:</h4>
        <h4>Total:</h4>
        <div class="dropBtn">
          <form>
            <label for="metodo-pago">Metodo de Pago:</label>
            <select name="metodo-pago" id="metodo-pago">
              <option value="combobox">ComboBox</option>
            </select>
          </form>
        </div>
      </div>
    </div>

    <div class="form-datos-envio">
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
      </form>
    </div>

    <div class="buttons">
      <div class="drop-btn">
        <form>
          <label for="metodo-pago">Asignar venta:</label>
          <select name="metodo-pago" id="metodo-pago">
            <option value="combobox">ComboBox</option>
          </select>
        </form>
      </div>

      <button>Guardar</button>
    


        </div>
        </div>
    )
}

export default AdministrarVenta;
