// Importando os Componentes Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando SEU CSS
import "./Carrossel.css";

// Importando Modulos do Carrossel
import { Navigation, Pagination } from 'swiper/modules';
import img from '../../assets/stitch.gif';
import imgs from '../../assets/loginLogo.jpg';

function Carrossel() {

    var items = [
        { img },
        { imgs},
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                            <img src={item.imgs} alt="Imagem do stitch" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel