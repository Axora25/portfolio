import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'AgriGrow',
            subtitle: 'Smart Agriculture Assistance Platform',
            desc: 'An intelligent farming support platform that provides personalized crop recommendations based on soil data, real-time weather forecasts, and an AI-powered assistant for crop-related queries. Includes a community blog section where farmers can share knowledge and experiences.',
            tech: ['React', 'JavaScript', 'Node.js', 'Tailwind', 'MongoDB'],
            github: 'https://github.com/Axora25/react-node_project',
            demo: 'https://agrigrow-two.vercel.app/',
            image: '/crop.jpg'
        },
        {
            title: 'AssetAdvisor',
            subtitle: 'AI Investment Chatbot',
            desc: 'An AI-powered finance assistant that delivers real-time stock market insights using live financial APIs and answers investment-related queries in natural language. Designed to simplify stock research and improve decision-making efficiency.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
            github: 'https://github.com/Axora25/investment-boot',
            demo: 'https://investment-bot-e10j.onrender.com/',
            image: '/investmnt.jpg'
        }
    ]

    return (
        <section id="projects" className="pt-12 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                            <Github size={20} className="text-slate-600 dark:text-slate-300" />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                            <ExternalLink size={20} className="text-slate-600 dark:text-slate-300" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all">
                                        View Details <ExternalLink size={16} />
                                    </button>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
