import Link from "next/link"
import classes from './page.module.css'
import MealsGrid from "@/components/meal/meals-grid"
import { Suspense } from "react"


export default async function Page() {
    
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>

                <p>Choose your favorite receipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<div className={classes.loading}>Loading meals...</div>}>
                    <MealsGrid/>
                </Suspense>
                
            </main>
        </>
    )
}