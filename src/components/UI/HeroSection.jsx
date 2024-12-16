import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroSection = () => {
   
        return (
            <main className="hero-section main">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <h1 className="heading-xl">Explore the world, One Country at a Time.</h1>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laboriosam totam dolor quod nobis quas. Hic, illo? Facere nesciunt vel a sunt reprehenderit! Laborum modi perferendis magnam repellendus eaque accusantium.
                        </p>
                        <button className="btn btn-darken-inline bg-white-box">Start Exploring<FaLongArrowAltRight/> {/* react Icons */}</button>
                    </div>
                    <div className="hero-image">
                        <img src="/public/small-world-map-with-names-poster-medium-pf0011-zgx-original-imagrycdz7zaypws.webp" alt=" img"></img>
                    </div>
                </div>
            </main>
        )
    };
