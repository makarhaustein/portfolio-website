export default function Footer() {
    return (
        <div className='bg-slate-900 w-full left-0 min-h-10 py-8 flex 
                        flex-col justify-center items-center
                        text-white font-poppins'>
            <h2 className='text-xl'>Socials</h2>
            <div className='flex justify-center'>
                <a href='https://github.com/makarhaustein' className='flex items-center'>
                    <img className='h-3 mr-1' src='../../public/images/icons/github-mark-white.png' />
                    <p>GitHub</p>
                </a>

            </div>
            <p className='text-[10px] text-slate-700'>
                Copyright © 2024 Makar Haustein. All Rights Reserved.
            </p>
        </div>
    );
}
