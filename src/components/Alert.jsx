// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import error from "../img/frown.png";
import warning from "../img/alert-triangle.png";
import info from "../img/alert-circle.png";
import success from "../img/check-circle.png";

function Alert({ status }) {
  if (status === "error") {
    return (
      <div
        css={css`
          background-color: rgb(249, 199, 199);
          color: white;
          border-radius: 2px;
          height: 23px;
          width: 160px;
          text-align: center;
          font-size: 0.3em;
          display: flex;
          gap: 5px;
          align-items: center;
        `}
      >
        <div>
          <img
            src={error}
            alt="Error Icon"
            css={css`
              height: 8px;
              margin-left: 5px;
            `}
          ></img>
        </div>
        <div
          css={css`
            color: white;
            height: 8px;
            color: black;
            &:hover {
              border: #1a1a1a solid 1px;
            }
          `}
        >
          This is error alert box
        </div>
      </div>
    );
  } else if (status === "warning") {
    return (
      <div
        css={css`
          background-color: rgb(249, 217, 199);
          color: white;
          border-radius: 2px;
          height: 23px;
          width: 160px;
          text-align: center;
          font-size: 0.3em;
          display: flex;
          gap: 5px;
          align-items: center;
        `}
      >
        <div>
          <img
            src={warning}
            alt="Error Icon"
            css={css`
              height: 8px;
              margin-left: 5px;
            `}
          ></img>
        </div>
        <div
          css={css`
            color: white;
            height: 8px;
            color: black;
            &:hover {
              border: #1a1a1a solid 1px;
            }
          `}
        >
          This is warning alert box
        </div>
      </div>
    );
  } else if (status === "info") {
    return (
      <div
        css={css`
          background-color: rgb(249, 235, 199);
          color: white;
          border-radius: 2px;
          height: 23px;
          width: 160px;
          text-align: center;
          font-size: 0.3em;
          display: flex;
          gap: 5px;
          align-items: center;
        `}
      >
        <div>
          <img
            src={info}
            alt="Error Icon"
            css={css`
              height: 8px;
              margin-left: 5px;
            `}
          ></img>
        </div>
        <div
          css={css`
            color: white;
            height: 8px;
            color: black;
            &:hover {
              border: #1a1a1a solid 1px;
            }
          `}
        >
          This is info alert box
        </div>
      </div>
    );
  } else if (status === "success") {
    return (
      <div
        css={css`
          background-color: rgb(206, 247, 205);
          color: white;
          border-radius: 2px;
          height: 23px;
          width: 160px;
          text-align: center;
          font-size: 0.3em;
          display: flex;
          gap: 5px;
          align-items: center;
        `}
      >
        <div>
          <img
            src={success}
            alt="Error Icon"
            css={css`
              height: 8px;
              margin-left: 5px;
            `}
          ></img>
        </div>
        <div
          css={css`
            color: white;
            height: 8px;
            color: black;
            &:hover {
              border: #1a1a1a solid 1px;
            }
          `}
        >
          This is success alert box
        </div>
      </div>
    );
  }
}

export default Alert;
