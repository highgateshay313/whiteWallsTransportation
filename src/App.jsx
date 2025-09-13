import { useState } from 'react'
import Header from './Header'
import HeaderInfo from './HeaderInfo'
import HeaderInfoText from './HeaderDivider'
import InfoSection from './InfoSection'
import ComeRide from './ComeRide'
import Map from './Map'
import './App.css'

function App() {
 return (
    <main>
        <Header />
        <HeaderInfo />
        <HeaderInfoText />
        <InfoSection />
        <ComeRide />
        <Map/>
    </main>
    
  )
}

export default App
