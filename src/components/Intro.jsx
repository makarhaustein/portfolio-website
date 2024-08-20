import Terminal from './Terminal';

export default function Intro() {
    return (
        <Terminal>
            <h1 className='font-plexmono text-4xl'>Welcome!</h1>
            <h2 className='font-plexmono text-xl'>
                Here you can find out more about me and my projects!
            </h2>
            <h2 className='font-plexmono text-xl'>
                This website is currently being worked on!
            </h2>
        </Terminal>
    );
}
