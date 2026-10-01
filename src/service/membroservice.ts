import {http} from "@/src/lib/http";
import type {membro} from "@/src/domain/membro";
export const membroService = {

    criar: async (membros: membro): Promise<membro> => {
        const {data} = await http.post<membro>("/membros", membro);
        return data;
    } 


}