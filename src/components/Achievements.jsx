import { motion } from 'framer-motion'
import { Trophy, Code, Flame, Award, ShieldCheck, Cpu } from 'lucide-react'

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy size={32} className="text-yellow-500" />,
            value: '783',
            label: 'Global Rank',
            desc: 'LeetCode Biweekly Contest (among 21k participants)'
        },
        {
            icon: <Code size={32} className="text-primary-500" />,
            value: '160+',
            label: 'DSA Problems',
            desc: 'Solved across platforms like LeetCode and HackerRank'
        },
        {
            icon: <Flame size={32} className="text-orange-500" />,
            value: '60 Days',
            label: 'Coding Streak',
            desc: 'Maintained consistent coding habit on LeetCode'
        }
    ]

    const certifications = [
        {
            icon: <Cpu size={24} className="text-blue-500" />,
            title: 'Generative AI Certification',
            issuer: 'Google Cloud / Coursera'
        },
        {
            icon: <ShieldCheck size={24} className="text-green-500" />,
            title: 'DSA with C++',
            issuer: 'GeeksforGeeks'
        },
        {
            icon: <Award size={24} className="text-purple-500" />,
            title: 'HackerRank Problem Solving',
            issuer: 'HackerRank'
        }
    ]

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Achievements Stats */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-4">Achievements</h2>
                            <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-8"></div>
                        </div>

                        <div className="space-y-6">
                            {achievements.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-6 flex items-center gap-6 group hover:translate-x-2 transition-transform"
                                >
                                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-slate-800 dark:text-white">{item.value}</span>
                                            <span className="text-slate-500 dark:text-slate-400 font-semibold">{item.label}</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                            <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-8"></div>
                        </div>

                        <div className="grid gap-6">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-2xl flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary-500/10 rounded-xl group-hover:bg-primary-500/20 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200">{cert.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">{cert.issuer}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
