import { Link } from "react-router-dom";

import {
  q1RemoverDuplicados,
  q1RemoverDuplicadosUtilizandoFilter,
} from "./questions/q1";

import { q2ContarFrequenciaPalavra } from "./questions/q2";
import { q3TratarDatas } from "./questions/q3";

function App() {
  const q1 = q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]);
  const q1Filter = q1RemoverDuplicadosUtilizandoFilter([1, 2, 2, 3, 4, 4, 5]);

  const q2 = q2ContarFrequenciaPalavra("Hello world hello");

  const datasParaTratar = [
    "30/11/2022",
    "01 dez 2022",
    "25/12/2022",
    "31 de dezembro de 2022",
  ];

  return (
    <div className="flex flex-col gap-4 justify-center items-start p-8 text-xl">
      <div className="flex gap-2">
        <span className="font-bold">Questão 01: </span>
        <span>
          {JSON.stringify(q1)} <strong>| usando .filter {"=>"} </strong>
          {JSON.stringify(q1Filter)}
        </span>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">Questão 02: </span>
        <span>{JSON.stringify(q2)}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">Questão 03: </span>
        {datasParaTratar.map((data, i) => {
          const dataFormatada = q3TratarDatas(data);

          return (
            <span>
              {JSON.stringify(dataFormatada)}
              {i + 1 < datasParaTratar.length && ","}
            </span>
          );
        })}
      </div>

      <Link to="/q4" className="font-bold text-blue-800 hover:underline">
        Link para a questão 04
      </Link>
      <Link to="/q5" className="font-bold text-blue-800 hover:underline">
        Link para a questão 05
      </Link>
    </div>
  );
}

export default App;
