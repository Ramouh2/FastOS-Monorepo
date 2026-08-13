export default function ProductGridSection({
  section,
  theme,
}: any) {
  return (
    <section
      style={{
        padding:"40px",
        background:theme.secondaryColor,
        color:theme.accentColor
      }}
    >
      <h2>{section.title}</h2>
      <p>{section.content}</p>
    </section>
  );
}