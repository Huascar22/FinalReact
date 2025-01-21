import {db} from "../data/db.js"
import {useEffect, useState} from "react"

const useCart = () => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart? JSON.parse(localStorageCart) : []
    }
  
    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)
    const Max_Item = 5;
    const Min_Item = 1;
  
    useEffect(()=>{
      saveLocalStorage()
    }, [cart])
  
    function AddToCard(guitar){
      const itemExist = cart.findIndex(C => C.id === guitar.id)
      if(itemExist > -1){
        if(cart[itemExist].cantidad < Max_Item){
          const cartUpdate = [...cart];
          cartUpdate[itemExist].cantidad ++
          setCart(cartUpdate)
        }  
      }else{
        guitar.cantidad = 1;
        setCart([...cart, guitar])
      }
  
      saveLocalStorage();
    }
  
    function removeFromCart(id){
      const cartNew = cart.filter(guitar => guitar.id !== id);
      setCart(cartNew);
    }
  
    function incrementar(id){
      const newCart = cart.map((item) => {
          if(item.id === id && item.cantidad < Max_Item){
            return{
              ...item,
              cantidad: item.cantidad + 1
            }
          }
          return item
      })
      setCart(newCart)
    }
  
    function discrementar(id){
      const newCart = cart.map((item) => {
          if(item.id === id && item.cantidad > Min_Item){
            return{
              ...item,
              cantidad: item.cantidad - 1
            }
          }
          return item
      })
      setCart(newCart)
    }
  
    function cleanCart(){
      setCart([])
    }
  
    function saveLocalStorage(){
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
  return {
    AddToCard,
    incrementar,
    discrementar,
    cleanCart, 
    data,
    cart, 
    removeFromCart
    }
}

export default useCart