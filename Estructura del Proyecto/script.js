// Obtener elementos de navegación
const inicioBtn = document.getElementById('inicio');
const ventasBtn = document.getElementById('ventas');
const inventarioBtn = document.getElementById('inventario');

// Obtener las secciones
const inicioSection = document.getElementById('inicio-section');
const ventasSection = document.getElementById('ventas-section');
const inventarioSection = document.getElementById('inventario-section');

// Función para ocultar todas las secciones
function ocultarSecciones() {
  inicioSection.classList.remove('seccion-activa');
  ventasSection.classList.remove('seccion-activa');
  inventarioSection.classList.remove('seccion-activa');
}

// Función para mostrar la sección de inicio
inicioBtn.addEventListener('click', function() {
  ocultarSecciones();
  inicioSection.classList.add('seccion-activa');
});

// Función para mostrar la sección de ventas
ventasBtn.addEventListener('click', function() {
  ocultarSecciones();
  ventasSection.classList.add('seccion-activa');
});

// Función para mostrar la sección de inventario
inventarioBtn.addEventListener('click', function() {
  ocultarSecciones();
  inventarioSection.classList.add('seccion-activa');
});

// Función para registrar una venta
const formVenta = document.getElementById('formVenta');
const productoInput = document.getElementById('producto');
const cantidadInput = document.getElementById('cantidad');
const precioInput = document.getElementById('precio');
const tablaVentas = document.getElementById('tablaVentas');
const mensajeDiv = document.getElementById('mensaje');

formVenta.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir la acción por defecto (recargar la página)

  const producto = productoInput.value;
  const cantidad = parseInt(cantidadInput.value);
  const precio = parseFloat(precioInput.value);

  if (!producto || isNaN(cantidad) || isNaN(precio)) {
    mensajeDiv.textContent = "Por favor, ingresa todos los campos correctamente.";
    mensajeDiv.style.color = 'red';
    return;
  }

  const total = cantidad * precio;
  const nuevaFila = document.createElement('tr');

  const celdaProducto = document.createElement('td');
  celdaProducto.textContent = producto;

  const celdaCantidad = document.createElement('td');
  celdaCantidad.textContent = cantidad;

  const celdaTotal = document.createElement('td');
  celdaTotal.textContent = `S/ ${total.toFixed(2)}`;

  const celdaFecha = document.createElement('td');
  const fechaActual = new Date().toLocaleDateString();
  celdaFecha.textContent = fechaActual;

  nuevaFila.appendChild(celdaProducto);
  nuevaFila.appendChild(celdaCantidad);
  nuevaFila.appendChild(celdaTotal);
  nuevaFila.appendChild(celdaFecha);

  tablaVentas.appendChild(nuevaFila);

  productoInput.value = '';
  cantidadInput.value = '';
  precioInput.value = '';

  mensajeDiv.textContent = "Venta registrada correctamente.";
  mensajeDiv.style.color = 'green';
});
