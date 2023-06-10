import React, { useState } from 'react'
import { useEffect } from 'react'
import "../style/Homepage.css"
import Slides from './Slides'
import Movie from './Movie';

export default function Homepage() {


    const [data, setData] = useState([{
        image: "",
        name: "",
        tagLine: "",
        date: "",
        duration: "",
        views: "",
        publisherName: "",
        publisherImage: ""
    }]);

    useEffect(() => {
        setData([
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 100,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 101,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 102,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 103,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 104,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "https://th.bing.com/th/id/OIP.ru7zqrifBbVU29y0oGMkuwHaHa?pid=ImgDet&rs=1"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/R.bd63f0f4084a9bc5deb9d0b5a0c8cd8e?rik=kKOKMZOodNNgeA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Tl7Fe18xLg0%2fU4-uD5M-fvI%2fAAAAAAAAIIg%2fzMsahnvmr1c%2fs1600%2fGodzilla-art-horizontal.jpg&ehk=z9BrJGGVbFWhVYZORU8OmHeHp01rj1EQS4Ym15ZE%2fd0%3d&risl=&pid=ImgRaw&r=0",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://th.bing.com/th/id/OIP.ad-AuCZOFujCjC9dfLZMlAHaHa?pid=ImgDet&rs=1",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
            {
                image: "https://gumlet.assettype.com/dtnext/2023-02/41a56d18-53a9-4ae0-b097-8ff4bf37253b/Untitled_design___2023_02_16T122907_237.jpg?rect=0%2C37%2C1000%2C525&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                name: "Godzilla",
                tagLine: "Attack in the City",
                date: new Date().toJSON().slice(0, 10),
                duration: "120 Mins",
                views: 200,
                publisherName: "publisher Name",
                publisherImage: "path"
            },
        ]);

    }, [])


    const [movie, setMovie] = useState(0)

    const displayMovie = (idx) => {
        setMovie(data[idx])
        console.log(movie, "   data[idx]")
    }

    return <section className='homepage'>

        <div className='allmovies'>
            <div className='options'>
                <h1>My videos</h1>
                <h1>Recent</h1>
            </div>
            {
                data.map((data, index) => {
                    return <Slides
                        key={index}
                        data={data}
                        index={index}
                        displayMovie={displayMovie}
                    />
                })
            }
        </div>
        <div className='line'></div>
        <Movie movie={movie} />
    </section>


}
