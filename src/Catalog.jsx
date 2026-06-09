import heroImg from './assets/hero.png'

export default function Catalog({ cars, onBuy, purchases }) {
  return (
    <div className="catalog">
      <div className="catalog-header">
        <h2>Catálogo de autos</h2>
        <div>Comprados: {purchases.length}</div>
      </div>
      <div className="cards">
        {cars.map((car) => (
          <div className="card" key={car.id}>
            <img src={heroImg} alt={car.name} />
            <div className="card-body">
              <h3>{car.name}</h3>
              <p>Año: {car.year}</p>
              <div className="card-actions">
                <button className="btn-primary" onClick={() => onBuy(car)}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
