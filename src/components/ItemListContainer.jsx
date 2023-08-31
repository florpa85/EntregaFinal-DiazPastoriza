
import  { useEffect, useState } from 'react'
import {collection, getDocs, query, where} from "firebase/firestore"
import ItemList from './ItemList'
import {db} from "../main"
import { useParams } from 'react-router-dom'
import React from 'react'




const ItemListContainer = () => {
   
    
    const[products, setProducts] =useState([])

    const [titulo, setTitulo] = useState("")

    const category = useParams().categoryId
    
   

    useEffect(()=>{
        

        const itemsCollection = collection(db, "Platos");
        const q = category ? query(itemsCollection, where("categoryId", "==", category)) : itemsCollection;
        

        getDocs(q).then((snapshot)=>{

            
            setTitulo(category)
            setProducts (snapshot.docs.map((doc)=> ({...doc.data(), 
                id: doc.id,
            })
             ))
        
        
    })},[category])

    
    return (

            <div className='itemsCol'>
                <ItemList productos={products} titulo={titulo}/> 
                
            </div>

    )
}

export default React.memo (ItemListContainer);