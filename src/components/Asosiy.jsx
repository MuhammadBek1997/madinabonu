import React from "react";
import '../assets/styles/Asosiy.css'

const Asosiy = () => {


    let people = [
        {
            img: "./public/images/natasha.jpg",
            ism: "Nattasha Mith",
            hudud: "Sydney, USA",
            description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."



        },
        {
            img: "./public/images/raymond.png",
            ism: "Raymond Galario",
            hudud: "Sydney, Australia",
            description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."



        },
        {
            img: "./public/images/benny.png",
            ism: "Benny Roll",
            hudud: "Sydney, New York",
            description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled."


        }

    ]

    let ourProekt = [
        {
            img: "./public/images/home1.png",
            bino: "Modern Kitchan",
            decor: "Decor / Artchitecture"
        },
        {
            img: "./public/images/home2.png",
            bino: "Modern Kitchan",
            decor: "Decor / Artchitecture",
        },
        {
            img: "./public/images/home3.png",
            bino: "Modern Kitchan",
            decor: "Decor / Artchitecture",
        },
        {
            img: "./public/images/home4.png",
            bino: "Modern Kitchan",
            decor: "Decor / Artchitecture",
        }
    ]

    let articles = [
        {
            id: 1,
            img: "./images/article-img-one.png",
            izoh: "Let’s Get Solution For Building Construction Work",
            sana: "26 December,2022 ",
            button: "Kitchan Design"
        },
        {
            id: 2,
            img: "./images/article-img-two.png",
            izoh: "Low Cost Latest Invented Interior Designing Ideas.",
            sana: "22 December,2022 ",
            button: "Living Design"
        },
        {
            id: 3,
            img: "./images/article-img-three.png",
            izoh: "Best For Any Office & Business Interior Solution",
            sana: "25 December,2022 ",
            button: "Interior Design"
        }
    ]


    return (
        <div className="mainPage">


            <div className="hero">
                <h2>Let Your Home <br />
                    Be Unique</h2>
                <h5> There are many variations of the passages of lorem Ipsum <br />
                    <div className="hero-matn" > fromavailable,variations of the passages.</div> </h5>
                <button className="hero-button">

                    Get Started

                    <img src="./public/images/Vector.png" alt="" />

                </button>
            </div>




            <div className="cards">
                <div className="cards-top">
                    <h2>
                        Project Plan
                    </h2>
                    <p>
                        There are many variations of the <br /> passages of lorem Ipsum from
                        <br />  available, majority.
                    </p>

                    <div className="cards-read-more">
                        Read More
                        <img src="./public/images/Vector.png" alt="" />
                    </div>
                </div>
                <div className="cards-top">
                    <h2>
                        Interior Work
                    </h2>
                    <p>
                        There are many variations of the <br /> passages of lorem Ipsum from
                        <br />  available, majority.
                    </p>

                    <div className="cards-read-more">
                        Read More
                        <img src="./public/images/Vector.png" alt="" />
                    </div>
                </div>
                <div className="cards-top">
                    <h2>
                        Realization
                    </h2>
                    <p>
                        There are many variations of the <br /> passages of lorem Ipsum from
                        <br />  available, majority.
                    </p>

                    <div className="cards-read-more">
                        Read More
                        <img src="./public/images/Vector.png" alt="" />
                    </div>
                </div>
            </div>



            <div className="art">
                <div className="art-top">
                    <h2>We Create The Art <br />
                        Of Stylish Living <br />
                        Stylishly</h2>


                    <p>
                        It is a long established fact that a reader will be  <br /> distracted by the of readable content of a page <br />
                        when lookings at its layouts the points of using <br />
                        that it has a more-or-less normal.
                    </p>


                    <div className="ellipse">
                        <div className="ellipse-call">
                            <img className="five" src="./public/images/Call.svg" alt="" />
                        </div>
                        <div>
                            <h1>012345678</h1>
                            <h6>Call Us Anytime</h6>
                        </div>


                    </div>


                    <button className="art-button">Get Free Estimate
                        <img src="./public/images/Vector.png" alt="" />
                    </button>

                </div>

                <div className="art-bottom">
                    <img src="./public/images/Photo.jpg" alt="logo" />
                </div>

            </div>



            <div className="people">


                {<div className="people-sarlavha">
                    <h1>What the People Thinks
                        <br /> About Us</h1>

                    <div className="people-cards">
                        {people.map((item, index) => {
                            return (
                                <div key={index} className="people-list">
                                    <div className="people-list-item">
                                        <div className="list-img">
                                            <img className="photo-img" src={item.img} alt="" />

                                            <div className="list-text">
                                                <h2>{item.ism}</h2>
                                                <h3>{item.hudud}</h3>
                                            </div>
                                        </div>

                                        <p>{item.description} </p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}


            </div>



            <div className="imgs">
                <img src="./public/images/01.svg" alt="" />
                <img src="./public/images/02.svg" alt="" />
                <img src="./public/images/03.svg" alt="" />
                <img src="./public/images/04.svg" alt="" />
                <img src="./public/images/05.svg" alt="" />
            </div>

            <div className="proekt">
                {
                    <div className="proekt-sarlavha">
                        <h2>Follow Our Projects</h2>
                        <p>It is a long established fact that a reader will be distracted by the of readable <br />
                            content of page  lookings at its layouts  points.</p>

                        <div className="proekt-cards">
                            {ourProekt.map((item, index) => {
                                return (
                                    <div key={index} className="proekt-list">
                                        <img src={item.img} alt="" />

                                        <div className="proekt-yon">

                                            <div>
                                                <h6>{item.bino}</h6>
                                                <h3>{item.decor}</h3>
                                            </div>


                                            <button><img src="./public/images/Vector5.png" alt="" /></button>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>



            <div className="number">
                <div className="num-line">
                    <div>
                        <h4>12</h4>

                        <h5>Years Of Experiance</h5>

                    </div>

                    <div className="number-line"></div>
                </div>
                <div className="num-line">
                    <div>

                        <h4>85</h4>

                        <h5>Success Project</h5>
                    </div>

                    <div className="number-line"></div>
                </div>
                <div className="num-line">
                    <div>
                        <h4>15</h4>

                        <h5>Active Project</h5>

                    </div>

                    <div className="number-line"></div>
                </div>
                <div className="num-line">
                    <div>
                        <h4>95</h4>

                        <h5>Happy CUstomers</h5>

                    </div>

                    <div className="number-line"></div>
                </div>
            </div>





            <div className="articles_and_news">
                {
                    <div className="articles-sarlavha">
                        <div className="art-text">

                            <h2>Articles & News</h2>
                            <p>It is a long established fact that
                                a reader will be distracted by the of readable content <br /> of a page when
                                lookings at its layouts the points of using.
                            </p>
                        </div>


                        <div className="article-cards">
                            {articles.map((item, index) => {
                                return (
                                    <div key={index} className="article-list">
                                        <div className="articles-imgs">
                                            <img className="ar" src={item.img} alt="" />
                                            <button className="article-button">{item.button}</button>
                                        </div>


                                        <div className="article-bottom">
                                            <h2>{item.izoh}</h2>
                                            <div className="sana">
                                                <h3>{item.sana}</h3>
                                                <button><img src="./images/Vector5.png" alt="" /></button>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                    </div>


                }
            </div>



            <div className="wanna">
                <h2>
                    Wanna join the interno?
                </h2>
                <p>
                    It is a long established fact  will be distracted.
                </p>

                <button>Contact With Us<img className="wanna-img" src="./images/Vector-black.png" alt="" /></button>
            </div>







        </div>
    )
}

export default Asosiy