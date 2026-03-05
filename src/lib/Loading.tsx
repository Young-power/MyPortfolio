import { PulseLoader } from 'react-spinners'

const Loading = () => {
    return (

        <>
            <PulseLoader
                color="#fff"
                loading
                margin={1.5}
                speedMultiplier={0.4}
                size={10}
            />
        </>



    )
}

export default Loading