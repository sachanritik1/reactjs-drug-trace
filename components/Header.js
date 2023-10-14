import { ConnectButton } from "web3uikit"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div id="header">
            <div class="container">
                <nav>
                    <div class="header-text">
                        <h1>Drug Tracing using BlockChain</h1>
                    </div>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                    <Link to="/manufacturer">
                        <h2>Manufacturer</h2>
                    </Link>
                    <Link to="/distributor">
                        <h2>Distributor</h2>
                    </Link>
                    <Link to="/pharmacy">
                        <h2>Pharmacy</h2>
                    </Link>
                    <Link to="/patient">
                        <h2>Patient</h2>
                    </Link>
                    <ConnectButton moralisAuth={false} />
                </nav>
            </div>
        </div>
    )
}
