import {Notification} from "../../components/Notification/Notification";
import {Header} from "../../components/Header/Header";
import { MainSection } from "../../components/MainSection/MainSection";
import { Cateogry } from "../../components/CategorySection/Category";
import { ImageSection } from "../../components/ImageSection/ImageSection";

export function LandingPage() {
    return (
        <div>
            <Notification />
            <Header /> 
            <MainSection />
            <Cateogry />
            <ImageSection />
        </div>
    )
}