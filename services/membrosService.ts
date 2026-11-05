import {http} from "@/lib/http";
import {Membros} from "@/domain/membros";

export const membrosService = {
    cadastrar: async (membros: Membros) : Promise<Membros> => {
        const {data} = await http.post<Membros>("/membros", membros)
        return data
    },

    listar: async () : Promise<Membros[]> => {
        const {data} = await http.get<Membros[]>("/membros")
        return data
    },

    buscarPorId: async (id: number | string) : Promise<Membros> => {
        const {data} = await http.get<Membros>(`/membros/${id}`)
        return data
    },

    editar: async (id: number | string, membros: Membros) : Promise<Membros> =>{
        const {data} = await http.put<Membros>(`/membros/${id}`, membros)
        return data
    },

    deletar: async (id: number | string) : Promise<void> => {
        await http.delete(`/membros/${id}`)
    },
    
}