'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewer({ pdfUrl, title, isOpen, onClose }: PDFViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdf, setPdf] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pdfjsLib, setPdfjsLib] = useState<any>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animDirection, setAnimDirection] = useState<"next" | "prev" | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;

    const loadPDF = async () => {
      try {
        setLoading(true);
        
        // Dynamic import PDF.js only on client side
        const pdfjsLib = await import('pdfjs-dist');
        
        // Use local worker file to avoid CORS issues
        pdfjsLib.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;
        
        setPdfjsLib(pdfjsLib);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdfDocument = await loadingTask.promise;
        setPdf(pdfDocument);
        setNumPages(pdfDocument.numPages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl, isOpen]);

  useEffect(() => {
    if (!pdf || !canvasRef.current || !pdfjsLib) return;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(currentPage);
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d');
        if (!context) return;

        const baseScale = 1.5; // baseline rendering scale for clarity
        const viewport = page.getViewport({ scale: baseScale * Math.max(0.25, Math.min(4, scale)) });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error rendering page:', error);
      }
    };

    renderPage();
  }, [pdf, currentPage, pdfjsLib, scale]);

  const handlePrevious = () => {
    setAnimDirection("prev");
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setAnimDirection("next");
    setCurrentPage((prev) => Math.min(numPages, prev + 1));
  };

  // Wheel navigation and zoom (Ctrl/Cmd + wheel to zoom; regular wheel to flip pages with debounce)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Always prevent page scroll while interacting with viewer
      e.preventDefault();
      e.stopPropagation();

      // Ctrl/Cmd + wheel => zoom
      if (e.ctrlKey || e.metaKey) {
        const delta = -e.deltaY;
        setScale((s) => {
          const next = s + (delta > 0 ? 0.1 : -0.1);
          return Math.min(4, Math.max(0.25, Number(next.toFixed(2))));
        });
        return;
      }

      const atTop = el.scrollTop <= 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
      const scrollingDown = e.deltaY > 0;

      // If we can scroll within the container, do that
      if ((!scrollingDown && !atTop) || (scrollingDown && !atBottom)) {
        el.scrollBy({ top: e.deltaY, left: 0, behavior: 'auto' });
        return;
      }

      // If we are at an edge, flip page
      if (scrollingDown && atBottom) {
        handleNext();
      } else if (!scrollingDown && atTop) {
        handlePrevious();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel as any);
    };
  }, [numPages]);

  // Lock page scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen]);

  // Fullscreen toggle
  const toggleFullscreen = async () => {
    try {
      const modal = modalRef.current as any;
      if (!document.fullscreenElement && modal?.requestFullscreen) {
        await modal.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (e) {
      console.error('Fullscreen error:', e);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col bg-black rounded-2xl border border-red-500/30 overflow-hidden shadow-2xl"
            ref={modalRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-600/10 to-red-500/5 border-b border-red-500/20">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-bold text-lg truncate">{title}</h3>
                <span className="text-white/60 text-sm">
                  Page {currentPage} of {numPages}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Zoom Out */}
                <button
                  onClick={() => setScale((s) => Math.max(0.25, Number((s - 0.1).toFixed(2))))}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                  aria-label="Zoom out"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                {/* Zoom Level */}
                <span className="text-white/70 text-sm w-14 text-center">{Math.round(scale * 100)}%</span>
                {/* Zoom In */}
                <button
                  onClick={() => setScale((s) => Math.min(4, Number((s + 0.1).toFixed(2))))}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                  aria-label="Zoom in"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                  aria-label="Toggle fullscreen"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3H5a2 2 0 00-2 2v3m0 6v3a2 2 0 002 2h3m6 0h3a2 2 0 002-2v-3m0-6V5a2 2 0 00-2-2h-3" />
                  </svg>
                </button>
                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                  aria-label="Close PDF viewer"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* PDF Container */}
            <div ref={containerRef} className="flex-1 overflow-auto bg-gray-900 p-4 min-h-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                  <p className="text-white/60">Loading PDF...</p>
                </div>
              ) : (
                <div className="flex items-start justify-center min-h-full p-8">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: animDirection === 'next' ? 20 : animDirection === 'prev' ? -20 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: animDirection === 'next' ? -20 : 20 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <canvas ref={canvasRef} className="max-w-full shadow-2xl" />
                  </motion.div>
                </div>
              )}
            </div>
            
            {/* Footer with Controls */}
            <div className="p-4 bg-gradient-to-r from-red-600/10 to-red-500/5 border-t border-red-500/20">
              <div className="flex items-center justify-between">
                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-600/30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={currentPage === numPages}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-600/30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Download */}
                <a
                  href={pdfUrl}
                  download
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}