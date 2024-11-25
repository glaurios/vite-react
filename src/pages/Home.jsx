import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Singlepost from "../components/Singlepost"

export default function Home() {
    return (
        <>
            <Nav />
            <Header title="Clean Blog" subTitle="Blog Theme by Start Bootstrap" bgImage="home-bg.jpg"/>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <Singlepost />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}