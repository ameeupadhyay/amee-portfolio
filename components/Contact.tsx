import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
        >
            <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
                04. What’s Next?
            </p>
            <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">
                I’m open to discuss new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex gap-4 mt-6">
                {/* Email Icon */}
                <a href="mailto:amee0812.ad@gmail.com" className="flex items-center gap-2 text-textGreen hover:text-hoverColor">
                    <FaEnvelope className="text-2xl" />
                    <span>Email</span>
                </a>

                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/amee812/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-textGreen hover:text-hoverColor">
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;
