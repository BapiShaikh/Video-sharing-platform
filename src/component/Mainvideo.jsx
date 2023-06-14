import React, { useState } from 'react'
import "../style/Mainvideo.css"
import { useEffect } from 'react'
import Slides from './Slides'
import axios from "axios"
export default function Mainvideo() {

    const [user, setUser] = useState(true)
    // const [count, setCount] = ("")
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

        // Fetch data from the DB using the Fetch 
        const info = fetch("http://localhost:8081/upload/viewVideos/1");
        info.then((response) => response.json())
            .then(data => {
                setData(data.data)
                console.log(data.data)
            })
            .catch((error) => {
                console.log(error)
            })

        setData([
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

    const [one] = data.splice(0, 1);
    console.log(one.url, "This is the first Object in the Array that is fetched ")
    const [view, setView] = useState("viewmore")
    const [count, setCount] = useState(4)

    return <div className='mainpage'>

        <div className='firstslide'>
            <div>
                <video width="320" height="240" controls >
                    <source src={`${one.url}`} type="video/mp4" />
                </video>
            </div>
            <div className='moviename'>
                <h1>{one.name}</h1>
                <h1>{one.tagline}</h1>
            </div>
            <div className='moviedetails'>
                <span>{one.date}</span>
                <span>{one.duration}</span>
                <span>{`${one.views} views`}</span>
            </div>
            <div className='publisherdetails'>
                {/* <img src={one.publisherImage} alt="Publisher" /> */}
                <h4>{one.publishername}</h4>
            </div>

        </div>
        <div className='options'>
            <h1 >Recent</h1>
            <h1
                onClick={() => {
                    if (view === "viewmore") {
                        setCount(4)
                        setView("viewless")
                    } else {
                        setCount(0)
                        setView("viewmore")
                    }
                }}
            >{view}</h1>
        </div>
        <div className='allmovies' style={{ width: "98%" }}>
            {/* {
                view === "viewmore"
                    ? data.map((data, index) => {
                        return <Slides key={index} data={data} />
                    })
                    : data.splice(0, 5).map((data, index) => {
                        return <Slides key={index} data={data} />
                    })
            } */}
        </div>

    </div>
}
