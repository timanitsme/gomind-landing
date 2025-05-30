import Onboarding from "../../components/Onboarding/Onboarding.jsx";
import OurProjects from "../../components/OurProjects/OurProjects.jsx";
import OurStack from "../../components/OurStack/OurStack.jsx";

export default function IndexPage({ourProjectsRef, stackRef}){
    return(
        <>
            <Onboarding/>
            <OurProjects ref={ourProjectsRef}/>
            <OurStack ref={stackRef}/>
        </>
    )
}