export const ImageGalleryItem = ({ data, onOpenModal }) => {
    console.log(data)
  return (
    <div>
      {data.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <li key={id} onClick={() => onOpenModal(largeImageURL)}>
                <img src={webformatURL} alt={tags} />
          </li>
        );
      })}
    </div>
  );
};
