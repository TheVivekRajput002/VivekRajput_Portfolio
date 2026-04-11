export const mdxComponents = {
    h1: (props) => <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-maintext)] mt-8 mb-5" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-maintext)] mt-8 mb-5" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold text-[var(--color-maintext)] mt-7 mb-4" {...props} />,
    p: (props) => <p className="text-md leading-[1.8] font-light text-[var(--color-maintext)] mb-6" {...props} />,
    hr: (props) => <hr className="my-8 border-[var(--color-darkgray)]" {...props} />,
    blockquote: (props) => <blockquote className="border-l-2 border-gray-300 pl-6 italic text-lg leading-tight text-gray-900" {...props} />,
    pre: ({ className = "", ...props }) => (
        <pre
            className={`my-8 overflow-x-auto rounded-xl border border-[var(--color-darkgray)] bg-[#1f2430] p-5 shadow-sm ${className}`}
            {...props}
        />
    ),
    code: ({ className = "", ...props }) => {
        const isBlockCode = className.includes("language-") || Boolean(props["data-language"])

        if (isBlockCode) {
            return (
                <code
                    className={`${className} block font-mono text-[0.93rem] leading-7`}
                    {...props}
                />
            )
        }

        return (
            <code
                className="rounded bg-[var(--color-lightgray)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-maintext)]"
                {...props}
            />
        )
    },
}

export default function ArticleLayout({ frontmatter, children }) {
    const {
        title, description, volume, label,
        image, imageCaption, imageSubCaption, imageReference,
        authorName, authorRole, authorBio, authorImage,
        meta, cards
    } = frontmatter

    return (
        <div className="min-h-screen py-6 px-4 bg-[var(--color-innerbg)]"
            style={{ fontFamily: "'Manrope', sans-serif" }}>

            <main className="relative min-h-screen flex flex-col gap-15">

                {/* Corner marks */}
                <span className="absolute font-mono text-sm text-[var(--color-darkgray)] select-none pointer-events-none"
                    style={{ top: -10, left: -6 }}>+</span>
                <span className="absolute font-mono text-sm text-[var(--color-darkgray)] select-none pointer-events-none"
                    style={{ top: -10, right: -6 }}>+</span>

                {/* Header */}
                <header className="space-y-10">
                    <div className="flex items-center justify-between border-b border-[var(--color-darkgray)] pb-6">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-maintext)] inline-block" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-maintext)] ">
                                {label}
                            </span>
                        </div>

                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-p3text)]">
                            {volume}
                        </span>
                    </div>

                    <div className="space-y-8">
                        <h1 className="text-6xl font-light tracking-tight text-[var(--color-maintext)] leading-[1.05]">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl border-l-2 border-[var(--color-gray)] pl-8">
                            {description}
                        </p>
                    </div>

                    {/* Meta grid — now from frontmatter */}
                    <div className="grid grid-cols-4 border border-gray-200 divide-x divide-gray-200 rounded-sm overflow-hidden">
                        {meta.map(({ key, value }) => (
                            <div key={key} className="p-6 space-y-2">
                                <span className="block text-[9px] font-bold uppercase tracking-widest text-[var(--color-p3text)]">
                                    {key}
                                </span>
                                <span className="block text-sm font-medium text-[var(--color-maintext)]">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                </header>

                {/* Feature Image */}
                <section className="space-y-4">
                    <div className="relative">
                        <span className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t border-l border-gray-200 pointer-events-none z-10" />
                        <span className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b border-r border-gray-200 pointer-events-none z-10" />
                        <img
                            src={image}
                            alt={imageCaption}
                            className="w-full h-auto object-cover aspect-video grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="flex justify-between items-start pt-4 border-t border-[var(--color-lightgray)]">
                        <div className="space-y-1">
                            <span className="block text-[10px] font-bold uppercase tracking-tight text-[var(--color-maintext)]">
                                {imageCaption}
                            </span>
                            <span className="block text-[10px] text-[var(--color-p2text)] font-light">
                                {imageSubCaption}
                            </span>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest font-bold text-[var(--color-p2text)]">
                            {imageReference}
                        </span>
                    </div>
                </section>

{/* index  */}
                <nav class="grid grid-cols-12 gap-8 border-y border-gray-200 py-12 my-2">

                    <div class="col-span-12 lg:col-span-4">
                        <h2 class="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                            Index / Contents
                        </h2>
                    </div>

                    <div class="col-span-12 lg:col-span-8">
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">

                            <li>
                                <a href="#" class="group flex items-center gap-3">
                                    <span class="text-[10px] font-mono text-gray-300 group-hover:text-gray-900 transition-colors">01.</span>
                                    <span class="text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">The Curator's Mindset</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="group flex items-center gap-3">
                                    <span class="text-[10px] font-mono text-gray-300 group-hover:text-gray-900 transition-colors">02.</span>
                                    <span class="text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">Physical vs. Digital Space</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="group flex items-center gap-3">
                                    <span class="text-[10px] font-mono text-gray-300 group-hover:text-gray-900 transition-colors">03.</span>
                                    <span class="text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">Intentional Asymmetry</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="group flex items-center gap-3">
                                    <span class="text-[10px] font-mono text-gray-300 group-hover:text-gray-900 transition-colors">04.</span>
                                    <span class="text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">Tonal Layering</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                </nav>

                {/* Article body — MDX content renders here */}
                <article className="flex flex-col gap-10 -mt-11 justify-center items-center ">
                    <div className="w-full max-w-none px-6">
                        {children}
                    </div>

                    {/* Author footer */}
                    <footer className="border-t border-[var(--color-darkgray)] pt-16 grid grid-cols-12 gap-4 px-5">
                        <div className="col-span-4 flex flex-col gap-4 justify-center items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-[var(--color-lightgray)] border border-[var(--color-p3text)]">
                                <img src={authorImage} alt={authorName}
                                    className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="space-y-1 flex flex-col items-center justify-center">
                                <p className="text-[12px] font-bold uppercase tracking-widest text-[var(--color-maintext)]">
                                    {authorName}
                                </p>
                                <p className="text-[8px] uppercase tracking-widest text-[var(--color-p3text)]">
                                    {authorRole}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-8 space-y-6">
                            <p className="text-lg font-light leading-relaxed text-[var(--color-maintext)]">
                                {authorBio}
                            </p>
                            <div className="flex gap-8">
                                <a href="https://www.linkedin.com/in/thevivekrajput002/" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-p2text)] border-b border-[var(--color-maintext)] pb-0.5">
                                    Connect
                                </a>
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-p2text)] hover:text-[var(--color-lightgray)] transition-colors">
                                    Medium
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>


            </main>
        </div>
    )
}
