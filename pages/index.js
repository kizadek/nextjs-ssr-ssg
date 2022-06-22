import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
  const [Pokimons,setPokimon] = useState([]);

  //fetch data 
  useEffect(()=>{
    async function getPokeemon() {
      const res = await fetch(`${url}/index.json`).then(res=>res.json());
      setPokimon( res);
    }
    getPokeemon();
  },[]);
    
  if(!Pokimons){
    return null
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokimon List</title>
        <meta name="description" content="Pokimon" />
      </Head>

        <div className={styles.grid}>
              {Pokimons.map(pokimon=>(
                <div className={styles.card} key={pokimon.id}>
                    <Link href={`/pokemon/${pokimon.id}`} alt={pokimon.name} >
                    <a>
                      <img 
                      src={`${url}/${pokimon.image}`}
                      alt={pokimon.name}
                      />
                    </a>
                    </Link>
                </div>
              ))}
               <h1>hi</h1>
        </div>
    </div>
  )
}
