//create a basic component called Manufacturer

import { useWeb3Contract, useMoralis } from "react-moralis"
import { useState } from "react"
import supplyChainAbi from "../constants/SupplyChain.json"
import networkMapping from "../constants/networkMapping.json"

export default function Manufacturer() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const supplyChainAddress = chainId ? networkMapping[chainString].SupplyChain[0] : null
    const { runContractFunction } = useWeb3Contract()
    console.log(account)

    const [drugName, setDrugName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [ingredient, setIngredient] = useState("")
    const [composition, setComposition] = useState("")

    async function formulateDrug(drugName, ingredients) {
        event.preventDefault()
        const returnedProceeds = await runContractFunction({
            params: {
                abi: supplyChainAbi,
                contractAddress: supplyChainAddress,
                functionName: "formulateDrug",
                params: {
                    _name: drugName,
                    _ingredients: ingredients,
                },
            },
            onError: (error) => {
                alert("Error creating drug")
                console.log(error)
            },
        })
        console.log(returnedProceeds)
    }

    return (
        <div className="manufacturer">
            <div>
                {isWeb3Enabled ? (
                    <form onSubmit={() => formulateDrug(drugName, ingredients)}>
                        <input
                            type="text"
                            placeholder="Drug name"
                            value={drugName}
                            onChange={(event) => setDrugName(event.target.value)}
                        />
                        <br></br>
                        <input
                            type="text"
                            placeholder="ingredient"
                            value={ingredient}
                            onChange={(event) => setIngredient(event.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="composition"
                            value={composition}
                            onChange={(event) => setComposition(event.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setIngredients([
                                    ...ingredients,
                                    { ingredient: ingredient, composition: composition },
                                ])
                                setComposition("")
                                setIngredient("")
                            }}
                        >
                            Add Ingredient
                        </button>
                        <br></br>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.ingredient} - {ingredient.composition}
                                </li>
                            ))}
                        </ul>

                        <button type="submit">Formulate Drug</button>
                    </form>
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
