import { useState } from "react";

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClass = "background";
  let imageClass = "picture";
  if (isActive) {
    imageClass += " picture--active";
  } else {
    backgroundClass += " background--active";
  }

  return (
    <div className={backgroundClass} onClick={() => setIsActive(false)}>
      <img
        className={imageClass}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
