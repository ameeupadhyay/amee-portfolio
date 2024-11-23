import { vkjImage, vkjImage2, vkjImage3, oneBoulderImg1, oneBoulderImg2, oneBoulderImg3 } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Projects = () => {
    const [currentImageVkj, setCurrentImageVkj] = useState(0);
    const [currentImageOB, setCurrentImageOB] = useState(0);

    const vkjImages = [vkjImage, vkjImage2, vkjImage3];
    const ObImages = [oneBoulderImg1, oneBoulderImg2, oneBoulderImg3];

    const handleNextVkj = () => {
        setCurrentImageVkj((prev) => (prev + 1) % vkjImages.length);
    };

    const handlePrevVkj = () => {
        setCurrentImageVkj((prev) => (prev - 1 + vkjImages.length) % vkjImages.length);
    };

    // Handlers for Project 2
    const handleNextOb = () => {
        setCurrentImageOB((prev) => (prev + 1) % ObImages.length);
    };

    const handlePrevOb = () => {
        setCurrentImageOB((prev) => (prev - 1 + ObImages.length) % ObImages.length);
    };

    return (
        <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Projects" titleNo="03" />
            {/* ============ project One Start here ================ */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-md"
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
                            <h3 className="text-2xl font-bold">Jewellery ERP System</h3>
                        </div>
                        <div className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:ml-7">
                            <div className="flex items-start gap-2 mb-4">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    Developed VKJ ERP web application for gold factory automation, managing day-to-day business activities such as{" "}
                                    <span className="text-textGreen">Sales/Accounting, Stock, Tagging, Hallmarking, Product development, risk management, Reports, Mobile App Management, and supply chain operations</span>.
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-textGreen mt-1">
                                    <TiArrowForward />
                                </span>
                                <p>
                                    Worked on the Scheme module, managing payment schedules, automatic EMI calculation, and ledger integrations{" "}
                                    <span className="text-textGreen">for retailers and clients</span> in the ERP system product.
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
                {/* ============ project One End here ================== */}

                {/* ============ project Two Start here ================ */}
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <div className="relative w-full xl:w-1/2">
                        <Image
                            className="w-full h-96 object-contain rounded-mdl"
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
                {/* ============ project Two End here ================== */}
            </div>
        </section >
    );
};

export default Projects;
