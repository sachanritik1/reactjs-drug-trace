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
    const [drugQuantity, setDrugQuantity] = useState("")

    async function createDrug(drugName, drugQuantity) {
        event.preventDefault()
        const returnedProceeds = await runContractFunction({
            params: {
                abi: supplyChainAbi,
                contractAddress: supplyChainAddress,
                functionName: "createDrug",
                params: {
                    _name: drugName,
                    _quantity: drugQuantity,
                },
            },
            onError: (error) => {
                alert("Error creating drug")
                console.log(error)
            },
        })
    }

    return (
        <div class="manufacturer">
            <h1> </h1>
            <div>
                {isWeb3Enabled ? (
                    <form onSubmit={() => createDrug(drugName, drugQuantity)}>
                        <input
                            type="text"
                            placeholder="Drug name"
                            value={drugName}
                            onChange={(event) => setDrugName(event.target.value)}
                        />
                        <br></br>
                        <input
                            type="number"
                            placeholder="Drug quantity"
                            value={drugQuantity}
                            onChange={(event) => setDrugQuantity(event.target.value)}
                        />
                        <br></br>

                        <button class="btn">Create Drug</button>
                    </form>
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
