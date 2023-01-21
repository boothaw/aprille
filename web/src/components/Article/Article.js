import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <div>Posted At: {article.createdAt}</div>
    </article>
  )
}

export default Article
