'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, PieChart, Pie, XAxis, YAxis, Tooltip } from 'recharts';
import { MagicBento, MagicBentoItem } from '@/components/ui/magic-bento';

const barChartData1 = [
  { name: '2022', value: 11 },
  { name: '2023', value: 21 },
  { name: '2024', value: 19 },
  { name: '2025', value: 35 },
];

const barChartData2 = [
  { name: 'Jan', followers: 14000 },
  { name: 'Jun', followers: 16000 },
  { name: 'Dec', followers: 19000 },
];

const barChartData3 = [
  { category: 'Tech', participants: 450 },
  { category: 'AI/ML', participants: 320 },
  { category: 'Hardware', participants: 280 },
  { category: 'Other', participants: 150 },
];

const barChartData4 = [
  { region: 'West Bengal', colleges: 21 },
  { region: 'Delhi-NCR', colleges: 15 },
  { region: 'Mumbai', colleges: 12 },
  { region: 'Bangalore', colleges: 10 },
  { region: 'Others', colleges: 42 },
];

const donutData1 = [
  { name: 'Robotics', value: 14.3, color: '#dc2626' },
  { name: 'AI Realm', value: 14.3, color: '#ef4444' },
  { name: 'Tech', value: 21, color: '#f87171' },
  { name: 'Other', value: 50.4, color: '#991b1b' },
];

const donutData2 = [
  { name: 'West Bengal', value: 21, color: '#dc2626' },
  { name: 'Delhi-NCR', value: 15, color: '#ef4444' },
  { name: 'Mumbai', value: 12, color: '#f87171' },
  { name: 'Others', value: 52, color: '#991b1b' },
];

