
    import React from 'react';

    const Card = (user) => {
    return (
    <div className="user-card">
      <div>
        <span>ID: {user.id}</span>
        <h3>{user.name}</h3>
      </div>

      <div>
        <div className="label">Username</div>
        <div className="value">@{user.username}</div>
        
        <div className="label">Email Address</div>
        <div className="value">
          <a href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
