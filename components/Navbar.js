import Link from "next/link"

export default function Navbar() {
    return (

        <ul>
            <li>
                <Link href='/contatos'>Meus Contatos</Link>
            </li>
            <li>
                <Link href='/contatos/novo'>Novo Contato</Link>
            </li>

        </ul>

    )
}