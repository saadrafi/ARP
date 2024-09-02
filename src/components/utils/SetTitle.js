import { useEffect } from "react";

const setTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Academic Research Point`;
  }, []);
};
export default setTitle;
