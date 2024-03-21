"use client";
import { Lang, PresaleArtWork } from "@/types/types";
import styles from "../presale/DropPanel/DropPanel.module.scss";
import { useState } from "react";
import useSharedLogicDropPanel from "../presale/DropPanel/useSharedLogicDropPanel";
import { useAppContext } from "@/context";

import ArtworkGalleryModal from "../common/Modal/ArtworkGallery/ArtworkGallery";
import AcquireModal from "../common/Modal/AcquireModal/AcquireModal";
import DescriptionModal from "../common/Modal/DescriptionModal/DescriptionModal";
import { GrGallery } from "react-icons/gr";

interface ArtworkCardProps {
  artwork: PresaleArtWork;
  id: number;
}
const ArtworkCard = ({ id, artwork }: ArtworkCardProps) => {
  const [showModalImages, setShowModalImages] = useState(false);
  const [showAcquireModal, setShowAcquireModal] = useState(false);
  const [showModalDescription, setShowModalDescription] = useState(false);

  const { lang } = useAppContext();
  const lang_ = lang as Lang;

  const { buttons, texts } = useSharedLogicDropPanel();
  const { mockups, url, artistName, name, description, size, price, image } =
    artwork || {};

  return (
    <section className={styles["image-container"]}>
      <div className={styles.frameDetailArtWorkCreator}>
        <div></div>
        <div className={styles.frameDetailArtWorkCreatorName}>{artistName}</div>
      </div>

      {description[lang_] && (
        <div className={styles.frameDetailArtWorkLink}>
          <div></div>
          <div
            className={styles.frameDetailArtWorkLinkCorner}
            onClick={() => setShowModalDescription(true)}
          >
            {buttons.detailArtWork[lang_]}
          </div>
        </div>
      )}

      <div className={styles["img-frame"]}>
        <img className={styles["img-main"]} src={url} />
      </div>

      <div
        className={styles["img-overlay"]}
        style={{
          backgroundImage: `url(${mockups[Math.floor(Math.random() * 3)]})`,
        }}
      />
      {mockups.length > 0 && (
        <button
          className={styles["button-more"]}
          onClick={() => setShowModalImages(true)}
        >
          {buttons.seeMoreImages[lang_]}
          <GrGallery />
        </button>
      )}
      <button
        className={styles["button-2"]}
        onClick={() => setShowAcquireModal(true)}
      >
        <div className={styles["textButtonAcquire"]}>
          {buttons.acquireArtWork[lang_]}
        </div>
      </button>
      <ArtworkGalleryModal
        artworks={artwork.mockups}
        showModalImages={showModalImages}
        setShowModalImages={setShowModalImages}
      />
      <DescriptionModal
        title={name[lang_]}
        description={description[lang_]}
        showModal={showModalDescription}
        setShowModal={setShowModalDescription}
      />
      <AcquireModal
        setShowModal={setShowAcquireModal}
        showModal={showAcquireModal}
        name={name[lang_]}
        description={description[lang_]}
        size={size[lang_]}
        buttonBuyStripe={buttons.buyArtworkNow[lang_]}
        imagePath={image}
        imageUrl={url}
        price={price}
        msgSuccessEmail={texts.msgSuccessEmail[lang_]}
        msgErrorEmail={texts.msgErrorEmail[lang_]}
      />
    </section>
  );
};

export default ArtworkCard;
