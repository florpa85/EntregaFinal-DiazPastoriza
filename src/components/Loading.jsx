import {useEffect, useState} from 'react'



const Loading = () => {
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  if(loading){

    return (
      <div>Cargando Elementos...</div>
    )
  }
  
 
}

export default Loading