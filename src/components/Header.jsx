export default function Header() {
    return (
        <div className='w-full mb-20'>
            <div className='p-1 w-full fixed top-0 left-0 sm:text-xl font-medium 
                font-plexmono bg-white border-t-2 border-b-2 border-black'>
                <ul className='m-auto flex justify-evenly max-w-4xl'>
                    <li className='px-3 rounded-lg'>
                        <a href='/' className='underline-animation'>Home</a>
                    </li>
                    <li className='px-3 rounded-lg'>
                        <a href='/projects' className='underline-animation'>Projects</a>
                    </li>
                    <li className='px-3 rounded-lg'>
                        <a href='/models' className='underline-animation'>3D_Models</a>
                    </li>
                    <li className='px-3 rounded-lg'>
                        <a href='/about-me' className='underline-animation'>About_Me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
