import Check from "../ui/icons/check";
import Clock from "../ui/icons/clock";
import CurrencyDolar from "../ui/icons/currency";

export default function Question05() {
  return (
    <div>
      <header className="bg-slate-900 text-white p-6 sticky top-0">
        <div className="mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold max-md:text-2xl">Processei</h1>

          <nav className="flex gap-12 text-xl max-md:hidden">
            <a
              className="transition-opacity hover:opacity-80"
              href="#how-it-works"
            >
              Como funciona?
            </a>
            <a className="transition-opacity hover:opacity-80" href="#plans">
              Nossos planos
            </a>
            <a className="transition-opacity hover:opacity-80" href="#contact">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="grid grid-cols-5 items-center justify-center gap-4 py-28 px-12 bg-slate-200 max-lg:flex max-md:py-16 max-md:px-8">
        <div className="flex flex-col gap-4 mx-auto col-span-3">
          <h2 className="text-5xl font-bold mb-4 max-md:text-3xl">
            Acompanhe os seus processos <br /> com a
            <span className="font-bold text-blue-800"> Processei</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 text-justify">
            Você pode acompanhar o andamento de seus processos judiciais sem
            precisar e nem depender de um advogado, de uma forma simples e
            prática.
          </p>
          <a
            href="#plans"
            className="bg-blue-800 transition-colors text-white px-7 py-4 text-lg rounded-lg w-fit font-semibold hover:bg-blue-700 max-md:text-sm max-md:px-4 max-md:py-2"
          >
            Assine Agora
          </a>
        </div>

        <div className="max-lg:hidden col-span-2 flex items-center justify-center">
          <img src="/human.svg" alt="Human design" className="w-1/2" />
        </div>
      </main>

      <section
        id="how-it-works"
        className="flex items-start justify-around py-20 px-12 gap-8 max-lg:flex-col max-lg:gap-16"
      >
        <div className="flex flex-col justify-center items-center gap-4  max-lg:text-center">
          <Clock />
          <h2 className="font-bold text-2xl">Acompanhe seu Processo 24/7</h2>
          <p>
            Monitore cada etapa do seu processo judicial a qualquer momento em
            tempo real, de forma simples e sem complicações.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 max-lg:text-center">
          <Check />
          <h2 className="font-bold text-2xl">Sem Intermediários, Sem Espera</h2>
          <p>
            Tenha acesso direto às informações do seu processo, eliminando a
            necessidade de depender de advogados.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4  max-lg:text-center">
          <CurrencyDolar />
          <h2 className="font-bold text-2xl">Planos Acessíveis para Todos</h2>
          <p>
            Escolha o plano que mais se adapta às suas necessidades no momento e
            acompanhe sua ação judicial com total autonomia e controle.
          </p>
        </div>
      </section>

      <form></form>
      <footer>
        <div>
          <a href="#">Política de privacidade</a>
          <a href="#">Termos de uso</a>
          <a href="#"></a>
        </div>
        <div>©2024 Processei. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

/**
 * Crie uma landing page para um produto chamado Processei
 * Esse produto consiste onde clientes finais (autores de ações judiciais) podem contratar planos
 * para acompanhar seus processos, independente da interferência de um advogado
 *
 * Atente-se a adição de chamadas, preço, descrição, formulário de contato, etc.
 *
 * Diferencial: utilize tailwind css para estilizar o layout
 */
