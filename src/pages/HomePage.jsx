import Terminal from '../components/Terminal.jsx'

function HomePage() {

    return (
        <div className='flex items-center w-full flex-col'>
            <Terminal>
                <h1 className='font-plexmono text-4xl'>Welcome!</h1>
                <h2 className='font-plexmono text-xl'>
                    Here you can find out more about me and my projects!
                </h2>
                <h2 className='font-plexmono text-xl'>
                    This website is currently being worked on!
                </h2>
            </Terminal>
        </div>
    )
}

export default HomePage
