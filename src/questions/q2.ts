export function q2ContarFrequenciaPalavra(text: string) {
  /**
   * Realiza uma contagem de quantas vezes uma determinada palavra ocorre.
   * Ao final, preferencialmente, ordenar o objeto pelo volume de ocorrência.
   *
   * Saída esperada: { 'hello': 2, 'world': 1 }
   */

  const words: {
    [key: string]: number;
  } = {};

  const splitedWords = text.toLowerCase().split(" ");

  const wordsWithoutDuplicates = splitedWords.filter(
    (word, wordIndex) => splitedWords.indexOf(word) === wordIndex
  );

  wordsWithoutDuplicates.forEach((word) => {
    const wordQuantity = splitedWords.filter(
      (currentWord) => currentWord === word
    ).length;

    words[word] = wordQuantity;
  });

  return words;
}

// console.log(q2ContarFrequenciaPalavra("Hello world hello"));
