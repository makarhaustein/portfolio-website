import Terminal from "../components/Terminal"

function AboutMePage() {
    return (
        <div>
            <div className="flex flex-row items-center justify-center">

                <div className="-mr-20 z-0 max-w-3xl">
                    <Terminal className="">
                        <img src="https://picsum.photos/1600" />
                    </Terminal>
                </div>
                <div className="-ml-40 mt-20 z-20 max-w-xl text-xl">
                    <Terminal className="">
                        <div>
                            <h1>
                                Hey I am Makar,
                            </h1>
                            <p>
                                I am a 20-year-old computer science student, taking the 4th semester of the Bachelor program at RWTH Aachen University.
                                I have fun coding, so I am building this website to show off some of my projects and to gain some experience using React!
                                This Website will take a while to finish as I am doing multiple projects simultaniously...
                            </p>
                        </div>
                    </Terminal>
                </div>
                <div className="-ml-40 mb-10 z-10 max-w-xl">
                    <Terminal className="">
                        <img src="https://picsum.photos/1200" />
                    </Terminal>
                </div>
                <div className="-ml-40 mt-96 z-10 max-w-sm">
                    <Terminal className="">
                        <img src="https://picsum.photos/800" />
                    </Terminal>
                </div>
            </div>

        </div >
    );
}

export default AboutMePage
