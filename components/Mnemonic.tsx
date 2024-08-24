import React from 'react'
import { Button } from './ui/button'

const Mnemonic = ({ keyPhrase }: { keyPhrase: Array<String> }) => {
    return (
        <div className='px-20 py-10 space-y-10 border-2 rounded-lg bg-slate-900'>
            <div>
                <p className='text-center text-xl font-bold text-white'>Keep This Phrase Secure</p>
                <p className='text-center text-sm font-light text-slate-300'>If this phrase is lost, there is no way to recover your funds.</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>{
                keyPhrase.map((word: any) => {
                    return <p key={word.id} className='p-3 bg-white text-black rounded-md'>{word}
                    </p>
                })
            }
            </div>
            <div className='text-center'>
                <Button variant="primary">Done</Button>
            </div>
        </div>
    )
}

export default Mnemonic