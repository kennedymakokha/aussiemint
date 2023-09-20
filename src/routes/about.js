import { ArrowListItem, TitleOver } from "../components";
import Layout from "../components/layout";
import bg from './../assets/slider3.jpeg'

export default function About() {

    return (
        <Layout details={{ title: "about-us", bg }}>
            <TitleOver title="Vision" fontSize="18px" color="black" />
            <div className="flex w-full h-3/4 bg-gold">

            </div>
            {/* <ArrowListItem /> */}
        </Layout>
    );
}

