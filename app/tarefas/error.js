'use client'

export default function TarefasErroPage({error}) {
   return (
    <h1>{error.message}</h1>
   )
}