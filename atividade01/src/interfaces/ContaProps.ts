// Interface Base
export interface ContaProps {
    numero: string;
    agencia: string;
    titular: string;
    saldo: number;
}

// Interface da Corrente (Herda a base)
export interface CorrenteProps extends ContaProps {
    limite: number;
}

// Interface da Poupanca (Herda a base)
export interface PoupancaProps extends ContaProps {
    taxaAniversario: number;
}