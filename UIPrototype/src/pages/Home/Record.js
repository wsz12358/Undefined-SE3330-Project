import React from 'react';
import './Record.css';
import OnClickRoute from "../../utils/OnClickRoute";
import amiya from "../../assets/bunny.jpg"
import naxida from  "../../assets/naxida.png"
const ChatMessage = ({ user, message, profileImage }) => (
    <div style={{ display: 'flex', flexDirection: user === 'You' ? 'row-reverse' : 'row', alignItems: 'flex-end' }}>
        <img
            src={profileImage}
            alt={`${user}'s profile`}
            style={{
                borderRadius: '50%',
                width: 40,
                height: 40,
                margin: '0 8px'
            }}
        />
        <div style={{
            backgroundColor: user === 'You' ? '#007bff' : '#e9e9e9',
            color: user === 'You' ? 'white' : 'black',
            borderRadius: 10,
            padding: '8px 12px',
            maxWidth: '60%',
            marginTop: 8,
            marginBottom: 8
        }}>
            <strong>{user}: </strong> {message}
        </div>
    </div>
);

class Record extends React.Component {
    backAddr = '/home';

    render() {
        const messages = [
            { user: 'You', message: 'Hello , Amiya!', profileImage: naxida },
            { user: 'Amiya', message: 'Hi, how are you doctor?', profileImage: amiya },
            { user: 'You', message: 'I am good, thank you!', profileImage: naxida },
            { user: 'Amiya', message: 'That\'s great to hear!', profileImage: amiya },
        ];

        return (
            <div className="record_body">
                <header style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 24px',
                    backgroundColor: '#f8f9fa',
                    borderBottom: '1px solid #e9ecef'
                }}>
                    <h2 style={{ margin: 0, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        {"Untitled"}
                    </h2>
                    <button
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            borderRadius: 5,
                            padding: '8px 12px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={OnClickRoute.bind(this, this.backAddr)}
                    >
                    </button>
                </header>
                <div style={{ maxHeight: 'calc(100vh - 140px)', overflowY: 'auto', paddingTop: 24 }}>
                    <div style={{ maxWidth: 500, margin: '0 auto' }}>
                        {messages.map((msg, index) => (
                            <ChatMessage key={index} user={msg.user} message={msg.message} profileImage={msg.profileImage} />
                        ))}
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '16px 0',
                    borderTop: '1px solid #e9ecef'
                }}>
                    <input
                        type="text"
                        style={{
                            width: '80%',
                            padding: '8px 12px',
                            borderRadius: 10,
                            border: '1px solid #ccc'
                        }}
                        placeholder="记录下当下的想法和生活吧~"
                    />
                </div>
            </div>


        );
    }
}

export default Record;
