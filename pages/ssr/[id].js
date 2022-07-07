import styles from '../../styles/Details.module.css'
import Link from "next/link"
import Head from 'next/head'



export default function Details(){
    const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
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