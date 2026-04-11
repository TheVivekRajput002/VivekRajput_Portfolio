import BlogLayout, { mdxComponents } from '../components/blogs/BlogLayout'
import Content, { frontmatter } from '../data/blogs/blog1.mdx'

export default function ArticlePage() {
  return (
    <BlogLayout frontmatter={frontmatter}>
      <Content components={mdxComponents} />
    </BlogLayout>
  )
}
