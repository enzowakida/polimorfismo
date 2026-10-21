import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";
import { Veiculo } from "./src/models/Veiculo.js";

console.log("=== SISTEMA DA LOJA ===");

const carro = new Carro({
    marca: "Honda",
    modelo: "Civic",
    placa: "A4S809",
    ano: 2019,
    qtdPortas: 4
});

const moto = new Moto({
    marca: "Nissan",
    modelo: "GTR",
    placa: "HG4ADS",
    ano: 2018,
    cilindradas: 6
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: Veiculo[] = [carro, moto];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const conta of bancoDeDados) {
    conta.exibirDados();
}