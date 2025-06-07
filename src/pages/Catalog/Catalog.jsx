import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'

const Catalog = () => {
    const { category } = useParams()
    console.log(category)
  return (
    <>
        <PageHeader>
            {category === 'anime' ? 'Anime' : 'Movies'}
        </PageHeader>
        <div className='catalog'>
            <h2>Catalog Page</h2>
            <p>Category: {category}</p>
        </div>
    </>
  )
}

export default Catalog