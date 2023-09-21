import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import About_img from './../assets/images/about_us.png'

export default function Refining() {

    return (
        <Layout details={{ display_name: " about us", sht_desc: "More about Aussiemint", title: "about-us", bg }}>
            <div className='bg-Refinery_bg h-full w-full flex-col '>
                <div className="w-full h-full">ken</div>
                <div className="w-full h-full">Makookha</div>
                {/* <Footer /> */}
            </div>
        </Layout>
    );
}

