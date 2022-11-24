import { FC, useState } from "react";
import styles from "./Gallery.module.scss";
import cn from "clsx";

const Gallery: FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.gallery}>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
        className={cn(styles.image, styles.main)}
      ></div>
      <div className={styles.list}>
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(styles.item, {
              [styles.active]: currentIndex === index,
            })}
            onClick={() => setCurrentIndex(index)}
          >
            <div
              style={{
                backgroundImage: `url(${images[index]})`,
              }}
              className={styles.image}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
