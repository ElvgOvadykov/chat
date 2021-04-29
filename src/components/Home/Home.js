import React from 'react';

import Message from '../Message';

const Home = () => {
    return(
        <div className="home">
            <Message 
                avatar="https://sun9-63.userapi.com/s/v1/ig1/dUyfpJntXYNYvZeR1mdQpxhjczhllEZkYqDBty80Yd5n4x8yH4XhPrZ29hcAHP2QuDAuNMRB.jpg?size=200x0&quality=96&crop=1,11,1062,1062&ava=1"
                date={new Date(2021,1)}
                text="Менд, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"/>
        </div>
    )
}

export default Home;