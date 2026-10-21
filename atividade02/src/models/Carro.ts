import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";


export class Carro extends Veiculo<CarroProps>{
    constructor(props:CarroProps){
        super(props);
    }

    get getQtdPortas(): number { return this.props.qtdPortas}

    set setQtdPortas(novoQtdPortas: number) {
        if (novoQtdPortas == 0) {
            console.log("\n ERRO: A Quantidade de Portas não pode ser vazia!");
            return;
        }
        this.props.qtdPortas = novoQtdPortas;
    }

     public exibirDados(): void {
        console.log(
            `
            [Carro] 
              Marca: ${this.getMarca} 
            | Modelo: ${this.getModelo} 
            | Placar: ${this.getPlaca}
            | Ano: ${this.getAno}
            | Quantidade de Portas: ${this.getQtdPortas}
            `
        );
    }
}