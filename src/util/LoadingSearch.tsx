import { PulseLoader } from 'react-spinners'

const LoadingSearch = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen">
            <PulseLoader
                color="#f59e0b"
                loading
                margin={2}
                speedMultiplier={0.4}
                size={16}
            />
        </div>



    )
}

export default LoadingSearch