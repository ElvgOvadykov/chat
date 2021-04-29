import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './Message.scss';

const Message = ({avatar, user, text, date}) => {
    console.log(date);
    return(
       <div className="message">
           <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
           </div>
           <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <span className="message__date">{formatDistanceToNow(date)}</span>
           </div>
       </div>
   )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
}

export default Message;