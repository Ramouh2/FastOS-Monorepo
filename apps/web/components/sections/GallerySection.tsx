export default function GallerySection({
  section,
  theme,
}: any) {
  return (
    <section
      style={{
        padding:"40px",
        background:theme.accentColor,
        color:theme.secondaryColor
      }}
    >
      <h2>{section.title}</h2>
      <p>{section.content}</p>
    </section>
  );
}