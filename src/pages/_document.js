import { Html, Head, Main, NextScript } from 'next/document'
import React,{useState} from 'react';
// import { useRouter } from 'next/navigation';

export default function Document() {
  const [bodyCsss, setBodyClass] = useState('py-5');
  // const router = useRouter();
  <script
  dangerouslySetInnerHTML={{ __html: `
  
  if(location.pathname =='/login'){
    setBodyClass('login');
  }else{
    setBodyClass('py-5');
  
  }
` }}
/>
//alert();

  return (
    <Html lang="en">
      <Head>

       </Head>
      {/* <body class={router.pathname =='/login' ? 'login' : 'py-5' }> */}
      <body className={bodyCsss}>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
