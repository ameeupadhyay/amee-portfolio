import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hi! I’m Amee Upadhyay, a software developer passionate about creating innovative solutions and
                        adaptive systems to enhance web experiences. I focus on building scalable architectures that ensure
                        seamless performance, efficient database management, and smooth API integration.
                    </p>
                    <p>
                        I kicked off my journey in 2022 with a Python internship, which sparked my passion for backend development.{" "}
                        <span className="text-textGreen">
                            Today, I specialize in Node.js and Express.js
                        </span>
                        , where I’ve been building solutions that drive business operations.{" "}
                        With a solid grasp of both SQL and NoSQL databases, I’m well-versed in working with technologies like Sequelize,
                        MySQL, and MongoDB.
                    </p>
                    <p>
                        My expertise lies in developing robust APIs and ensuring backend systems run like clockwork,
                        integrating seamlessly with the front end to create {" "}
                        <span className="text-textGreen">
                            cohesive, high-performance web applications.
                        </span>
                    </p>
                    <p>Here are some technologies, have worked with throughout my career:</p>
                    {/* Technology Categories */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Programming Languages</h3>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Javascript
                                </li>
                                {<li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Python
                                </li>}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Backend</h3>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Node.js
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Express.js
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Django Rest Framework
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Frontend</h3>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    HTML5
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    CSS3
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Bootstrap
                                </li>
                                {/* <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    React JS
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Database</h3>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    MySQL
                                </li>
                                {/* <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    PostgreSQL
                                </li> */}
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    MongoDB
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Hosting Platforms</h3>
                            <ul className="space-y-2 mt-2">
                                {/*                                 <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    AWS
                                </li> */}
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    GitHub Pages
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-textGreen">Version Control</h3>
                            <ul className="space-y-2 mt-2">
                                {<li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    Git
                                </li>}
                                <li className="flex items-center gap-2">
                                    <AiFillThunderbolt className="text-textGreen" />
                                    BitBucket
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-cover"
                                src={profileImg}
                                alt="profileImg"
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
