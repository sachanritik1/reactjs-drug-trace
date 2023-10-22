import { ConnectButton } from "web3uikit"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl text-white font-bold">
                    Drug Trace
                </Link>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <Link to="/manufacturer">Manufacturer</Link>
                    </li>
                    <li>
                        <Link to="/distributor">Distributor</Link>
                    </li>
                    <li>
                        <Link to="/pharmacy">Pharmacy</Link>
                    </li>
                    <li>
                        <Link to="/patient">Patient</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
