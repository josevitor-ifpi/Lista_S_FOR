import { get_text } from "../modulo3_while/utils/utils_io.js";

function main(){
    let pontos_a = 0
    let pontos_b = 0
    // let entrada = get_text('Prova/Nadadores "0 0": ')
    // let dados = entrada.split(' ')
    // let prova = Number(dados[0])
    // let qtd = Number(dados[1])
    let [prova, qtd] = get_text('Prova/Nadadores: ').split(' ').map(Number)

    // while (true){
    //     if (prova === 0 && qtd === 0){
    //         break
    //     }
    // }

    while (prova !== 0 || qtd !== 0){

      for(let i = 0; i < qtd; i++){
        const [nome, classificacao, tempo, clube] = get_text('N/C/T/C').split(' ')
      }

      const [nome, classificacao, tempo, clube] = get_text('N/C/T/C').split(' ')

      const pontos = calcular_pontos(Number(classificacao))

      if(clube === 'a'){
        pontos_a += pontos
      }else{
        pontos_b += pontos
      }
    // let entrada = get_text('Prova/Nadadores "0 0": ')
    // let dados = entrada.split(' ')
    // let prova = Number(dados[0])
    // let qtd = Number(dados[1])
    let [prova, qtd] = get_text('Prova/Nadadores: ').split(' ').map(Number)
    // o que o map precisa é de uma função que pegue um elemento e retorne-o tranformado

    }

    //Resultados

    let vencedor = 'EMPATOU'
    if(pontos_a > pontos_b){
        vencedor = 'TIME A'
    }else{
        vencedor = 'TIME B'
    }


    const resultado = `
    ***** RESULTADO *****
    TIME A: ${pontos_a} pontos
    TIME B: ${pontos_b} pontos
    ---------------------------
    RESULTADO: ${vencedor}
    `
    print(resultado)
}

function calcular_pontos(posicao){
    if (posicao === 1) return 9
    if (posicao === 2) return 6
    if (posicao === 3) return 4
    if (posicao === 4) return 3
    return 8
}

main()