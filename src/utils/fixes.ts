/* eslint-disable compat/compat */
import ReactDOMServer from "react-dom/server";

export const IconToImage = (el: React.ReactElement) => {
  const blb = new Blob([ReactDOMServer.renderToString(el)], { type: "image/svg+xml" });
  return URL.createObjectURL(blb);
}