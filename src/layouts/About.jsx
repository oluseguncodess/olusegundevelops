// import ReachMeBtn from "../components/ReachMeBtn";
/* eslint-disable react/no-unescaped-entities */
import ResumeBtn from "../components/ResumeBtn";

export default function About() {
    return (
        <section className="mt-28 sm:mt-40 w-full max-w-[1400px] mx-auto px-8" id="about">
            <div className="flex flex-col items-center">
                <span className="dark:text-white font-medium border px-4 py-1 rounded-full">
                    Hello 👋🏾 ,
                </span>
                <h1 className="text-3xl sm:text-7xl font-bold text-center my-6">I'm Olusegun ⛩</h1>
                <img src="../images/kratos.png" alt="kratos" className="w-24 h-24 sm:w-36 sm:h-36 mb-7"/>
                <p className="dark:text-gray-200 md:text-lg text-base max-w-[600px] text-center mb-16">A front-end developer who works with the React Ecosystem. I make amazing user interfaces come to life...</p>

                {/* <ReachMeBtn /> */}
                <ResumeBtn/>
            </div>
        </section>
    );
}