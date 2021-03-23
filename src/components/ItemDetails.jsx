import axios from 'axios';
import {useParams} from "react-router-dom"


export default function ItemDetails(){


  const {id} = useParams();

  return(
    <>
      <h1>Detail de l'item</h1>
      <h1>c'est l'id : {id}</h1>
    </>

  )
}