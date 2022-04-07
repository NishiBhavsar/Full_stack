import { useState } from "react";

const useLike = () => {
  let [like, setLike] = useState(1);
  let [unlike, setUnlike] = useState(0);
  const handleClick = () => {
    setLike(!like);
    setUnlike(!unlike);
  };
  return { like, handleClick, unlike };
};

export default useLike;
