import Head from 'next/head'
import Navbar from '../components/Navbar'
import CollectionsBody from '../components/CollectionsBody'
// import { useWeb3 } from '@3rdweb/hooks'
// import { useRouter } from 'next/router'
// import { ThirdwebSDK } from '@3rdweb/sdk'



// let collectionId: any

function Collections() {
  //router.query

  console.log()

  return (
    <div className={``}>
      <Head>
        <title>Enefti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CollectionsBody/>
    </div>
  )
}


export default Collections

