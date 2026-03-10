import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Link } from 'react-scroll'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
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
                        <a href="https://github.com/astha-singhal" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/astha-singhal" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:astha.singhal@example.com" className="p-2 text-slate-400 hover:text-primary-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center justify-center gap-2">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Astha Singhal © {currentYear}
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
