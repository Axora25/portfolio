import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-400/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full animate-pulse" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-4 py-2 rounded-full glass text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 inline-block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">Astha Singhal</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Software Developer | Computer Science Student
                    </p>
                    <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Passionate about building scalable web applications and solving real-world problems using modern technologies.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Link to="projects" smooth={true} className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary-500/25 cursor-pointer group">
                        View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/1iFk9m6CX2m1xS91E9AIYaHFDD4pEm8wu/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                        Download Resume <Download size={18} />
                    </a>
                    <Link to="contact" smooth={true} className="flex items-center gap-2 glass px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                        Contact Me <Mail size={18} />
                    </Link>
                </motion.div>

                <motion.div
                    className="flex items-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a href="https://github.com/Axora25/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:scale-110 transition-transform text-slate-700 dark:text-slate-300">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/astha-singhal" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:scale-110 transition-transform text-slate-700 dark:text-slate-300">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:singhalastha25@gmail.com" className="p-3 glass rounded-full hover:scale-110 transition-transform text-slate-700 dark:text-slate-300">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
