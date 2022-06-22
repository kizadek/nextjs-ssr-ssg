import { useEffect,useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head";
//dt function
export default function ItemDetails () {
  const [ditles,setDetails] = useState(null);
  const url = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
   const {query:{id} } = useRouter()
    useEffect(()=>{
      async function getDeatils (){
        const res = await fetch(`${url}/pokemon/${id}.json`).then(res=>res.json())
        setDetails(res)
      }
      getDeatils();
    },[id])

    if(!ditles){
      return null
    }
  return (
    <div>
      <Head>
        <title>{ditles.name}</title>
      </Head>
    <div>details {id} {ditles.name}</div>

    </div>
  )
}
