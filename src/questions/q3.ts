const months: any = {
  jan: "01",
  fev: "02",
  mar: "03",
  abr: "04",
  mai: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  set: "09",
  out: "10",
  nov: "11",
  dez: "12",
};

export function q3TratarDatas(data: string) {
  /**
   * Tratar e converter datas para o formato americano AAAA-MM-DD.
   *
   * Saída esperada: 2022-11-30
   */

  let dateReplaced = data.replaceAll(" de ", "/");
  dateReplaced = dateReplaced.replaceAll(" ", "/");

  const splitedString = dateReplaced.toLowerCase().split("/");

  const [day, month, year] = splitedString;

  if (month.length > 2) {
    const monthShort = month.substring(0, 3);
    const monthNumber = months[monthShort];

    return `${year}-${monthNumber}-${day}`;
  }

  return `${year}-${month}-${day}`;
}

// const datasParaTratar = [
//   "30/11/2022",
//   "01 dez 2022",
//   "25/12/2022",
//   "31 de dezembro de 2022",
// ];

// datasParaTratar.forEach((data) => {
//   console.log(q3TratarDatas(data));
// });
