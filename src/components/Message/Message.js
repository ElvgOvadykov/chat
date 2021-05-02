import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import check from "../../assets/img/check.svg";
import twoChecks from '../../assets/img/twoChecks.svg';
import './Message.scss';

const Message = ({ avatar, user, text, date, attachments, isMe, isRead, isDelivered }) => {
    const dataOptions = {
        addSuffix: true,
        locale: ruLocale
    }

    const renderCheck = () => {
        if (isMe && isRead) {
            return (
                <div className="message__check"><img src={twoChecks} alt="Прочитано" /></div>
            );
        }
    }

    const renderAttachments = () => {
        if (Array.isArray(attachments) && attachments.length > 0) {
            return (
                <div className="message__attachments">
                    {attachments.map((item) => {
                        return (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        )
                    })}
                </div>
            );
        }
    }

    console.log(date);
    return (
        <div className={classNames("message", { "message-isme": isMe })}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                    {renderAttachments()}
                </div>
                <span className="message__date">
                    {formatDistanceToNow(date, { ...dataOptions })}
                </span>
            </div>
            {renderCheck()}
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
    user: PropTypes.object,
    isMe: PropTypes.bool,
    attachments: PropTypes.array
}

export default Message;