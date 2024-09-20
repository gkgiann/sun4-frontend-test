import Question04 from "./components/Question04";
import Question05 from "./components/Question05";

import {
  q1RemoverDuplicados,
  q1RemoverDuplicadosUtilizandoFilter,
} from "./questions/q1";

import { q2ContarFrequenciaPalavra } from "./questions/q2";
import { q3TratarDatas } from "./questions/q3";

function App() {
  console.log("======== Questão 01 =========");
  console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
  console.log(q1RemoverDuplicadosUtilizandoFilter([1, 2, 2, 3, 4, 4, 5]));

  console.log("======== Questão 02 =========");
  console.log(q2ContarFrequenciaPalavra("Hello world hello"));

  console.log("======== Questão 03 =========");

  const datasParaTratar = [
    "30/11/2022",
    "01 dez 2022",
    "25/12/2022",
    "31 de dezembro de 2022",
  ];

  datasParaTratar.forEach((data) => {
    console.log(q3TratarDatas(data));
  });

  // return <Question04 />;
  return <Question05 />;
}

export default App;
