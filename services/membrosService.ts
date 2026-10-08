import {http} from "@/lib/http";
import {Membros} from "@/domain/membros";

export const membrosService = {
    cadastrar: async (membros: Membros) : Promise<Membros> => {
        const {data} = await http.post<Membros>("/membros", membros)
        return data
    }
}