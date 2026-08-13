type Props = {
  section:any;
};

export default function FAQ({section}:Props){
  return (
    <section className="p-10">
      <h2>{section.title}</h2>
    </section>
  );
}
