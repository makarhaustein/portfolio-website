export default function Intro() {
    return (
        <div className='w-full flex justify-center'>
            <div className='mx-4 max-w-6xl rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]'>
                <div
                    className='p-1 pr-2 space-x-2 border-black border-2 
                    text-right flex justify-end rounded-t-md '
                >
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                </div>
                <div className='p-10 text-left text-black mt-[-2px] rounded-b-md border-black border-2'>
                    <h1 className='font-plexmono text-4xl'>Welcome!</h1>
                    <h2 className='font-plexmono text-xl'>
                        Here you can find out more about me and my projects!
                    </h2>
                    <h2 className='font-plexmono text-xl'>
                        This website is currently being worked on!
                    </h2>
                </div>
            </div>
        </div>
    );
}
