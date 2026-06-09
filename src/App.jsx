import { useState } from 'react'
import './App.css'
import Login from './Login'
import Catalog from './Catalog'

function App() {
  const [user, setUser] = useState(null)
  const [purchases, setPurchases] = useState([])

  const cars = [
    { id: 1, name: 'Ford Mustang', year: 2024 },
    { id: 2, name: 'Chevrolet Camaro', year: 2023 },
    { id: 3, name: 'Porsche 911', year: 2024 },
    { id: 4, name: 'Tesla Model S', year: 2025 },
  ]

  function handleLogin(u) {
    setUser(u)
  }

  function handleLogout() {
    setUser(null)
    setPurchases([])
  }

  function handleBuy(car) {
    setPurchases((prev) => [...prev, car])
    // simple confirmation
    setTimeout(() => alert(`Compra confirmada: ${car.name}`), 80)
  }

  return (
    <div className="app-bg">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <main className="app-main">
          <header className="app-header">
            <h1>Bienvenido, {user.name}</h1>
            <div className="header-actions">
              <div className="cart">En carrito: {purchases.length}</div>
              <button className="btn-secondary" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          </header>

          <section className="content">
            <Catalog cars={cars} onBuy={handleBuy} purchases={purchases} />
          </section>
        </main>
      )}
    </div>
  )
}

export default App
