import Link from "next/link"
import HeaderLogo from '@/assets/logo.png'
import classes from '@/components/header/header-layout.module.css'
import HeaderBackground from "./headerBackground"

import Image from "next/image"

export default function HeaderLayout() {
    return (
        <>
        <HeaderBackground/>
        <header className={classes.header}>
                <Link href='/' className={classes.logo}>
                    <Image src={HeaderLogo} alt="meal plate" priority />
                    Next Level Meals
                </Link>
            <nav className={classes.nav}>
                <ul>
                <li><Link href='/meals'><p>Browse Meals</p></Link></li>
                <li><Link href='/community'><p>Foodies Community</p></Link></li>
            </ul>
            </nav>
        </header>
        </>
        

    )

}