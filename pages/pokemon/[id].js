import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import Link from "next/link"
import styles from '../../styles/Details.module.css'

export default function Details(){
    const [details,setDetails] = useState({});
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
    useEffect(  ()=>{
        async function  getDeatils (){
        const res = fetch(`${url}/pokemon/${id}.json`).then(res=>res.json());
        setDetails(res)

        console.log(details)
        } 
        getDeatils()
    },[])

    
    const {query:{id}}=useRouter() 
    return <div className={styles.container}>Hallo - s{id}</div>
}