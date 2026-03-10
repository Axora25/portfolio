import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! (Demo Only)')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        {
            icon: <Mail className="text-primary-500" />,
            label: 'Email',
            value: 'astha.singhal@example.com',
            link: 'mailto:astha.singhal@example.com'
        },
        {
            icon: <Linkedin className="text-primary-500" />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/astha-singhal',
            link: 'https://linkedin.com/in/astha-singhal'
        },
        {
            icon: <Github className="text-primary-500" />,
            label: 'GitHub',
            value: 'github.com/astha-singhal',
            link: 'https://github.com/astha-singhal'
        }
    ]

    return (
        <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl">
                        Have a project in mind or just want to say hi? Feel free to reach out to me.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Info Side */}
                    <div className="space-y-8">
                        {contactInfo.map((info, idx) => (
                            <a
                                href={info.link}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 flex items-center gap-6 hover:translate-y-[-4px] transition-all group"
                            >
                                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">{info.label}</h4>
                                    <p className="text-slate-800 dark:text-white font-medium">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 px-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800 dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 px-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800 dark:text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 px-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800 dark:text-white"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 px-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800 dark:text-white resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2 group"
                            >
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
