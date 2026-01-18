import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const EvolutionTimeline = () => {
  const [activeEra, setActiveEra] = useState(0);

  const timelineData = [
    {
      era: "1970s-1990s",
      title: "Arcade Era",
      subtitle: "The Beginning",
      icon: "Gamepad",
      color: "from-gray-500 to-gray-600",
      description: "Gaming was simple, local, and community-driven. Players gathered in arcades, competing for high scores and bragging rights.",
      characteristics: [
        "Local competitions",
        "High score leaderboards", 
        "Community gathering spaces",
        "Simple reward systems"
      ],
      problems: ["Limited reach", "No persistent rewards", "Location dependent"]
    },
    {
      era: "2000s-2010s",
      title: "Online Gaming",
      subtitle: "Global Connection",
      icon: "Wifi",
      color: "from-blue-500 to-blue-600",
      description: "The internet connected players worldwide, enabling massive multiplayer experiences and the birth of professional eSports.",
      characteristics: [
        "Global player base",
        "Professional tournaments",
        "Streaming platforms",
        "Sponsorship deals"
      ],
      problems: ["Platform lock-in", "No asset ownership", "Centralized control"]
    },
    {
      era: "2010s-2020s",
      title: "eSports Industry",
      subtitle: "Mainstream Recognition",
      icon: "Trophy",
      color: "from-purple-500 to-purple-600",
      description: "Gaming became a billion-dollar industry with massive tournaments, celebrity players, and mainstream media coverage.",
      characteristics: [
        "Billion-dollar tournaments",
        "Celebrity gamers",
        "Media partnerships",
        "Corporate investments"
      ],
      problems: ["Player exploitation", "Unfair revenue sharing", "Lack of transparency"]
    },
    {
      era: "2020s-Future",
      title: "Decentralized Gaming",
      subtitle: "Player Ownership",
      icon: "Crown",
      color: "from-golden-cta to-yellow-500",
      description: "Blockchain technology enables true player ownership, fair rewards, and community governance in gaming ecosystems.",
      characteristics: [
        "True asset ownership",
        "Fair reward distribution",
        "Community governance",
        "Cross-platform assets"
      ],
      problems: [],
      isFuture: true
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-6">
            <Icon name="Clock" size={20} className="text-electric-blue" />
            <span className="text-electric-blue font-medium">Evolution Timeline</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            From Arcade to
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-golden-cta bg-clip-text">
              Decentralized Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Witness the transformation of gaming from simple arcade experiences 
            to the revolutionary decentralized ecosystem we're building today.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {timelineData?.map((era, index) => (
            <button
              key={index}
              onClick={() => setActiveEra(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeEra === index
                  ? `bg-gradient-to-r ${era?.color} text-white shadow-lg gaming-glow`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <Icon name={era?.icon} size={18} />
              <span className="hidden sm:inline">{era?.title}</span>
              <span className="sm:hidden">{era?.era}</span>
            </button>
          ))}
        </div>

        {/* Active Era Content */}
        <motion.div
          key={activeEra}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Era Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${timelineData?.[activeEra]?.color} rounded-xl flex items-center justify-center gaming-glow`}>
                  <Icon name={timelineData?.[activeEra]?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{timelineData?.[activeEra]?.era}</div>
                  <h3 className="font-heading text-3xl font-bold">{timelineData?.[activeEra]?.title}</h3>
                  <div className="text-lg text-electric-blue">{timelineData?.[activeEra]?.subtitle}</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {timelineData?.[activeEra]?.description}
              </p>

              {timelineData?.[activeEra]?.isFuture && (
                <div className="bg-gradient-to-r from-electric-blue/20 to-golden-cta/20 border border-electric-blue/30 rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Sparkles" size={20} className="text-golden-cta" />
                    <span className="font-semibold text-golden-cta">This is FortisArena</span>
                  </div>
                  <p className="text-gray-300">
                    We're not just participating in the future of gaming—we're creating it. 
                    Join us in building the first truly player-owned gaming ecosystem.
                  </p>
                </div>
              )}
            </div>

            {/* Characteristics & Problems */}
            <div className="space-y-8">
              {/* Characteristics */}
              <div>
                <h4 className="font-heading text-xl font-bold mb-4 flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span>Key Characteristics</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timelineData?.[activeEra]?.characteristics?.map((char, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm"
                    >
                      {char}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Problems */}
              {timelineData?.[activeEra]?.problems?.length > 0 && (
                <div>
                  <h4 className="font-heading text-xl font-bold mb-4 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <span>Limitations</span>
                  </h4>
                  <div className="space-y-2">
                    {timelineData?.[activeEra]?.problems?.map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-warning/10 border border-warning/20 rounded-lg p-3 text-sm flex items-center space-x-2"
                      >
                        <Icon name="X" size={16} className="text-warning flex-shrink-0" />
                        <span>{problem}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {timelineData?.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeEra ? 'bg-electric-blue' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;