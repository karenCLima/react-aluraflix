import Banner from '../../componentes/Banner'
import bannerImage from '../../assets/Banner.svg'
import SectionCategory from '../../componentes/SectionCategory'


const Home = ({categorias, videos})=>{
    return(
        <>
            <Banner bannerImage = {bannerImage}/>
            <SectionCategory categorias={categorias} videos={videos}/>
            
        </>
    )
}

export default Home