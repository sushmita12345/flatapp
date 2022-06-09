import {Notification} from "../../components/Notification/Notification";
import {Header} from "../../components/Header/Header";
import { MainSection } from "../../components/MainSection/MainSection";

export function LandingPage() {
    return (
        <div>
           <Notification />
            <Header /> 
            <MainSection />
        </div>
    )
}