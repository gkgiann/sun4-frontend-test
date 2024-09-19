export function q1RemoverDuplicados(nums: number[]) {
  /**
   * Retorna uma lista com apenas um registro de cada elemento
   *
   * Saída esperada: [1, 2, 3, 4, 5]
   */

  let numbersWithoutDuplicates: number[] = [];

  nums.forEach((number) => {
    if (!numbersWithoutDuplicates.includes(number)) {
      numbersWithoutDuplicates.push(number);
    }
  });

  return numbersWithoutDuplicates;
}

// console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));

export function q1RemoverDuplicadosUtilizandoFilter(nums: number[]) {
  const numbersWithoutDuplicates = nums.filter((number, numberIndex) => {
    return nums.indexOf(number) === numberIndex;
  });

  return numbersWithoutDuplicates;
}
