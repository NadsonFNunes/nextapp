'use client'
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/navigation'


export default function NovoForm(){
    const{register, handleSubmit} = useForm()
    const router = useRouter()
    function onSubmit(data){
        router.push('/contatos')

    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text'{...register('nome')} placeholder= 'nome do contato'/>
            <input type='tel'{...register('telefone')} placeholder= 'Telefone do Contato'/>
            
            <button> Salvar</button>


        </form>
    )

}