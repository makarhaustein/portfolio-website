export default function Navbar() {
    return (
        <div class='w-full flex absolute top-0 left-0 space-x-20 bg-white text-xl font-medium font-plexmono justify-center'>
            <div class=' px-3 py-1 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                <a href=''>Home</a>
            </div>
            <div class=' px-3 py-1 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                <a href=''>Projects</a>
            </div>
            <div class=' px-3 py-1 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                <a href=''>3D_Models</a>
            </div>
            <div class=' px-3 py-1 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                <a href=''>About_Me</a>
            </div>
        </div>
    );
}
