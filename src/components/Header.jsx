export default function Header() {
    return (
        <div className='w-full mb-20'>
            <div className='py-2 w-full absolute top-0 left-0 bg-white text-xl font-medium font-plexmono'>
                <ul className='m-auto flex justify-evenly max-w-4xl'>
                    <li className='px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                        <a href=''>Home</a>
                    </li>
                    <li className='px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                        <a href=''>Projects</a>
                    </li>
                    <li className='px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                        <a href=''>3D_Models</a>
                    </li>
                    <li className='px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                        <a href=''>About_Me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
