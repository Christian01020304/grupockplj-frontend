"use client"

import {useState} from "react"
import {Membros} from "@/domain/membros"
import {membrosService} from "@/services/membrosService"

export default function CadastroPage(){
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [genero, setGenero] = useState("")
    const [profissao, setProfissao] = useState("")
    const [cadastroStatus, setCadastroStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

    async function cadastrar(e:React.FormEvent){
        e.preventDefault()

        const membros: Membros = {nome, idade: Number(idade), genero, profissão: profissao}
        setCadastroStatus("saving")
        try {
            const membroCadastrado = await membrosService.cadastrar(membros)
            console.log("Membro cadastrado:", membroCadastrado)
            setNome("")
            setIdade("")
            setGenero("")
            setProfissao("")
            setCadastroStatus("success")
        } catch (error) {
            console.error("Erro ao cadastrar membro:", error)
            setCadastroStatus("error")
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center text-black p-4">
            <form onSubmit={cadastrar} className="bg-white w-full max-w-md p-6 rounded-lg shadow space-y-4">
            <h1> Cadastro de Membros</h1>

            <input
            placeholder="nome"
            value={nome}
            onChange={(e)=>{setNome(e.target.value); setCadastroStatus("idle")}}
            disabled={cadastroStatus === "saving"}
            className="border border-gray-300 p-2 w-full rounded"
            />

            <input
            placeholder="idade"
            value={idade}
            onChange={(e)=>{setIdade(e.target.value); setCadastroStatus("idle")}}
            disabled={cadastroStatus === "saving"}
            className="border border-gray-300 p-2 w-full rounded"
            />

            <input
            placeholder="gênero"
            value={genero}
            onChange={(e)=>{setGenero(e.target.value); setCadastroStatus("idle")}}
            disabled={cadastroStatus === "saving"}
            className="border border-gray-300 p-2 w-full rounded"
            />

            <input
            placeholder="profissão"
            value={profissao}
            onChange={(e)=>{setProfissao(e.target.value); setCadastroStatus("idle")}}
            disabled={cadastroStatus === "saving"}
            className="border border-gray-300 p-2 w-full rounded"
            />
                <button type="submit" disabled={cadastroStatus === "saving"} className="bg-purple-500 text-white px-4 rounded w-full">
                    {cadastroStatus === "saving" ? "Salvando..." : cadastroStatus === "success" ? "Membro cadastrado!" : cadastroStatus === "error" ? "Erro ao cadastrar. Tentar novamente" : "Salvar"}
                </button>
            </form>  
        </main>
    )
}