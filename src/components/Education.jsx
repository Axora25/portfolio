import { motion } from 'framer-motion'
import { GraduationCap, Building2 } from 'lucide-react'

const Education = () => {
    const educationData = [
        {
            period: 'Aug 2023 - Present',
            degree: 'B.Tech in Computer Science and Engineering',
            institution: 'Lovely Professional University (LPU), Phagwara, Punjab',
            details: 'Currently pursuing a B.Tech degree (CGPA: 7.2), with a focus on building full-stack web applications and strengthening problem-solving skills through data structures, algorithms, and system design fundamentals.',
            icon: <GraduationCap size={20} className="text-primary-400" />
        },
        {
            period: 'April 2021 - March 2023',
            degree: 'Intermediate (PCM)',
            institution: 'Silver Oak Public School, Saharanpur, UP',
            details: 'Percentage: 85%',
            icon: <Building2 size={20} className="text-primary-400" />
        },
        {
            period: 'April 2020 - March 2021',
            degree: 'Matriculation (PCM)',
            institution: 'Silver Oak Public School, Saharanpur, UP',
            details: 'Percentage: 90%',
            icon: <Building2 size={20} className="text-primary-400" />
        }
    ]

    return (
        <section id="education" className="pt-12 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Education & <span className="text-primary-500">Qualification</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <div className="relative border-l border-primary-500/30 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {educationData.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-10 md:pl-16 group"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[21px] top-6 bg-slate-900 border border-primary-500/30 group-hover:border-primary-500 transition-colors rounded-full p-2 z-10">
                                {item.icon}
                            </div>

                            {/* Card content */}
                            <div className="glass-card p-6 md:p-8 bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors rounded-2xl">
                                <div className="text-primary-400 font-mono text-sm mb-2">{item.period}</div>
                                <h3 className="text-2xl font-bold text-primary-500 mb-1">{item.degree}</h3>
                                <div className="text-lg font-bold text-slate-200 mb-3">{item.institution}</div>
                                <p className="text-slate-400 leading-relaxed">{item.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
