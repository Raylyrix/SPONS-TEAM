'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PDFViewer } from '@/components/ui/pdf-viewer';

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  size: string;
  date: string;
}

const pdfDocuments: PDFDocument[] = [
  {
    id: '1',
    title: 'GPT Neox Deep Dive',
    description: 'Comprehensive analysis and technical documentation',
    url: '/gpt_neox_deep_dive.pdf',
    category: 'Technical Research',
    size: '2.4 MB',
    date: '2024'
  },
  {
    id: '2',
    title: 'LLM Safety Package',
    description: 'Safety guidelines and best practices for LLM deployment',
    url: '/llm_safety_package.pdf',
    category: 'Guidelines',
    size: '1.8 MB',
    date: '2024'
  },
  {
    id: '3',
    title: 'Subsurface Ventilation Engineering',
    description: 'Engineering documentation and technical specifications',
    url: '/Subsurface_Ventilation_Engineering (1).pdf',
    category: 'Technical Research',
    size: '3.1 MB',
    date: '2024'
  }
];

export default function PDFs() {
  const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handlePDFClick = (pdf: PDFDocument) => {
    setSelectedPDF(pdf);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedPDF(null);
  };

  return (
    <>
      <section id="pdfs" className="relative min-h-screen py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              DOCUMENTS
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Browse and preview our technical documentation
            </p>
          </motion.div>

          {/* PDF Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfDocuments.map((pdf, index) => (
              <motion.div
                key={pdf.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCard(pdf.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handlePDFClick(pdf)}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-2xl border border-red-500/20 group-hover:border-red-500/50 transition-all duration-500 overflow-hidden">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 blur-2xl" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Icon Container */}
                    <motion.div 
                      className="mb-6"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative w-20 h-20">
                        {/* Animated Background Circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        
                        {/* Icon Box */}
                        <div className="relative w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/40 backdrop-blur-sm group-hover:scale-110 group-hover:border-red-500/60 transition-all duration-300">
                          <svg className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                      {pdf.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/50 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {pdf.description}
                    </p>
                    
                    {/* Metadata */}
                    <div className="mt-auto space-y-3">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-400 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        {pdf.category}
                      </div>
                      
                      {/* File Info */}
                      <div className="flex items-center justify-between text-xs text-white/40">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                          </svg>
                          <span>{pdf.size}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{pdf.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 pt-6 border-t border-red-500/10">
                      <motion.div 
                        className="flex items-center justify-between text-red-400"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-sm font-semibold">Open Document</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <PDFViewer
          pdfUrl={selectedPDF.url}
          title={selectedPDF.title}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
}