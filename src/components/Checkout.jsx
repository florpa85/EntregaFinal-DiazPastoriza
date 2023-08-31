import {useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext';
import { collection, addDoc} from "firebase/firestore";
import {db} from "../main"
import { Input, Stack, Button } from '@chakra-ui/react'
import Swal from 'sweetalert2';

const Checkout = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const {cart,setCart, total} = useContext(CartContext);
  const [emailConfirmation, setEmailConfirmation]= useState("")
  const [error, setError]= useState("")
  



  const handleSubmit =(e) =>{
    e.preventDefault();
    if (!name || !email || !telephone || !emailConfirmation){
      setError(Swal.fire({
        icon: 'error',
        text: 'Te faltaron completar datos!',
        
      }))
      return;
    }
    if(email !== emailConfirmation) {
      setError(Swal.fire({
        icon: 'error',
        text: 'Tu e-mail no coincide!',
        
      }))
      return;
      
    }
    addDoc(ordersCollection, order).then(({id}) =>
      setOrderId(id))
      setCart([])
  }
  const order ={
    name,
    telephone,
    email,
    productos: cart,
    total: total 
  }
  
  if (orderId){
      return(
        <div className='gracias'>
          <h2 className='cartName' >Gracias por tu compra!</h2>
          <p>Tu número de orden es: {orderId} </p>
        </div>
      )
    }

  const ordersCollection = collection(db, "orden");
  
  return (
    <div>
      <h1 className='gracias'>Completá tus datos para generar tu orden!</h1>
      <form className='formName' onSubmit={handleSubmit}>

        <Stack spacing={4}>
          <Input  type="text" placeholder='Nombre y Apellido' 
            onChange={(e)=> setName(e.target.value)}/>
          <Input  type="number" placeholder='Telefono' 
            onChange={(e)=> setTelephone(e.target.value)}/>
          <Input  type="text" placeholder='E-mail' 
            onChange={(e)=> setEmail(e.target.value)}/>
          <Input  type="text" placeholder='Confirmar E-mail' 
            onChange={(e)=> setEmailConfirmation(e.target.value)}/>
          <Button type='submit'>Enviar Orden</Button> 
        </Stack>
       
      </form>
     
    </div>

 

  )
}

export default Checkout