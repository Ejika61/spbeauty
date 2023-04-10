import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex raw mt-5'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <div className='col'></div>
                <span class="border border-#E2E8F0"></span>
                <Addresses/> {/* Список доступных адресов заведений */}
                <div className='col'></div>
            </div>
        </div>
    );
}

export default AboutCompany;