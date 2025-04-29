import { BestPlaceEat } from "./BestPlaceEat";
import { CarouselOne } from "./CarouselOne/CarouselOne";
import { CarouselTwo } from "./CarouselTwo";
import { ResWithOnlineFood } from "./ResWithOnlineFood/ResWithOnlineFood";


export const Home = () => {

    return (
        <>
            {/* home carouselOne  */}
            <CarouselOne/>

            <CarouselTwo/>

            <ResWithOnlineFood/>

            <BestPlaceEat/>

        </>
    );
};