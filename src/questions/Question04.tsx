export default function Question04() {
  return (
    <div>
      <header className="w-screen p-4 bg-slate-300 text-xl font-bold sticky top-0">
        Questão 04
      </header>

      <main className="flex justify-around mb-16 p-4 gap-4 h-max max-sm:flex-col">
        {[1, 2, 3].map((num) => (
          <section
            key={num}
            className="bg-zinc-200 flex-1 p-2 rounded-tr-xl rounded-bl-xl text-center flex gap-4 flex-col"
          >
            <h1 className="font-bold">Coluna {num}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              alias ad autem provident accusantium repellendus facere. Unde
              animi delectus commodi voluptates. Cum consequuntur quas
              repudiandae tempora. Repellat soluta deserunt quaerat!
            </p>
          </section>
        ))}
      </main>

      <footer className="w-screen p-4 bg-slate-300 text-xl font-bold fixed bottom-0 left-0">
        Rodapé
      </footer>
    </div>
  );
}
