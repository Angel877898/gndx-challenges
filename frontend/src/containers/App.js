import React ,{useState} from 'react'
import Header from '../components/Header'
import '../static/css/Weather.css';
import ListOfCards from '../components/ListOfCards'
import Title from '../components/Title';
import MainWeather from '../components/MainWeather';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer'
import InputSearch from '../components/InputSearch';
import SideMenu from '../components/SideMenu';
export default function App() {
    const [open,setOpen] = useState(false)
    const openHandler = () =>{
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const sidemenuCloseHandler = () =>{
        setOpen(false)
    }

    let sidemenu
    if (open) {
        sidemenu=<SideMenu close={sidemenuCloseHandler} sidemenu={sidemenu} />
    }
    return (
        <>  
            {sidemenu}
            <div className="separator1">
                <Header click={openHandler} />
                <MainWeather/>
            </div>
            
            <div className="separator2">
                <ListOfCards/>
                <Title/>
                <Highlights/>
                <Footer/>       
            </div>
        </>
    )
}
