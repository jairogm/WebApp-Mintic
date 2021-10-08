import React from 'react'

function administrar_venta() {
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



        </div>
    )
}

export default administrar_venta
