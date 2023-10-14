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

    const [selectedRole, setSelectedRole] = useState("")
    const [address, setAddress] = useState("")

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value)
    }

    const handleClick = async () => {
        event.preventDefault()
        if (selectedRole === "Manufacturer") {
            const returnedProceeds = await runContractFunction({
                params: {
                    abi: supplyChainAbi,
                    contractAddress: supplyChainAddress,
                    functionName: "addManufacturer",
                    params: {
                        _manufacturer: address,
                    },
                },
                onError: (error) => {
                    alert("Error adding user!!")
                    console.log(error)
                },
            })
        } else if (selectedRole === "Distributor") {
            const returnedProceeds = await runContractFunction({
                params: {
                    abi: supplyChainAbi,
                    contractAddress: supplyChainAddress,
                    functionName: "addDistributor",
                    params: {
                        _distributor: address,
                    },
                },
                onError: (error) => {
                    alert("Error adding user!!")
                    console.log(error)
                },
            })
        } else if (selectedRole === "Pharmacy") {
            const returnedProceeds = await runContractFunction({
                params: {
                    abi: supplyChainAbi,
                    contractAddress: supplyChainAddress,
                    functionName: "addPharmacy",
                    params: {
                        _pharmacy: address,
                    },
                },
                onError: (error) => {
                    alert("Error adding user!!")
                    console.log(error)
                },
            })
        } else if (selectedRole === "Patient") {
            const returnedProceeds = await runContractFunction({
                params: {
                    abi: supplyChainAbi,
                    contractAddress: supplyChainAddress,
                    functionName: "addPatient",
                    params: {
                        _patient: address,
                    },
                },
                onError: (error) => {
                    alert("Error adding user!!")
                    console.log(error)
                },
            })
        } else {
            alert("Please select a role")
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl"></h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    <div className="reg">
                        <h2>User Registration</h2>
                        <h2>Select the Role of the user:</h2>
                        <select value={selectedRole} onChange={handleRoleChange}>
                            <option value="">Select...</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="Distributor">Distributor</option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Patient">Patient</option>
                        </select>
                        <br />
                        <input
                            type="text"
                            placeholder="address"
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <br />

                        <button class="btn" onClick={() => handleClick()}>
                            Submit
                        </button>
                    </div>
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
