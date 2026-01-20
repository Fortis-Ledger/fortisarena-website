import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Ahmad Faraz',
        role: 'Founder & CEO',
        description: 'Leading the vision of FortisArena, overseeing development and blockchain architecture.',
        image: '/profile/ahmad faraz.jpeg',
        linkedin: 'https://www.linkedin.com/in/ahmadfarazllc'
    },
    {
        name: 'Yasir Malik',
        role: 'CFO',
        description: 'Managing financial operations and ensuring sustainable economic growth.',
        image: '/profile/yasir.jpeg',
        linkedin: 'https://www.linkedin.com/in/yasir-malik-321a593a6'
    },
    {
        name: 'Mohammad Talha',
        role: 'COO',
        description: 'Managing operations and overseeing live streaming broadcasts.',
        image: '/profile/talha.jpeg',
        linkedin: 'https://www.linkedin.com/in/mohammad-talha0'
    },
    {
        name: 'Muhammad Awais',
        role: 'eSports Manager',
        description: 'Orchestrating professional matches and managing the competitive ecosystem.',
        image: '/profile/awais.jpeg',
        linkedin: 'https://www.linkedin.com/in/muhammad-awais-13a573307'
    },
    {
        name: 'M-Sanan',
        role: 'Lead Designer',
        description: 'Crafting the UI/UX and visual identity with a focus on premium aesthetics.',
        image: '/profile/sanan.jpeg',
        linkedin: 'https://www.linkedin.com/in/muhammad-sannan-1ba49b229'
    },
    {
        name: 'Ahmad Khan',
        role: 'Lead Developer',
        description: 'Designing complex algorithms and logic, driving the core development.',
        image: '/profile/ahmad.jpeg',
        linkedin: 'https://www.linkedin.com/in/ahmad-khan-b471a8310'
    },
    {
        name: 'Hamza',
        role: 'Social Media Marketer',
        description: 'Building community presence and managing social engagement strategies.',
        image: '/profile/hamza.jpeg',
        linkedin: 'https://www.linkedin.com/in/hamza-zafar-50312439b'
    },
    {
        name: 'Ali Shair',
        role: 'Video Editor',
        description: 'Creating high-quality video content and managing live streams for matches.',
        // Assuming image name based on pattern
        image: '/profile/ali shair.jpeg',
        TikTok: 'https://www.tiktok.com/@alishairs1?_r=1&_t=ZN-93EajUuC9YM'
    }
];

const TeamSection = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary">
                        Meet The Minds
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The visionary team behind the revolution. Experts in blockchain, gaming, and economy building the future of eSports.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-primary/50 transition-colors duration-300">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-full object-cover rounded-full border-2 border-white/20 group-hover:border-primary transition-colors duration-300"
                                    />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary/80 font-medium mb-3 text-sm tracking-wider uppercase">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {member.description}
                                    </p>

                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href={member.linkedin || member.TikTok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-gray-400 transition-colors duration-300 text-xl ${member.TikTok ? 'hover:text-[#ff0050]' : 'hover:text-[#0077b5]'
                                                }`}
                                        >
                                            {member.TikTok ? <FaTiktok /> : <FaLinkedin />}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
