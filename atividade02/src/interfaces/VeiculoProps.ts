export interface VeiculoProps{
    marca: string;
    modelo: string;
    placa: string;
    ano: number;
}

export interface CarroProps extends VeiculoProps{
    qtdPortas: number;
}

export interface MotoProps extends VeiculoProps{
    cilindradas: number;
}