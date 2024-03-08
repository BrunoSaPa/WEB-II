// Datos de ejemplo
const products = [
    { id: 1, name: 'Insumo A', price: 10, stock: 50 },
    { id: 2, name: 'Insumo B', price: 15, stock: 20 },
    { id: 3, name: 'Insumo C', price: 8, stock: 75 },
  ];
  
  const orders = [
    { id: 1, items: [{ product: 1, quantity: 5 }], status: 'pendiente' },
    { id: 2, items: [{ product: 2, quantity: 3 }], status: 'en fabricación' },
    { id: 3, items: [{ product: 3, quantity: 10 }], status: 'terminado' },
  ];
  
  // Renderizar catálogo de productos
  function renderCatalog() {
    const catalogSection = document.getElementById('catalog');
    catalogSection.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button>Agregar al carrito</button>
      `;
      catalogSection.appendChild(productElement);
    });
  }
  
  // Renderizar historial de pedidos
  function renderOrderHistory() {
    const orderHistorySection = document.getElementById('order-history');
    orderHistorySection.innerHTML = '';
  
    orders.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.innerHTML = `
        <h3>Pedido #${order.id}</h3>
        <p>Estado: ${order.status}</p>
        <ul>
          ${order.items.map(item => `<li>${products.find(p => p.id === item.product).name} x ${item.quantity}</li>`).join('')}
        </ul>
      `;
      orderHistorySection.appendChild(orderElement);
    });
  }
  
  // Llamar a las funciones para renderizar los componentes
  renderCatalog();
  renderOrderHistory();