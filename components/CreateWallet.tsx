"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { generateKeyPhrase } from '@/actions/mnemonic'
import { keyPhraseSplitter } from '@/lib/helper'
import Mnemonic from './Mnemonic'

const CreateWallet = () => {
    const [clicked, setClicked] = useState(false)
    const [keyPhrase, setKeyPhrase] = useState([""])

    return (
        <div className='flex flex-col justify-center items-center h-[90dvh] w-full'>
            {
                !clicked ? <Button variant="primary" onClick={async () => {
                    let generatedKeyPhrase = await generateKeyPhrase()
                    let arrayOfPhrase = keyPhraseSplitter(generatedKeyPhrase);
                    setKeyPhrase(arrayOfPhrase)
                    setClicked(true)
                }}>Create Wallet</Button> :
                    <Mnemonic keyPhrase={keyPhrase} />
            }

        </div>
    )
}

export default CreateWallet