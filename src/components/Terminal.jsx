export default function Terminal({ children }) {
    return (
        <div className='w-full flex justify-center'>
            <div className='mx-4 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]'>
                <div
                    className='p-1 pr-2 space-x-2 border-black border-2 
                    text-right flex justify-end rounded-t-md '
                >
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                    <div className='h-3 w-3 border-black border-2 rounded-full '></div>
                </div>
                <div className='p-10 text-left text-black mt-[-2px] rounded-b-md border-black border-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}
