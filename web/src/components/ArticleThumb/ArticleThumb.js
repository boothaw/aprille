import { Link, routes } from '@redwoodjs/router'

const ArticleThumb = ({ article }) => {
  const shrinker = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=height:400')
    return parts.join('/')
  }

  return (
    <article
      id={`article-${article.id}`}
      className="article-thumb"
      key={article.id}
    >
      <Link to={routes.article({ id: article.id })}>
        <img
          loading="lazy"
          className="featured-image"
          src={shrinker(article.url)}
          alt={'Project Title: ' + article.title + article.id}
        />
        <header>
          <h2>{article.title}</h2>
        </header>
      </Link>
    </article>
  )
}

export default ArticleThumb
