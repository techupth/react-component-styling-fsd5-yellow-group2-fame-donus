import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Frown,AlertCircle,AlertTriangle,CheckCircle } from 'react-feather';

/*function Button(props){
  return (
    <button className="button-name" 
    css={css`
      background-color: ${props.bgcolor};
      height: 50px;
      width: 170px;
      border-radius: 4px;
      margin: 4px; 
    `}>Button</button>
  )
}

function Alert(props) {
  return (
    <div className="alert-name"
    css={css`
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: ${props.bgcolor};
      height: 50px;
      width: 500px;
      border-radius: 4px;
      margin: 4px;
      padding-left: 15px;
      color: ${props.color};
    `}><div css={css`margin: 15px;`}>{props.icon}</div>{props.detail}</div>
  )
}*/

/*function App() { 
  return (
    <div className="App">
      <div className="button-components-section">
        <Button bgcolor={"#074EE8"}/>
        <Button bgcolor={"#07A4E8"}/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert bgcolor={"#C6F6D5"} color={"#38A169"} icon={<i class="fa-solid fa-circle-check"></i>} detail={"Your account has been saved."}/>
        <Alert bgcolor={"#FED7D7"} color={"#E53E3E"} icon={<i class="fa-solid fa-circle-exclamation"></i>} detail={"Your email address is invalid."}/>
        <Alert bgcolor={"#FEEBC8"} color={"#D69E2E"} icon={<i class="fa-solid fa-triangle-exclamation"></i>} detail={"You are currently on the Free plan."}/>
        <Alert bgcolor={"#BEE3F8"} color={"#3182CE"} icon={<i class="fa-solid fa-circle-info"></i>} detail={"We've updated a few things."}/>
      </div>
    </div>
  );
}

export default App;*/

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

function Alert(props) {
  if (props.type === "error") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #F9C7C7;
          color: black;
          height: 50px;
          width: 500px;
          border-radius: 4px;
          margin: 4px;
          padding-left: 15px;
          font-weight: bold;
        `}><div css={css`margin-right: 10px;`}><Frown color='#ED5050'/></div>This is error alert box
      </div>
    )
  }else if (props.type === "warning") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #F9D9C7;
          color: black;
          height: 50px;
          width: 500px;
          border-radius: 4px;
          margin: 4px;
          padding-left: 15px;
          font-weight: bold;
        `}><div css={css`margin-right: 10px;`}><AlertTriangle color='#EA712D'/></div>This is warning alert box
      </div>
      )
  }else if (props.type === "info") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #F9EBC7;
          color: black;
          height: 50px;
          width: 500px;
          border-radius: 4px;
          margin: 4px;
          padding-left: 15px;
          font-weight: bold;
        `}><div css={css`margin-right: 10px;`}><AlertCircle color='#F29811'/></div>This is info alert box
      </div>
      )
  }else if (props.type === "success") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #CEF7CD;
          color: black;
          height: 50px;
          width: 500px;
          border-radius: 4px;
          margin: 4px;
          padding-left: 15px;
          font-weight: bold;
        `}><div css={css`margin-right: 10px;`}><CheckCircle color='#14944F'/></div>This is success alert box
      </div>
      )
  }
}

function App() { 
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary"/>
        <Button type="secondary"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error"/>
        <Alert type="warning"/>
        <Alert type="info"/>
        <Alert type="success"/>
      </div>
    </div>
  );
}

export default App;