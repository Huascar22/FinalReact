import Guitar from "./components/Guitar"
import Header from "./components/Header"
import useCart from "./Hooks/useCart"

function App() {
  const { AddToCard,incrementar,discrementar,
    cleanCart, data, cart, removeFromCart} = useCart();

  return (
    <>
    <Header 
      cart = {cart}
      removeFromCart = {removeFromCart}
      incrementar = {incrementar}
      discrementar ={discrementar}
      cleanCart = {cleanCart}
    />
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
            {data.map((guitar)=>(
              <Guitar
                key = {guitar.id}
                guitar = {guitar}
                AddToCard = {AddToCard}
              />            
            ))}              
        </div>
    </main>
    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
