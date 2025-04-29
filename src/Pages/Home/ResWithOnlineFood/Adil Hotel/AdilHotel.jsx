import { MainCourse } from "./MainCourse/MainCourse ";
import { MustTryCombos } from "./MustTryCombos";
import { Recom } from "./Recom";
import { RiceBiryanis } from "./RiceBiryanis";
import { RotiQuickBites } from "./RotiQuickBites";
import { Starter } from "./Starter";

export const AdilHotel = () => {
    return (
        <>
            <Recom/>
            <Starter/>
            <MainCourse/>
            <MustTryCombos/>
            <RiceBiryanis/>
            <RotiQuickBites/>
        </>
    );
};