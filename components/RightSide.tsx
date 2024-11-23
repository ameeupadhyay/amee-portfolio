import React from "react";

const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
            <a href="mailto:amee0812.ad@gmail.com">
                <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
                    portfolio@amee.dev
                </p>
            </a>
            <span className="w-[2px] h-48 bg-textDark inline-flex"></span>
        </div>
    );
};

export default RightSide;
