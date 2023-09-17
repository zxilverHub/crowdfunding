import React from 'react'
import "./App.css"

import { Header, Thankyou } from "./components/Index"
import MainSection from './containers/MainSection'
import MainAppModal from './containers/MainAppModal'

function App() {
  
  return (
    <>
      <Header />
      <MainSection />
      <MainAppModal />
      <Thankyou />
    </>
  )
}

export default App