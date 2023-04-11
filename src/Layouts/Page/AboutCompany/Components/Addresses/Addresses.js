import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column col gap-2 justify-content-between p-4 border rounded-3 ms-5'>
            <div className='d-inline-flex flex-column gap-3'>
                <div> className='text-rg'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}
export default Addresses;
