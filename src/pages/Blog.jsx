import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import BlogLayout, { mdxComponents } from '../components/blogs/BlogLayout'

const blogModules = import.meta.glob('../data/blogs/*.mdx', { eager: true })

const toSlug = (value) =>
  value
    .replace(/\.mdx$/i, '')
    .replace(/[_\s]+/g, '-')
    .toLowerCase()

const blogsBySlug = Object.fromEntries(
  Object.entries(blogModules).map(([modulePath, moduleExports]) => {
    const fileName = modulePath.split('/').pop() ?? ''
    const slug = toSlug(fileName)
    return [slug, { Content: moduleExports.default, frontmatter: moduleExports.frontmatter }]
  })
)

export default function Blog() {
  const { slug } = useParams()
  const selectedBlog = blogsBySlug[slug]
  const [scrollProgress, setScrollProgress] = useState(0)

  if (!selectedBlog) return <Navigate to="/pagenotfound" replace />

  useEffect(() => {
    let rafId = null

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      const progress = scrollHeight <= 0 ? 0 : Math.min(1, Math.max(0, scrollTop / scrollHeight))
      setScrollProgress(progress)
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        updateScrollProgress()
        rafId = null
      })
    }

    updateScrollProgress()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  const { Content, frontmatter } = selectedBlog

  return (
    <>
      <aside className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-p3text)] [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
        <div className="h-36 w-[3px] rounded-full bg-[var(--color-lightgray)] overflow-hidden">
          <div
            className="h-full w-full origin-top bg-[var(--color-maintext)]"
            style={{ transform: `scaleY(${scrollProgress})` }}
          />
        </div>
      </aside>

      <BlogLayout frontmatter={frontmatter}>
        <Content components={mdxComponents} />
      </BlogLayout>
    </>
  )
}
