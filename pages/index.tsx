import type { NextPage } from 'next';
import Head from 'next/head';
import PDFList from '../src/components/PDFList';



export async function getStaticProps() {
  const res = await fetch(
    process.env.API_URL as string);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 360,
  }
}

const Home: NextPage = ({ data = [] }: any) => {



  return (
    <>
      <Head>
        <title>PDF Reader with Searching and Navigating</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="small-space ">
        <div className='container'>
          <h1 className='main-title'>PDF Reader with Searching and Navigating</h1>
          <PDFList lists={data} />
        </div>
      </div>
    </>
  )
}

export default Home
