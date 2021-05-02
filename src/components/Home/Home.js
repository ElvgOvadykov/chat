import React from 'react';

import Message from '../Message';

const Home = () => {
    return (
        <div className="home">
            <Message
                avatar="https://sun9-63.userapi.com/s/v1/ig1/dUyfpJntXYNYvZeR1mdQpxhjczhllEZkYqDBty80Yd5n4x8yH4XhPrZ29hcAHP2QuDAuNMRB.jpg?size=200x0&quality=96&crop=1,11,1062,1062&ava=1"
                date={new Date(2021, 1)}
                text="Менд, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"/>
            <Message
                avatar="https://lh3.googleusercontent.com/proxy/QLCKPooVP1GESZpzZuZCRtYNxiGC8Q730ModwYPxr9Ig91gCqwsormFGWj8nPZEMukmy_M9BVI-8ndvcTVo3jotCJl1GmMW2uAlKO11b1m4277_KvSiz0x4"
                date={new Date()}
                text="Менд, брат 🖐🏻"
                isMe
                isRead/>
            <Message
                avatar="https://source.unsplash.com/random"
                date={new Date()}
                text="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                attachments={
                    [
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?water"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },{
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },{
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/1600x900/?nature"
                        },
                    ]
                }/>
        </div>
    )
}

export default Home;