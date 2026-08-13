type Props = {
  section:any;
};

export default function Hero({section}:Props){
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold">
        {section.title}
      </h1>
      <p>
        {section.content}
      </p>
    </section>
  );
}
