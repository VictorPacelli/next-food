import Link from "next/link"

export default function Page () {
    return(
        <>
            <h1>Refeições</h1>
            <div><Link href='/meals/share'>SHARE</Link></div>
            <div><Link href='/community'>COMMUNITY</Link></div>
            <div><Link href={'/meals/'+123}>MEAL 1</Link></div>
        </>
    )
}