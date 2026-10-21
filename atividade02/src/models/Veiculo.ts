import { VeiculoProps } from "../interfaces/VeiculoProps.js"

export abstract class Veiculo<T extends VeiculoProps = VeiculoProps>{
    constructor(protected props: T){}

    get getMarca(): string { return this.props.marca}
    get getModelo(): string { return this.props.modelo}
    get getPlaca(): string { return this.props.placa}
    get getAno(): number { return this.props.ano}

    set setMarca(novoMarca: string) {
        if (novoMarca.trim().length === 0) {
            console.log("\n ERRO: A Marca não pode ser vazia!");
            return;
        }
        this.props.marca = novoMarca;
    }

    set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O Modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    set setPlaca(novoPlaca: string) {
        if (novoPlaca.trim().length === 0) {
            console.log("\n ERRO: A Placa não pode ser vazia!");
            return;
        }
        this.props.placa = novoPlaca;
    }

    set setAno(novoAno: number) {
        if (novoAno === 0) {
            console.log("\n ERRO: O Ano não pode ser vazio!");
            return;
        }
        this.props.ano = novoAno;
    }

    abstract  exibirDados(): void;  

}