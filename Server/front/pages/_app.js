import 'antd/dist/antd.css'
import React from 'react'
import Head from 'next/head'

import wrapper from '../store/configureStore.js'


const App=({Component})=>{
    return (
        <>
         <Head>
        <title>NodeBird</title>
      </Head>
        <Component></Component>
        </>
    )
}

export default wrapper.withRedux(App)
// export default App