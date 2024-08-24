import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>
                {children}
            </main>
            <Footer />
        </div>
    );
}
