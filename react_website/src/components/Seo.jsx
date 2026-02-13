import { useEffect } from "react";

const Seo = ({ title, description, keywords }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMeta("description", description);
    }

    if (keywords) {
      setMeta("keywords", keywords);
    }
  }, [title, description, keywords]);

  return null;
};

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

export default Seo;
