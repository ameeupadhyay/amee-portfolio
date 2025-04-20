import {
    vkjImage,
    vkjImage2,
    vkjImage3,
    oneBoulderImg1,
    oneBoulderImg2,
    oneBoulderImg3,
    JMDashboard,
    JMReports,
    JMScheme,
    Mortgage,
    Login,
    HP1,
    HP2,
    Cart,
    Settings
}
    from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Projects = () => {
    const [currentImageVkj, setCurrentImageVkj] = useState(0);
    const [currentImageJM, setCurrentImageJM] = useState(0);
    const [currentImageJmMob, setCurrentImageJmMob] = useState(0);
    const [currentImageOB, setCurrentImageOB] = useState(0);

    const vkjImages = [vkjImage, vkjImage2, vkjImage3];
    const jmImages = [JMDashboard, JMReports, JMScheme, Mortgage];
    const jmMobImages = [Login, HP1, HP2, Settings, Cart];
    const ObImages = [oneBoulderImg1, oneBoulderImg2, oneBoulderImg3];

    // Handlers for Project 1
    const handleNextJM = () => {
        setCurrentImageJM((prev) => (prev + 1) % jmImages.length);
    };

    const handlePrevJM = () => {
        setCurrentImageJM((prev) => (prev - 1 + jmImages.length) % jmImages.length);
    };

    // Handlers for Project 2
    const handleNextJmMob = () => {
        setCurrentImageJmMob((prev) => (prev + 1) % jmMobImages.length);
    };

    const handlePrevJmMob = () => {
        setCurrentImageJmMob((prev) => (prev - 1 + jmMobImages.length) % jmMobImages.length);
    };

    // Handlers for Project 3
    const handleNextVkj = () => {
        setCurrentImageVkj((prev) => (prev + 1) % vkjImages.length);
    };

    const handlePrevVkj = () => {
        setCurrentImageVkj((prev) => (prev - 1 + vkjImages.length) % vkjImages.length);
    };

    // Handlers for Project 4
    const handleNextOb = () => {
        setCurrentImageOB((prev) => (prev + 1) % ObImages.length);
    };

    const handlePrevOb = () => {
        setCurrentImageOB((prev) => (prev - 1 + ObImages.length) % ObImages.length);
    };

    return (
        <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Projects" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                {/* ============ project 1 Start here ================ */}
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-xl"
                            src={jmImages[currentImageJM]}
                            alt="jmImages"
                        />

                        {/* Previous Button */}
                        <button
                            onClick={handlePrevJM}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineLeft size={24} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNextJM}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineRight size={24} />
                        </button>
                    </div>

                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">JEWELMAKER ERP Product</h3>
                        </div>
                        <div className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:ml-7">
                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    <span className="text-textGreen">Jewelmaker is the company’s in-house ERP solution</span>
                                    {" "}built for jewelry manufacturers, retailers, and wholesalers.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    Includes{" "}
                                    <span className="text-textGreen">real-time dashboard displaying gold/silver rates, sales trends, and inventory tracking </span> for better business insights.
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    Features reports for{" "}
                                    <span className="text-textGreen">Sales, Purchase, Udhar, Mortgage, Scheme, Rebuy reports,</span> and modules for managing <span className="text-textGreen">Mortgage payment schedules, scheme closures and foreclosures. </span>
                                </p>
                            </div>
                        </div>

                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>Node-Js</li>
                            <li>Express-Js</li>
                            <li>React-Js</li>
                            <li>Sequelize</li>
                            <li>Material UI</li>
                            <li>Jira</li>
                            <li>BitBucket</li>
                        </ul>
                        <div className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-base">
                            <p><strong>Role:</strong> Backend Developer</p>
                        </div>
                    </div>
                </div>
                {/* ============ project 1 End here ================== */}

                {/* ============ project 2 Start here ================ */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-xl"
                            src={jmMobImages[currentImageJmMob]}
                            alt="jmMobImages"
                        />

                        {/* Previous Button */}
                        <button
                            onClick={handlePrevJmMob}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineLeft size={24} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNextJmMob}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineRight size={24} />
                        </button>
                    </div>

                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">JEWELMAKER Mobile App</h3>
                        </div>
                        <div className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-9 flex items-start gap-2">
                            <span className="text-textGreen mt-1">
                                <TiArrowForward />
                            </span>
                            <p>
                                A sleek jewelry app integrated with the Jewelmaker Mobile App Admin Module. Managed backend API integration for features include secure MPin login/signup, {" "}
                                <span className="text-textGreen">real-time gold/silver rates, cart management, and easy access to orders, catalogues, wishlist and more.</span>
                            </p>
                        </div>

                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>Node-Js</li>
                            <li>Express-Js</li>
                            <li>Flutter</li>
                            <li>Sequelize</li>
                            <li>Jira</li>
                            <li>BitBucket</li>
                        </ul>
                        <div className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-base">
                            <p><strong>Role:</strong> Backend Developer</p>
                        </div>
                    </div>
                </div>
                {/* ============ project 2 End here ================== */}

                {/* ============ project 3 Start here ================ */}
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-xl"
                            src={vkjImages[currentImageVkj]}
                            alt="vkjImages"
                        />

                        {/* Previous Button */}
                        <button
                            onClick={handlePrevVkj}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineLeft size={24} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNextVkj}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineRight size={24} />
                        </button>
                    </div>

                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">VKJ ERP System</h3>
                        </div>
                        <div className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:ml-7">
                            <div className="flex items-start gap-2">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    Developed VKJ ERP web application for gold factory automation, managing day-to-day business activities for manufacturer client such as{" "}
                                    <span className="text-textGreen">Sales/Accounting, Design Module, Stock, Tagging, Hallmarking, Product development, risk management, Reports, Mobile App Management, and supply chain operations</span>.
                                </p>
                            </div>
                        </div>

                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>Node-Js</li>
                            <li>Express-Js</li>
                            <li>React-Js</li>
                            <li>Sequelize</li>
                            <li>Material UI</li>
                            <li>Jira</li>
                            <li>BitBucket</li>
                        </ul>
                        <div className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-base">
                            <p><strong>Role:</strong> Backend Developer</p>
                        </div>
                    </div>
                </div>
                {/* ============ project 3 End here ================== */}

                {/* ============ project 4 Start here ================ */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-xl"
                            src={ObImages[currentImageOB]}
                            alt="OneBoulderImages"
                        />

                        {/* Previous Button */}
                        <button
                            onClick={handlePrevOb}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineLeft size={24} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNextOb}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-[rgba(17,34,64,0.5)] rounded-full text-textGreen z-20"
                        >
                            <AiOutlineRight size={24} />
                        </button>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                        <div>
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                One-Boulder (Event MVP)
                            </h3>
                        </div>
                        <div className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-9 flex items-start gap-2">
                            <span className="text-textGreen mt-1">
                                <TiArrowForward />
                            </span>
                            <p>
                                Initiated as Minimum Viable Product (MVP), an app for event management. Users can{" "}
                                <span className="text-textGreen">log in and manage events or purchase tickets. Subscription-based app with different plans like event producer, service provider, etc.</span> Payments managed using Stripe payment gateway.
                            </p>
                        </div>

                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>Node-Js</li>
                            <li>Express-Js</li>
                            <li>React-Native</li>
                            <li>MongoDB</li>
                            <li>Mongoose ORM</li>
                            <li>Stripe</li>
                            <li>GitHub</li>
                        </ul>
                        <div className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-base">
                            <p><strong>Role:</strong> Backend Developer</p>
                        </div>
                    </div>
                </div>
                {/* ============ project 4 End here ================== */}
            </div>
        </section >
    );
};

export default Projects;
