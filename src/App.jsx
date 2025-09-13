import { useState } from 'react'
import Header from './Header'
import HeaderInfo from './HeaderInfo'
import HeaderDivider from './HeaderDivider'
import InfoSection from './InfoSection'
import ComeRide from './ComeRide'
import Map from './Map'
import './App.css'
import MissionStatement from './MissionStatement'
import MissionDivider from './MissionDivider'
import Footer from './Footer'
import CopyWright from './CopyWright'

function App() {
 return (
    <main>
        <Header />
        <HeaderInfo />
        <HeaderDivider />
        <InfoSection />
        <ComeRide />
        <MissionDivider/>
        <MissionStatement/>
        <Map/>
        <Footer/>
        <CopyWright/>
    </main>
    
  )
}

export default App
