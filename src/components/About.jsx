import { motion } from 'framer-motion'

const About = () => {


    return (
        <section id="about" className="pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 space-y-6"
                    >
                        
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                           I am a Computer Science undergraduate at Lovely Professional University with a strong 
                           enthusiasm for building efficient and meaningful software solutions.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                           My interests lie in full stack development, designing scalable backend systems,
                           and solving challenging algorithmic problems. I enjoy turning ideas into applications that 
                           are both technically strong and visually intuitive for users.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                           Alongside my academic learning, I actively work on projects that strengthen my understanding 
                           of Data Structures and Algorithms, helping me write structured, optimized, and reliable code. 
                           I am constantly exploring new technologies and improving my development skills to create impactful 
                           real-world solutions.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10 group">
                            <img
                                src="/profile.jpg"
                                alt="Astha Singhal"
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
