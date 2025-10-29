'use client';

export function DomeGallerySkeleton() {
  return (
    <div className="w-[120%] h-[750px] -ml-[10%] overflow-visible">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Spinning loader */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/60 text-sm font-medium">Loading Gallery...</div>
            </div>
          </div>
        </div>
        
        {/* Skeleton grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 gap-4 p-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl animate-pulse"
                style={{
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

