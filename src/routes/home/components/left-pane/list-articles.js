import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchArticlesUseCase } from "../../../../lib/data"
import { Article } from "./article"
import styled from "styled-components"

const Container = styled.div`
    padding-top: 10px;
`

export const ListArticles = () => {
    const currTab = useSelector(state => state.home.currTab)
    const [articles, setArticles] = useState([])

    const fetchArticles = async () => {
        const articles = fetchArticlesUseCase(currTab)
        setArticles(articles)
    }
    useEffect(() => {
        fetchArticles()
    }, [currTab])

    return (
        <Container>
            {articles && articles.length > 0
                && articles.map(article => <Article key={article.id} article={article} />)}
        </Container>
    )
}