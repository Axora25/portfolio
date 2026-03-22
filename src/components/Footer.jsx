import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Link } from 'react-scroll'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-6 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                    <Link to="home" smooth={true} className="text-3xl font-bold cursor-pointer text-slate-800 dark:text-white">
                        AS<span className="text-primary-600">.</span>
                    </Link>

                    <nav className="flex items-center gap-8">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                className="text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors cursor-pointer text-sm font-medium"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Axora25" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/asthasinghal58/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:singhalastha25@gmail.com" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center justify-center gap-2">
                        Made by Astha Singhal © {currentYear}
                    </p>
                    <p className="text-slate-400 dark:text-slate-600 text-xs mt-2 font-medium uppercase tracking-widest">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
