import { useWeb3Contract, useMoralis } from "react-moralis"
import supplyChainAbi from "../constants/SupplyChain.json"
import networkMapping from "../constants/networkMapping.json"
import { useState } from "react"

export default function Home() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const supplyChainAddress = chainId ? networkMapping[chainString].SupplyChain[0] : null
    const { runContractFunction } = useWeb3Contract()
    console.log(account)

    const [drugId, setDrugId] = useState()

    async function buyDrug(drugId) {
        event.preventDefault()
        console.log(drugId)
        const returnedProceeds = await runContractFunction({
            params: {
                abi: supplyChainAbi,
                contractAddress: supplyChainAddress,
                functionName: "buyDrug",
                params: {
                    _drugId: drugId,
                },
            },
            onError: (error) => {
                alert("No such drug exists")
                console.log(error)
            },
        })
    }

    return (
        <div>
            <h1 className="py-4 px-4 font-bold text-2xl"></h1>
            <div>
                {isWeb3Enabled ? (
                    <div>
                        <h2>DRUG IS VERIFIED</h2>
                        <div>
                            <form onSubmit={() => buyDrug(drugId)}>
                                <input
                                    type="text"
                                    placeholder="Drug ID"
                                    value={drugId}
                                    onChange={(event) => setDrugId(event.target.value)}
                                />
                                <br></br>
                                <button class="btn">Verify Drug</button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
