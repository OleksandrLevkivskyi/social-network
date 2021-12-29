import React from 'react';

import s from './Post.module.css';


const Post = (props) => {
    return (
    
    
      <div className={s.item}>
        <div className={s.post}>
          <img src="http://avatarmaker.ru/img/11/1044/104362.jpg" />
          <p>{props.message}</p>
        </div>
        <div className={s.likes}>
          <span>like</span>{props.likesCount}
        </div>
        
      </div>
      
  
    )
}

export default Post;