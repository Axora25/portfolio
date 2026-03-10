import { motion } from 'framer-motion'
import { GraduationCap, Code2, Users2, Rocket } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap className="text-primary-500" size={32} />,
            title: 'CS Student',
            desc: 'Lovely Professional University'
        },
        {
            icon: <Code2 className="text-primary-500" size={32} />,
            title: 'Full Stack',
            desc: 'APIs & Web Applications'
        },
        {
            icon: <Rocket className="text-primary-500" size={32} />,
            title: 'Impact',
            desc: 'Scalable Tech Solutions'
        },
        {
            icon: <Users2 className="text-primary-500" size={32} />,
            title: 'Teamwork',
            desc: 'Strong Collaboration Skills'
        }
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 italic">
                            "Driven by innovation, powered by code."
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            I am a Computer Science student at Lovely Professional University, deeply passionate about
                            building impactful technology solutions. My journey in tech is fueled by curiosity and a
                            unwavering commitment to solving real-world problems.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            With a strong foundation in Full Stack Development, I specialize in creating seamless
                            user experiences backed by robust, scalable server-side architectures. I thrive in
                            collaborative environments and enjoy tackling complex challenges.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {highlights.map((item, index) => (
                                <div key={index} className="glass-card p-6 flex flex-col items-center text-center">
                                    <div className="mb-3 p-3 bg-primary-500/10 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10 group">
                            <img
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop"
                                alt="Developer Illustration"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/30 rounded-2xl blur-3xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 rounded-2xl blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
