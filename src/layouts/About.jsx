import ReachMeBtn from "../components/ReachMeBtn";

/* eslint-disable react/no-unescaped-entities */
export default function About(props) {
    return (
        <section className="mt-28 sm:mt-[180px] w-4/5 mx-auto py-5">
            <div className="aboutme-content flex flex-col items-center">
                <span className="dark:text-white font-medium border px-4 py-1 rounded-full">
                    Hello 👋🏾 ,
                </span>
                <h1 className="text-3xl sm:text-6xl font-bold text-center my-6">I'm Olusegun ⛩</h1>
                <img src="../images/kratos.png" alt="kratos" className="w-24 h-24 sm:w-36 sm:h-36 mb-7"/>
                <p className="dark:text-gray-200 text-lg max-w-[600px] text-center mb-7">A front-end developer who works with the React Ecosystem. I make amazing user interfaces come to life...</p>

                <ReachMeBtn {...props}/>
            </div>
        </section>
    );
}