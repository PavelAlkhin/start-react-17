const GamePage = ({ gangePageButton }) => {

    const handleClick = (page) => {
        gangePageButton && gangePageButton('app')
    }

    return (
        <div>
            This is game page
            <button onClick={ handleClick }>
                Back to main page
            </button>
        </div>
    )
}

export default GamePage;