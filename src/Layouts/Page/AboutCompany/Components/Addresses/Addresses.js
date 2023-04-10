import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2 mt-4'>
            <span class="border border-#E2E8F0"></span>
            <div className='text-rg'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className='d-inline-flex flex-column mt-8'>   
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
        </div>
    );
}
export default Addresses;