// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props){
    if (props.type === "primary") {
      return (
        <button  
          css={css`
          background-color: #074EE8;
          height: 50px;
          width: 170px;
          border-radius: 4px;
          margin: 4px; 
        `}>Large</button>
      )
    } else if (props.type === "secondary") {
      return (
        <button  
          css={css`
          background-color: #07A4E8;
          height: 50px;
          width: 170px;
          border-radius: 4px;
          margin: 4px; 
        `}>Large</button>
      )
    }
  }
  export default Button