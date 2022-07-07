import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export async function  getServerSideProps(){
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
    const Pokimons = await fetch(`${url}/index.json`).then(resp=>resp.json());
    return {
        props:{
            Pokimons
        }
    }
}

export default function Details({Pokimons}){
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
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
