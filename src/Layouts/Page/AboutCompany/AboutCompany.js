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
                <Addresses/> {/* Список доступных адресов заведений */}
                    border-radius: 12px;
                    border: solid #E2E8F0 1px;
                <div className='col'></div>
            </div>
        </div>
    );
}

export default AboutCompany;