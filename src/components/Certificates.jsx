import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Certificates = () => {
    const sliderRef = useRef(null)
    
    const slide = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 400 : 320
            if (direction === 'left') {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            } else {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        }
    }
    const certifications = [
        {
            title: 'Build Generative AI Apps and solution with No-Code Tools',
            issuer: 'Udemy',
            image: '/image.png',
            link: 'https://drive.google.com/file/d/1Fapuxg4LPjHe_hMhpbqF_X9R0OOhyL1V/view'
        },
        {
            title: 'DSA with C++',
            issuer: 'GeeksforGeeks',
            image: '/Screenshot 2026-03-22 155401.png',
            link: 'https://drive.google.com/file/d/1Ldnq8yhNV-ACoeNr29ZGhsmU1ng3nzVx/view'
        },
        {
            title: 'HackerRank Problem Solving',
            issuer: 'HackerRank',
            image: '/Screenshot 2026-03-22 155714.png',
            link: 'https://drive.google.com/file/d/1_mkjimLm5zyqp-zNtBKtSQIPPhT9bdAi/view'
        },
        {
            title: 'GfG 160 - 160 Days of Problem Solving',
            issuer: 'GeeksforGeeks',
            image: '/Screenshot 2026-03-22 160034.png',
            link: 'https://drive.google.com/file/d/1aCQXO9wjYHVWug5G8hYMbnfxO39q7RRp/view'
        },
        {
            title: 'Master Generative AI & Generative AI Tools',
            issuer: 'Udemy',
            image: '/Screenshot 2026-03-22 160053.png',
            link: 'https://drive.google.com/file/d/1y_DpF4Wwtp18-huqYVd5exu2crxwojcY/view'
        }
    ]

    return (
        <section id="certificates" className="pt-12 pb-4 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                        <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
                    </div>
                    
                    <div className="flex gap-4">
                        <button onClick={() => slide('left')} className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-sm">
                            <ChevronLeft size={24} className="text-slate-800 dark:text-white" />
                        </button>
                        <button onClick={() => slide('right')} className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-sm">
                            <ChevronRight size={24} className="text-slate-800 dark:text-white" />
                        </button>
                    </div>
                </div>

                <div 
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-8 pb-12 pt-4 px-2 -mx-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="w-[300px] md:w-[320px] lg:w-[350px] shrink-0 snap-center bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/50 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 relative overflow-hidden shadow-xl"
                        >
                            <div className="w-full pt-10 pb-6 flex justify-center relative">
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary-500/20 blur-2xl rounded-full"></div>
                                <img src={cert.image} alt="Certificate" className="w-48 h-32 object-cover rounded-lg border-2 border-slate-600 shadow-2xl relative z-10" />
                            </div>
                            
                            <div className="px-6 pb-8 flex flex-col flex-1 w-full items-center">
                                <h3 className="font-bold text-xl mb-3 text-primary-600 dark:text-primary-400 line-clamp-2 min-h-[56px] flex items-center justify-center text-center">
                                    {cert.title}
                                </h3>
                                
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
                                    {cert.issuer}
                                </p>
                                
                                <a href={cert.link || "#"} target="_blank" rel="noopener noreferrer" className="mt-auto px-8 py-2.5 bg-slate-700/80 hover:bg-slate-600 border border-slate-600 text-white font-medium rounded-xl transition-colors w-max shadow-lg">
                                    View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates
