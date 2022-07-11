import React from 'react'

export default function Timeline(props) {

    const displayArticles = (props) => {
        const {articles} = props;

        if(articles.length > 0)
        {
            return(
                articles.map((article, index) =>{
                    console.log(article);
                    return(
                        <div className='article' key={article.author}>
                            <h3 className="article_title">{article.title}</h3>
                            <p className="article_body">{article.content}</p>
                            <span className="article_fadeout"></span>

                        </div>
                    )
                })
            )
        }else{
            return (<h3>No articles yet</h3>)
        }
    }
    return(
        <>
            {displayArticles(props)}
        </>
    )
}
