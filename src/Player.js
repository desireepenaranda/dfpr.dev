export const Player = ({ src, title }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title={title}
      frameborder="0"
      allow="fullscreen; encrypted-media; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};
