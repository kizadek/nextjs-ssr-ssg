import Link from "next/link"
import Head from 'next/head'
import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import styles from '../../styles/Details.module.css'

export default function Details(){
    const [pokemon,setDetails] = useState(null);
    const {query:{id}}=useRouter() 
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
  
    // run the function when ever the id chenges 
    useEffect(  ()=>{
        async function  getDeatils (){
            const resp = await fetch(`${url}/pokemon/${id}.json`).then(res=>res.json())
        setDetails(resp)  

        console.log(pokemon)
    }
    if(id){
        getDeatils()
    }
    },[id])
        if(!pokemon){
            return null
        }
    return( 
    <div className={styles.main}>
       <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content="Pokimon" />
      </Head>
        <div>
            <Link href='/'>
                <a>Back to Home</a>
            </Link>
        </div>
        <div className={styles.layout}>
            <div>
                <img 
                  className={styles.picture}
                 src={`${url}/${pokemon.image}`}
                  alt={pokemon.name.english}
                />
            </div>
            <div>
              <div className={styles.name}>{pokemon.name}</div>
              <div className={styles.type}>{pokemon.type.join(", ")}</div>
            
              <table>
                    <thead className={styles.header}>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.stats.map(({name,value})=>(
                            <tr key={name}>
                                <td className={styles.attribute}>{name}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    )
}