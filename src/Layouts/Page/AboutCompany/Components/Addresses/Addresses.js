import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

const
    border-radius: 24px;
    border: solid #E2E8F0 1px;
;

function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2 mt-4'>
            <div className='text-rg'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;