import { useState } from "react";

import Card from "./Card/Card.jsx";
import Modal from "./Modal/Modal.jsx";
import { experienceItems } from "./experienceItems.js";
import classes from "./Experience.module.css"

export default function Experience() {
  const [isSelectedItem, setIsSelectedItem] = useState(false);

  const handleOpenModal = function (item) {
    setIsSelectedItem(item);
  }

  const handleCloseModal = function () {
    setIsSelectedItem(false);
  }

  return (
    <div>
      <h3 className={classes.topic}>Experience</h3>
      <div className={classes["experience-area"]}>
        {
          experienceItems.map((item) => (
            <Card
              key={item.title}
              item={item}
              onOpenModal={() => handleOpenModal(item)}
            />
          ))
        }
      </div>
      {
        isSelectedItem &&
        <Modal item={isSelectedItem} onCloseModal={handleCloseModal} />
      }
    </div>
  );
}