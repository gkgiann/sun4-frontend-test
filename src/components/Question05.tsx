import Check from "../ui/icons/check";
import CheckCircle from "../ui/icons/checkCircle";
import Clock from "../ui/icons/clock";
import CurrencyDolar from "../ui/icons/currency";
import Scale from "../ui/icons/scale";
import X from "../ui/icons/x";

export default function Question05() {
  return (
    <div>
      <header className="p-6 text-slate-50 sticky top-0 bg-slate-950 backdrop-blur-sm bg-opacity-70 z-50">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <Scale />
            <h1 className="text-3xl font-bold max-md:text-2xl">Processei</h1>
          </div>

          <nav className="flex gap-12 text-xl max-md:hidden">
            <a className="transition-opacity hover:opacity-80" href="#benefits">
              Benefícios
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

      <main className="grid grid-cols-5 items-center justify-center gap-4 py-24 px-12 bg-slate-200 max-lg:flex max-md:py-16 max-md:px-8">
        <div className="flex flex-col gap-4 mx-auto col-span-3">
          <h2 className="text-5xl font-bold mb-4 max-md:text-3xl">
            Acompanhe os seus processos <br /> com a
            <span className="font-bold text-blue-800"> Processei</span>
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-md:text-lg">
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
          <img src="/person.svg" alt="Human design" />
        </div>
      </main>

      <section
        id="benefits"
        className="grid grid-cols-3 py-28 px-12 gap-10 max-lg:flex max-lg:flex-col max-lg:gap-16 max-lg:px-4"
      >
        <div className="flex flex-col justify-start items-center gap-4 max-lg:text-center">
          <Clock />
          <h2 className="font-bold text-2xl text-slate-950">
            Acompanhe seu Processo 24/7
          </h2>
          <p className="text-slate-700">
            Monitore cada etapa do seu processo judicial a qualquer momento em
            tempo real, de forma simples e sem complicações.
          </p>
        </div>

        <div className="flex flex-col justify-start items-center gap-4 max-lg:text-center">
          <CheckCircle />
          <h2 className="font-bold text-2xl text-slate-950">
            Sem Intermediários, Sem Espera
          </h2>
          <p className="text-slate-700">
            Tenha acesso direto às informações do seu processo, eliminando a
            necessidade de depender de advogados.
          </p>
        </div>

        <div className="flex flex-col justify-start items-center gap-4 max-lg:text-center">
          <CurrencyDolar />
          <h2 className="font-bold text-2xl text-slate-950">
            Planos Acessíveis para Todos
          </h2>
          <p className="text-slate-700">
            Escolha o plano que mais se adapta às suas necessidades no momento e
            acompanhe sua ação judicial com total autonomia e controle.
          </p>
        </div>
      </section>

      <section
        id="plans"
        className="flex flex-col items-center justify-center gap-8 py-28 px-12 bg-slate-100 max-md:py-16 max-md:px-8"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-bold text-4xl text-slate-950 max-md:text-2xl">
            Planos & Preços
          </h1>
          <p className="text-slate-700 text-lg text-wrap max-w-4xl">
            Nossos planos oferecem desde atualizações básicas até acompanhamento
            completo com alertas personalizados. Escolha o que melhor atende
            você e tenha controle total, sem complicações!
          </p>
        </div>

        <div
          className="flex justify-center items-start flex-wrap gap-10
         "
        >
          <div className="bg-white flex flex-col justify-center items-center gap-8 mt-28 p-6 w-fit rounded-md relative shadow-lg shadow-slate-500 transition-transform hover:-translate-y-8 hover:shadow-fuchsia-900">
            <div className="text-white bg-fuchsia-900 flex flex-col justify-center items-center p-8 rounded-md shadow-lg shadow-slate-500 gap-1 w-fit absolute -top-20">
              <h3 className="font-bold text-xl">Plano Básico</h3>
              <h1 className="font-bold text-4xl">R$ 39,90</h1>
              <span className="text-lg">Por mês</span>
            </div>

            <div className="flex flex-col items-start gap-4 mt-28">
              <span className="flex justify-center items-center gap-1">
                <Check />
                Acompanhamento de até 5 processos
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Atualizações mensais por e-mail
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Suporte via chat
              </span>
              <span className="flex justify-center items-center gap-1">
                <X />
                Acompanhamento por WhatsApp
              </span>
              <span className="flex justify-center items-center gap-1">
                <X />
                Alertas personalizados
              </span>
              <span className="flex justify-center items-center gap-1">
                <X />
                Relatórios detalhados de movimentações
              </span>
            </div>

            <button className="bg-blue-800 transition-colors text-white px-4 py-3 rounded-lg w-fit font-semibold hover:bg-blue-700 max-md:text-sm max-md:px-4 max-md:py-2">
              Escolher plano
            </button>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-8 mt-28 p-6 w-fit rounded-md relative shadow-lg shadow-slate-500 transition-transform hover:-translate-y-8 hover:shadow-green-900">
            <div className="text-white bg-green-800 flex flex-col justify-center items-center p-8 rounded-md shadow-lg shadow-slate-500 gap-1 w-fit absolute -top-20">
              <h3 className="font-bold text-xl">Plano Pro</h3>
              <h1 className="font-bold text-4xl">R$ 59,90</h1>
              <span className="text-lg">Por mês</span>
            </div>

            <div className="flex flex-col items-start gap-4 mt-28">
              <span className="flex justify-center items-center gap-1">
                <Check />
                Acompanhamento de até 15 processos
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Atualizações semanais por e-mail
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Suporte via chat
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Acompanhamento por WhatsApp
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Alertas personalizados
              </span>
              <span className="flex justify-center items-center gap-1">
                <X />
                Relatórios detalhados de movimentações
              </span>
            </div>

            <button className="bg-blue-800 transition-colors text-white px-4 py-3 rounded-lg w-fit font-semibold hover:bg-blue-700 max-md:text-sm max-md:px-4 max-md:py-2">
              Escolher plano
            </button>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-8 mt-28 p-6 w-fit rounded-md relative shadow-lg shadow-slate-500 transition-transform hover:-translate-y-8 hover:shadow-orange-900">
            <div className="text-white bg-orange-800 flex flex-col justify-center items-center p-8 rounded-md shadow-lg shadow-slate-500 gap-1 w-fit absolute -top-20">
              <h3 className="font-bold text-xl">Plano Premium</h3>
              <h1 className="font-bold text-4xl">R$ 89,90</h1>
              <span className="text-lg">Por mês</span>
            </div>

            <div className="flex flex-col items-start gap-4 mt-28">
              <span className="flex justify-center items-center gap-1">
                <Check />
                Acompanhamento ilimitado de processos
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Atualizações diárias por e-mail e Whatsapp
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Suporte via chat
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Acompanhamento por WhatsApp
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Alertas personalizados
              </span>
              <span className="flex justify-center items-center gap-1">
                <Check />
                Relatórios detalhados de movimentações
              </span>
            </div>

            <button className="bg-blue-800 transition-colors text-white px-4 py-3 rounded-lg w-fit font-semibold hover:bg-blue-700 max-md:text-sm max-md:px-4 max-md:py-2">
              Escolher plano
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="grid grid-cols-5 items-start justify-center gap-8 py-28 px-12 bg-slate-200 max-lg:flex max-md:py-16 max-md:px-8"
      >
        <div className="max-lg:hidden col-span-2 flex items-center justify-center">
          <img src="/contact-us.svg" alt="Contact Us design" />
        </div>

        <form className="col-span-3 flex flex-col gap-8 w-full">
          <h1 className="font-bold text-4xl text-slate-950 max-md:text-2xl">
            Dúvidas? Fale Conosco
          </h1>

          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-3 rounded-md"
            />
            <input
              type="tel"
              placeholder="Telefone/Whatsapp"
              className="p-3 rounded-md"
            />
            <textarea
              placeholder="Escreva sua mensagem aqui"
              className="p-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-800 transition-colors text-white px-4 py-3 rounded w-fit font-semibold hover:bg-blue-700 max-md:text-sm max-md:px-4 max-md:py-2"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>

      <footer className="flex justify-between items-center py-16 px-10 max-md:flex-col max-md:gap-4">
        <div className="flex justify-center items-center gap-4 text-slate-700 max-sm:flex-col">
          <a href="#" className="hover:text-blue-900">
            Política de privacidade
          </a>
          <a href="#" className="hover:text-blue-900">
            Termos de uso
          </a>
          <a href="#" className="hover:text-blue-900">
            Voltar ao topo
          </a>
        </div>
        <span className="text-slate-700">
          ©2024 <span className="font-bold text-blue-800">Processei.</span>
          <br />
          Todos os direitos reservados.
        </span>
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
