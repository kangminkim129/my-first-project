import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-black text-white font-sans selection:bg-[#800020] selection:text-white">
      
      {/* --- 배경 이미지 레이어 --- */}
      <div 
        className="absolute inset-0 z-0 
                   bg-[url('/agent-007.png')] 
                   bg-no-repeat 
                   bg-right-bottom 
                   bg-contain 
                   opacity-20 md:opacity-30" // 자기소개 글이 잘 보이도록 투명도 조절
      />

      {/* --- 실제 자기소개 내용 레이어 --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 animate-fade-in">
        {/* Header / Name Section */}
        <section className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            김강민
            <span className="text-[#800020]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            IT를 활용한 작업의 모던한 효율화를 추구하는 개발자입니다.
          </p>
        </section>

        {/* Interests Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-[#800020] pb-2 inline-block">
              Interests
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#800020] font-medium mb-1 uppercase tracking-widest text-sm">Running</h3>
                <p className="text-zinc-300 leading-relaxed">
                  한계를 넘어서는 꾸준함과 리듬을 좋아합니다.
                </p>
              </div>
              <div>
                <h3 className="text-[#800020] font-medium mb-1 uppercase tracking-widest text-sm">Movies</h3>
                <p className="text-zinc-300 leading-relaxed">
                  007 시리즈의 클래식한 멋과 F1의 정교한 속도감을 즐깁니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-[#800020] pb-2 inline-block">
              Philosophy
            </h2>
            <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-[#800020]/50 transition-colors">
              <h3 className="text-lg font-medium mb-3">Modern Efficiency</h3>
              <p className="text-zinc-400 leading-relaxed">
                단순히 기술을 사용하는 것을 넘어, 도구를 통해 삶과 작업의 프로세스를 
                가장 모던하고 효율적인 방식으로 재설계하는 것에 열정을 가집니다.
              </p>
            </div>
          </div>
        </section>

        {/* Footer / Contact Hint */}
        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex justify-between items-center text-zinc-500 text-sm">
          <p>© 2024 Kim Kang-min</p>
          <div className="flex gap-6">
            <span className="hover:text-[#800020] transition-colors cursor-default">Efficiency</span>
            <span className="hover:text-[#800020] transition-colors cursor-default">Modern</span>
            <span className="hover:text-[#800020] transition-colors cursor-default">Innovation</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