// Custom tooltip style
const CustomTooltip = ({ active, payload }: { active?: boolean, payload?: Array<{ value: number }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/95 border border-red-500/50 rounded-lg p-3 shadow-2xl shadow-red-500/20" style={{ backdropFilter: 'none' }}>
        <p className="text-red-400 font-bold">{`${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Graphs() {

  // Hover states for interactive charts
  const [donut1Hover, setDonut1Hover] = useState<number | null>(null);
  const [donut2Hover, setDonut2Hover] = useState<number | null>(null);
  const [bar1Hover, setBar1Hover] = useState<number | null>(null);
  const [bar2Hover, setBar2Hover] = useState<number | null>(null);
  const [bar3Hover, setBar3Hover] = useState<number | null>(null);
  const [bar4Hover, setBar4Hover] = useState<number | null>(null);

  return (
    <motion.section
      id="graphs"
      className="relative min-h-screen py-32 px-8 overflow-hidden"
      style={{ 
        position: 'relative' as const, 
        zIndex: 10, 
        backgroundColor: '#000000'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 text-center"
        >
          STATISTICS & DATA
        </motion.h2>

        {/* Single Card Container for All Graphs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20 overflow-hidden hover:shadow-red-500/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-2xl" />
          
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent)',
            }}
          />
          
          {/* Bento Grid Layout using Magic Bento Component */}
          <MagicBento className="relative z-10">
          {/* Donut Chart 1 - Events Distribution - Span 2 cols, 1 row */}
          <MagicBentoItem span={2} rowSpan={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-r border-b border-red-500/20 hover:border-red-500/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <h3 className="text-sm font-bold text-white mb-1 text-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-red-500">Events</span> Distribution
              </h3>
              <div className="relative flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Pie
                      data={donutData1}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {donutData1.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          onMouseEnter={() => setDonut1Hover(index)}
                          onMouseLeave={() => setDonut1Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: donut1Hover === index ? 'drop-shadow(0 6px 12px rgba(220, 38, 38, 0.6))' : 'none',
                            transform: donut1Hover === index ? 'scale(1.15) translate(0, -8px)' : 'scale(1) translate(0, 0)',
                            transformOrigin: '50% 50%',
                            cursor: 'pointer',
                            zIndex: donut1Hover === index ? 10 : 1,
                          }} 
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>

          {/* Donut Chart 2 - Regional Participation - Span 1 col */}
          <MagicBentoItem span={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-r border-b border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <h3 className="text-xs font-bold text-white mb-1 text-center relative z-10">
                <span className="text-red-500">Regional</span> Participation
              </h3>
              <div className="relative flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Pie
                      data={donutData2}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {donutData2.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          onMouseEnter={() => setDonut2Hover(index)}
                          onMouseLeave={() => setDonut2Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: donut2Hover === index ? 'drop-shadow(0 6px 12px rgba(220, 38, 38, 0.6))' : 'none',
                            transform: donut2Hover === index ? 'scale(1.15) translate(0, -8px)' : 'scale(1) translate(0, 0)',
                            transformOrigin: '50% 50%',
                            cursor: 'pointer',
                            zIndex: donut2Hover === index ? 10 : 1,
                          }} 
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>

          {/* Bar Chart 1 - Kascades Growth - Span 1 col */}
          <MagicBentoItem span={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-b border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <h3 className="text-xs font-bold text-white mb-1 text-center relative z-10">
                <span className="text-red-500">Kascades</span> Growth
              </h3>
              <div className="relative flex-1">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData1}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <YAxis 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar 
                      dataKey="value" 
                      fill="url(#redGradient)"
                      radius={[8, 8, 0, 0]}
                    >
                      <defs>
                        <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#991b1b" />
                        </linearGradient>
                      </defs>
                      {barChartData1.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          onMouseEnter={() => setBar1Hover(index)}
                          onMouseLeave={() => setBar1Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: bar1Hover === index ? 'drop-shadow(0 6px 12px rgba(220, 38, 38, 0.6))' : 'none',
                            transform: bar1Hover === index ? 'scaleY(1.15) translate(0, -6px)' : 'scaleY(1) translate(0, 0)',
                            transformOrigin: 'bottom center',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>

          {/* Bar Chart 2 - Instagram Growth - Span 4 cols to fill entire row */}
          <MagicBentoItem span={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-b border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <h3 className="text-sm font-bold text-white mb-1 text-center relative z-10">
                <span className="text-red-500">Instagram</span> Growth
              </h3>
              <div className="relative flex-1 flex items-center">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData2}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <YAxis 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar 
                      dataKey="followers" 
                      fill="url(#pinkGradient)"
                      radius={[8, 8, 0, 0]}
                    >
                      <defs>
                        <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                      {barChartData2.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          onMouseEnter={() => setBar2Hover(index)}
                          onMouseLeave={() => setBar2Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: bar2Hover === index ? 'drop-shadow(0 6px 12px rgba(239, 68, 68, 0.6))' : 'none',
                            transform: bar2Hover === index ? 'scaleY(1.15) translate(0, -6px)' : 'scaleY(1) translate(0, 0)',
                            transformOrigin: 'bottom center',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>

          {/* Bar Chart 3 - Participants by Category - Span 1 col */}
          <MagicBentoItem span={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-r border-b border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <h3 className="text-xs font-bold text-white mb-1 text-center relative z-10">
                <span className="text-red-500">Participants</span> by Category
              </h3>
              <div className="relative flex-1">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData3}>
                    <XAxis 
                      dataKey="category" 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <YAxis 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar 
                      dataKey="participants" 
                      fill="url(#lightRedGradient)"
                      radius={[8, 8, 0, 0]}
                    >
                      <defs>
                        <linearGradient id="lightRedGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f87171" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                      {barChartData3.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          onMouseEnter={() => setBar3Hover(index)}
                          onMouseLeave={() => setBar3Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: bar3Hover === index ? 'drop-shadow(0 6px 12px rgba(248, 113, 113, 0.6))' : 'none',
                            transform: bar3Hover === index ? 'scaleY(1.15) translate(0, -6px)' : 'scaleY(1) translate(0, 0)',
                            transformOrigin: 'bottom center',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>

          {/* Bar Chart 4 - Regional Distribution - Span 3 cols to fill remaining space */}
          <MagicBentoItem span={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
              className="relative p-4 flex flex-col h-full border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <h3 className="text-sm font-bold text-white mb-1 text-center relative z-10">
                <span className="text-red-500">Regional</span> Distribution
              </h3>
              <div className="relative flex-1">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData4}>
                    <XAxis 
                      dataKey="region" 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <YAxis 
                      stroke="#666"
                      tick={{ fill: '#999', fontSize: 12 }}
                      axisLine={{ stroke: '#333' }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar 
                      dataKey="colleges" 
                      fill="url(#darkRedGradient)"
                      radius={[8, 8, 0, 0]}
                    >
                      <defs>
                        <linearGradient id="darkRedGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#991b1b" />
                        </linearGradient>
                      </defs>
                      {barChartData4.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          onMouseEnter={() => setBar4Hover(index)}
                          onMouseLeave={() => setBar4Hover(null)}
                          className="chart-cell"
                          style={{ 
                            filter: bar4Hover === index ? 'drop-shadow(0 6px 12px rgba(220, 38, 38, 0.6))' : 'none',
                            transform: bar4Hover === index ? 'scaleY(1.15) translate(0, -6px)' : 'scaleY(1) translate(0, 0)',
                            transformOrigin: 'bottom center',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </MagicBentoItem>
          </MagicBento>
        </motion.div>
      </div>
    </motion.section>
  );
}
