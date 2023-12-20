// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Frown,AlertCircle,AlertTriangle,CheckCircle } from 'react-feather';

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
export default Alert