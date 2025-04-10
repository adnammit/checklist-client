import { Link } from 'react-router-dom'

function Header() {
    const style = {}

    return (
        <header className="header">
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Link to="/">
                    <h1 style={style}>Let&apos;s Go Shopping! 💅</h1>
                </Link>
                <Link to="/list">
                    <button>list</button>
                </Link>
            </div>
        </header>
    )
}

export default Header
