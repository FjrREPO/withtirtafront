import React, { useState, useEffect } from "react";
import "./Portofolio.css";
import portofolioData from "./PortofolioData";

const Project = () => {

    const [filter, setFilter] = useState("Video");
    const [data, setData] = useState();
    
        useEffect(() => {
        if (filter === "Video") {
            const filteredData = portofolioData.filter(
            (item) => item.category === filter
            );
    
            setData(filteredData);
        }
    
        if (filter === "Photo") {
            const filteredData = portofolioData.filter(
            (item) => item.category === filter
            );
    
            setData(filteredData);
        }
    }, [filter]);

    const active = 'tab__btn__active'

    return (
        <section id="portofolio">
        <div className="project component__space" id="Portfolio">
        <div className="headingtext">
            <h1 className="heading">My&nbsp;<span className="headingspan">Portofolio</span></h1>
        </div>
        <div className='tab__btns text-end'>
            <button
                className={` ${
                    filter === "Video" ? active : ""
                } secondary__btn`}
                onClick={() => setFilter("Video")}
            >
                Video
            </button>
            <button
                className={` ${
                    filter === "Photo" ? active : ""
                } secondary__btn`}
                onClick={() => setFilter("Photo")}
            >
                Photo
            </button>
        </div>
        <div className="container">
            <div className="row">
                {data?.map((item) => (
                    <>
                        <div className="col__3 admin__maincol" key={item.id}>
                            <div className="project__box pointer relative" data-aos="zoom-in-right">
                                <div className="project__box__img pointer relative">
                                    <div className="project__img__box">
                                        <a href={item.link} target='_blank' rel="noreferrer"><img src={item.img} alt="" className="project__img"/></a>
                                    </div>
                                    <div className="mask__effect"/>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                    <a href="https://www.instagram.com/withtirta/?hl=id" target='_blank' rel='noreferrer'><button className="view__more pointer btn">See more</button></a>
                </div>
            </div>
        </div>
        </div>
        </section>
    );
}

export default Project;
