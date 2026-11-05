"Use client"

import {http} from "@/lib/http" 

export default function MembrosLista() {

    return(
        <div className="overflow-x-auto bg-white rounded-2x1 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
                <tr> 
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nome</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Idade</th>  
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gênero</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Profissão</th>
                </tr>            
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    )

}