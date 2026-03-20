"use client";

const StatsChart = () => {
  return (
    <div className="mt-6" style={{ marginTop: "clamp(16px, 2vw, 28px)" }}>
      <svg
        viewBox="0 0 400 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ maxHeight: "clamp(50px, 6vw, 80px)" }}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Fill area */}
        <path
          d="M0 65 Q10 60 20 58 Q30 52 40 55 Q50 48 60 50 Q70 44 80 46 Q90 40 100 43 Q110 38 120 35 Q130 42 140 40 Q150 36 160 38 Q170 32 180 30 Q190 35 200 28 Q210 32 220 26 Q230 30 240 24 Q250 28 260 22 Q270 26 280 20 Q290 24 300 18 Q310 22 320 16 Q330 20 340 14 Q350 18 360 12 Q370 15 380 10 Q390 12 400 8 L400 80 L0 80 Z"
          fill="url(#chartGradient)"
        />
        {/* Line */}
        <path
          d="M0 65 Q10 60 20 58 Q30 52 40 55 Q50 48 60 50 Q70 44 80 46 Q90 40 100 43 Q110 38 120 35 Q130 42 140 40 Q150 36 160 38 Q170 32 180 30 Q190 35 200 28 Q210 32 220 26 Q230 30 240 24 Q250 28 260 22 Q270 26 280 20 Q290 24 300 18 Q310 22 320 16 Q330 20 340 14 Q350 18 360 12 Q370 15 380 10 Q390 12 400 8"
          stroke="#EF4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default StatsChart;
