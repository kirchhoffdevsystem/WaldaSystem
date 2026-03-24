import path from 'node:path';
import fs from 'node:fs';

interface Registro {
    produtos: any[]; // Você pode substituir "any" por um tipo mais específico, dependendo dos dados reais.
}

export default 
class DataService {
    private FILE_PATH: string;
    private data: Registro;
    private nome_registro: Registro;

    constructor(nome_registro: Registro) {
        this.FILE_PATH = path.resolve(__dirname, '..', 'db', 'data.json');
        this.nome_registro = nome_registro;
        this.data = this.carregarDados();
    }

    // Carregar o arquivo JSON, se não existir, criar um novo arquivo com o conteúdo inicial
    carregarDados(): Registro {
        if (!fs.existsSync(this.FILE_PATH)) {
            fs.writeFileSync(this.FILE_PATH, JSON.stringify(this.nome_registro, null, 2));
        }
        try {
            const rawData = fs.readFileSync(this.FILE_PATH, 'utf-8');
            return JSON.parse(rawData) as Registro; // Garantir que os dados sejam do tipo esperado
        } catch (error) {
            console.error('Erro ao ler o arquivo JSON:', error);
            return this.nome_registro; // Retorna o valor inicial em caso de erro
        }
    }

    // Salvar dados no arquivo JSON
    salvarDados(data: Registro): void {
        try {
            fs.writeFileSync(this.FILE_PATH, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Erro ao salvar os dados no arquivo JSON:', error);
        }
    }
}
