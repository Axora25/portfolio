import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isDark, setIsDark] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDark(isDarkMode)
        if (isDarkMode) document.documentElement.classList.add('dark')

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleDarkMode = () => {
        const newDark = !isDark
        setIsDark(newDark)
        if (newDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        
        { name: 'Contact', to: 'contact' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="home" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                    AS.
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-primary-500 font-semibold"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors cursor-pointer text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full glass hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary-600" />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full glass"
                    >
                        {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-primary-600" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-slate-100">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full glass-card rounded-none transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-b' : 'max-h-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors cursor-pointer font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
