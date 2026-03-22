import { motion } from 'framer-motion'
import { Code, Layout, Database, Wrench, Brain, Layers } from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code size={24} className="text-primary-500" />,
            skills: ['C++', 'Java', 'Python', 'C', 'JavaScript', 'PHP']
        },
        {
            title: 'Frontend',
            icon: <Layout size={24} className="text-primary-500" />,
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'jQuery']
        },
        {
            title: 'Backend',
            icon: <Layers size={24} className="text-primary-500" />,
            skills: ['Node.js', 'Express.js', 'PHP']
        },
        {
            title: 'Database',
            icon: <Database size={24} className="text-primary-500" />,
            skills: ['MySQL', 'MongoDB']
        },
        {
            title: 'Tools',
            icon: <Wrench size={24} className="text-primary-500" />,
            skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Render', 'Railway']
        },
        {
            title: 'Concepts',
            icon: <Brain size={24} className="text-primary-500" />,
            skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'APIs']
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="skills" className="pt-12 pb-12 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-8">
                    <h2 className="text-4xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass p-8 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary-500 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
