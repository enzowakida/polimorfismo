import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps>{
    constructor(props:MotoProps){
        super(props);
    }

    get getCilindradas(): number { return this.props.cilindradas}

    set setCilindradas(novoCilindradas: number) {
        if (novoCilindradas == 0) {
            console.log("\n ERRO: As Cilindradas não pode ser vazia!");
            return;
        }
        this.props.cilindradas = novoCilindradas;
    }
    
    public exibirDados(): void {
        console.log(
            `
            [Moto] 
              Marca: ${this.getMarca} 
            | Modelo: ${this.getModelo} 
            | Placa: ${this.getPlaca}
            | Ano: ${this.getAno}
            | Cilindradas: ${this.getCilindradas}
            `
        );
    }
}