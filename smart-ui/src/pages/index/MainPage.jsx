import './MainPage.scss';
import benefitimg from '../../img/icon.png'
import CardBenefit from '../../components/cards/CardBenefit';
import MainSwiper from '../../components/Slider/MainSwiper';
import {Link} from 'react-router-dom';


function Index() {

// 0-description 1- title 2- img
let cardkey =0;
const cards = [];
cards[0]= [
    "description1",
    "title1",
    benefitimg,

]
cards[2]= [
    "description2",
    "hello 2",
    benefitimg,
]
cards[3]= [
    "degf scription2",
    "hellogfg  2",
    benefitimg,
]
cards[4]= [
    "degf fdf scription2",
    "hel dfflogfg  2",
    benefitimg,
]
cards[5]= [
    "intrestion title",
    "amaizing ",
    benefitimg,
]

let cardrender= cards.map(elem =>{
    cardkey++;
    return  <CardBenefit key={"cardkey"+cardkey }d={elem[0]} t={elem[1]} i={elem[2]}/> ;
})


return(
<>
    <section className="hero">
        <div className="container">


            <div className="grid">
                <div className="grid-item width-1-2-m">
                    <h1>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusandae, at quaerat
                        similique obcaecati dolorum voluptatem nemo
                        perspiciatis cupiditate consequatur excepturi!</h1>
                </div>
                <div className="grid-item width-1-2-m">

                </div>
            </div>

        </div>
    </section>

    <section id="about" className="section section-about">
        <h2 className="section-title">
            About
        </h2>
        <p className=" .section section-description">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit <br />
            nihil voluptatem
            sapiente asperiores repellat cumque?
        </p>
    </section>

    <section id="benefits" className="section section-benefits">

        <h2 className="section-title">Our Benefits</h2>
<div className="container">
<div className="grid">
               {cardrender}  
            </div>
</div>
    


    </section>

    <section id="people" className="section section-our-people">
        <div className="container">
   <h2 className="section-title">Our People</h2>
        {/* <MainPageSlider/> */}

        <MainSwiper/>
        </div>

    </section>

    <section id="join" className="section section-join">
<h2 className="section-title">Join Our Talent Community</h2>
<p className="section-description"> It is amaizing team</p>
<Link className="button button-join" to="/Signup">Join Us</Link>
    </section>
</>

);
}

export default Index;