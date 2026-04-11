import { useState } from "react";

const META = [
    { key: "Publication Year", value: "2024" },
    { key: "Design Category", value: "Theory" },
    { key: "Reading Time", value: "08:00 Min" },
    { key: "Core Location", value: "Stockholm" },
];

const CARDS = [
    {
        index: "01",
        title: "Asymmetry",
        body: "Breaking the rigid grid allows for a more organic flow. It guides the eye through narrative rather than forcing it through structure.",
    },
    {
        index: "02",
        title: "Layering",
        body: "Using subtle tonal shifts instead of harsh borders creates depth and hierarchy without adding visual noise to the interface.",
    },
];

export default function NordenArticle() {
    const [imageHovered, setImageHovered] = useState(false);

    return (
        <div
            className="min-h-screen py-24 px-4"
            style={{
                fontFamily: "'Manrope', sans-serif",
                backgroundColor: "#fcfcfc",
                backgroundImage:
                    "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
                backgroundSize: "40px 40px",
            }}
        >
            {/* Main column */}
            <main className="relative max-w-[55%] mx-auto bg-white min-h-screen border-x border-gray-200 shadow-[0_0_50px_rgba(0,0,0,0.02)] px-16 py-24 flex flex-col gap-24">
                {/* Corner crosshair marks */}
                <span
                    className="absolute font-mono text-sm text-gray-300 select-none pointer-events-none"
                    style={{ top: -10, left: -6 }}
                >
                    +
                </span>
                <span
                    className="absolute font-mono text-sm text-gray-300 select-none pointer-events-none"
                    style={{ top: -10, right: -6 }}
                >
                    +
                </span>

                {/* ── Header ── */}
                <header className="space-y-10">
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-900 inline-block" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900">
                                Technical Analysis
                            </span>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
                            Vol. 04 / 2024
                        </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-8">
                        <h1 className="text-6xl font-light tracking-tight text-gray-900 leading-[1.05] -ml-0.5">
                            The Quiet Power of
                            <br />
                            <em className="font-medium italic">Functional Minimalism</em>
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl border-l-2 border-gray-200 pl-8">
                            From concept to curation, we explore how intentional space and
                            simplicity can transform environments into sanctuaries of focus.
                        </p>
                    </div>

                    {/* Meta grid */}
                    <div className="grid grid-cols-4 border border-gray-200 divide-x divide-gray-200 rounded-sm overflow-hidden">
                        {META.map(({ key, value }) => (
                            <div key={key} className="p-6 space-y-2">
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                    {key}
                                </span>
                                <span className="block text-sm font-medium text-gray-900">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* ── Feature image ── */}
                <section className="space-y-4">
                    <div className="relative">
                        {/* Bracket corners */}
                        <span className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t border-l border-gray-200 pointer-events-none z-10" />
                        <span className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b border-r border-gray-200 pointer-events-none z-10" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qFsW0uxeCGR-7FQSmBwSCBtrsAKXfBfDhQuoua4Q_H_nvUoujrBXmFyhZMsz5gBagCc5CMNci9pKmnZQt9AsiMAW4o5GxyUxGtGBj-AcQbwl8kbHs-CPK7JtuloE024hztOr_8rc9FuwmghmvqCNmd75xh3BkEYh42tQqjNjviZLKRJOpckyFK9X5Lv-37XMWPxZXiZI_IMvtQM5L_yit-0vAFVl4arXKVm9ZoJvmWxFno6Gv2xw5sZgwzvELcnkUIS5YjrzU0k5"
                            alt="Minimalist architectural space with clean concrete lines"
                            onMouseEnter={() => setImageHovered(true)}
                            onMouseLeave={() => setImageHovered(false)}
                            className="w-full h-auto object-cover aspect-video transition-all duration-700"
                            style={{ filter: imageHovered ? "grayscale(0)" : "grayscale(1)" }}
                        />
                    </div>

                    {/* Caption */}
                    <div className="flex justify-between items-start pt-4 border-t border-gray-100">
                        <div className="space-y-1">
                            <span className="block text-[10px] font-bold uppercase tracking-tight text-gray-900">
                                Fig 01. Spatial Logic
                            </span>
                            <span className="block text-[10px] text-gray-400 font-light">
                                The Atrium Residence, Interior Perspective
                            </span>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">
                            Norden Archive © 2024
                        </span>
                    </div>
                </section>

                {/* ── Article body ── */}
                <article className="flex flex-col gap-16">

                    {/* Section 1 — The Curator's Mindset */}
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-4">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] pt-2 text-gray-900">
                                The Curator's Mindset
                            </h2>
                        </div>
                        <div className="col-span-8 space-y-6">
                            <p className="text-xl leading-[1.8] font-light text-gray-900">
                                Minimalism is often misunderstood as a subtractive process—a
                                race to see how much we can remove until we are left with
                                nothing. In reality, the true essence of minimalism is
                                curation.
                            </p>
                            <p className="text-lg leading-[1.8] font-light text-gray-500">
                                It is the intentional selection of elements that serve a
                                purpose, whether that purpose is functional, emotional, or
                                aesthetic. When we approach design as curators, the focus
                                shifts from addition to essentialism.
                            </p>
                        </div>
                    </div>

                    {/* Quote block */}
                    <div className="relative bg-white border border-gray-200 p-12 overflow-hidden">
                        <span className="absolute top-4 right-4 text-[8px] font-mono text-gray-200">
                            REF: J_IVE_002
                        </span>
                        <div className="flex gap-1 mb-8">
                            <div className="w-1 h-1 bg-gray-900" />
                            <div className="w-1 h-1 bg-gray-900/40" />
                            <div className="w-1 h-1 bg-gray-900/20" />
                        </div>
                        <blockquote className="text-3xl font-light text-gray-900 leading-tight italic max-w-3xl">
                            "Simplicity is not the absence of clutter, that's a consequence
                            of simplicity. Simplicity is somehow essentially describing the
                            purpose and place of an object."
                        </blockquote>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-px w-12 bg-gray-900" />
                            <cite className="text-[10px] font-bold uppercase tracking-widest text-gray-400 not-italic">
                                Jony Ive, Creative Director
                            </cite>
                        </div>
                    </div>

                    {/* Section 2 — Digital Density */}
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-4">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] pt-2 text-gray-900">
                                Digital Density
                            </h2>
                        </div>
                        <div className="col-span-8 space-y-10">
                            <p className="text-lg leading-[1.8] font-light text-gray-500">
                                In the physical world, we understand that a room crowded with
                                objects feels chaotic. Yet, in our digital lives, we often
                                tolerate "busy" interfaces. The Digital Curator rejects this
                                density in favor of clarity.
                            </p>
                            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                                {CARDS.map(({ index, title, body }) => (
                                    <div key={index} className="bg-white p-8">
                                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">
                                            {index} / {title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                                            {body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Author footer */}
                    <footer className="border-t border-gray-200 pt-16 grid grid-cols-12 gap-8">
                        <div className="col-span-4 flex flex-col gap-4">
                            <div className="w-24 h-24 overflow-hidden bg-gray-100 border border-gray-200">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrNcN3klcBnxvKz1vhk4KIiNmF22IFenNDjnXKoWT94EXfoWzkPMIyOiw4JZzz0Qid8RbMLIKknEHVqNEcH2acWcBwVnfFKqxJNd_hRPGsuqOYG7rq1K7f60eYkVdeqhikmiy9lakTiBFAl4H_kysq2lOAFFdOldJcQB2IJNteZKf-oWCthGG3YDCmgXz3AMwxU9EMeZY9C8GdXmlzq2YM27qlp5TCTsUgHjDXgSxjGvC1GfEAWExvsxUv8CI4Py7Vi3ssUgV2EyRt"
                                    alt="Erik Vondervall"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">
                                    Erik Vondervall
                                </p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                                    Lead Strategist
                                </p>
                            </div>
                        </div>
                        <div className="col-span-8 space-y-6">
                            <p className="text-xl font-light leading-relaxed text-gray-900">
                                Founder of Norden. Dedicated to the intersection of
                                architecture and digital interface design, creating spaces that
                                breathe and systems that endure.
                            </p>
                            <div className="flex gap-8">
                                <a
                                    href="#"
                                    className="text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-0.5"
                                >
                                    Connect
                                </a>
                                <a
                                    href="#"
                                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    Full Portfolio
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>

                {/* Colophon */}
                <div className="flex flex-col items-center gap-4 pt-8">
                    <div className="w-12 h-px bg-gray-200" />
                    <p className="text-[9px] uppercase tracking-[0.6em] font-bold text-gray-300">
                        Norden Minimal · Curated Archive 2024
                    </p>
                </div>
            </main>
        </div>
    );
}