import React from "react";

const Sort = ({ children }) => {
  return React.Children.toArray(children).sort(compare);
};
const compare = (a, b) => a.fullname.localeCompare(b.fullname);

export default Sort;
