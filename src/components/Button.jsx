// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  if (type === "Primary") {
    return (
      <button
        css={css`
          background-color: blue;
          color: white;
          border-radius: 2px;
          height: 18px;
          width: 60px;
          text-align: center;
        `}
      >
        Button
      </button>
    );
  } else {
    return (
      <button
        css={css`
          background-color: rgb(7, 164, 232);
          color: white;
          border-radius: 2px;
          height: 18px;
          width: 60px;
        `}
      >
        Button
      </button>
    );
  }
}

export default Button;
