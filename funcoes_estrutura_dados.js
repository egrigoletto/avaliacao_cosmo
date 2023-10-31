const countStringsFromObject = (objectBase) => {
  const stringsCount = {}

  for (const key in objectBase) {
    // separa o objeto em chaves e itera sobre cada chave
    if (typeof objectBase[key] === 'string') {

      // Se a string já existe na contagem, incremento, senão crio uma entrada nova para ela no objeto
      if (stringsCount[objectBase[key]]) {
        stringsCount[objectBase[key]] = stringsCount[objectBase[key]] + 1
      }
      else {
        stringsCount[objectBase[key]] = 1
      }

    }
  }
  return stringsCount
}

//o resultado é { Jéssica: 2, 'Rua Teste, 01': 1, Uno: 1 }
console.log(countStringsFromObject({
  nome: 'Jéssica',
  numero: 7,
  Endereco: 'Rua Teste, 01',
  array_qualquer: ['a', 'n', 'w'],
  automovel: 'Uno',
  texto_qualquer: 'Jéssica',
  nullable: null,
  boolean: false
}))
