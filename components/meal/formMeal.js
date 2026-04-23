'use client'

import ImagePicker from '@/components/meal/image-picker'
import { shareMeal } from '@/lib/actions/mealForm'
import classes from '@/app/meals/share/page.module.css'
import { useActionState} from 'react'

export default function mealForm() {
    const [state, dispatchAction, isPending] = useActionState(shareMeal, { message: null })   
    return (
        <form className={classes.form} action={dispatchAction}>
            <div className={classes.row}>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" required />
                </p>
            </div>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required />
            </p>
            <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    rows="10"
                    required
                ></textarea>
            </p>
            <ImagePicker name='image' />
            <div className={classes.actions}>
                {state.message && <p>{state.message}</p>}
                <button disabled={isPending}>{isPending ? 'Sending...' : 'Share meal'}</button>
            </div>
        </form>
    )

}

