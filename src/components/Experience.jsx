import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Developer Intern',
            company: 'Infosys',
            period: 'Feb 2026 – Present',
            location: 'Remote/Hybrid',
            desc: [
                'Developed a civic engagement platform for online petitions.',
                'Implemented authentication, petition creation, and dashboards.',
                'Built responsive frontend with backend API integration.',
                'Improved database performance and scalability.'
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs']
        }
    ]

    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 md:p-12 relative overflow-hidden group"
                        >
                            {/* Decorative accent */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-lg">
                                        <Briefcase size={20} />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <ul className="space-y-4">
                                    {exp.desc.map((item, iIdx) => (
                                        <li key={iIdx} className="flex gap-4 items-start text-slate-600 dark:text-slate-300">
                                            <div className="mt-2 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
