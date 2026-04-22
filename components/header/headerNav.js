'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import classes from './headerNav.module.css'


export default function HeaderNavigation() {
    const path = usePathname()
    return (
        < nav className={classes.nav} >
            <ul>
                <li><Link href='/meals' className={path.startsWith('/meals') ? classes.active : undefined}><p>Browse Meals</p></Link></li>
                <li><Link href='/community' className={path === '/community' ? classes.active : undefined}><p>Foodies Community</p></Link></li>
            </ul>
        </nav >
    )

}
