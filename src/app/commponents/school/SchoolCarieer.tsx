const SchoolCarieer = () => {
    return (
        <div className='w-full justify-center items-center flex  my-7'>

            <ul className="steps steps-vertical italic ">
                <li data-content="🎯" className="step "><span className=" text-muted-foreground dark:text-white text-xl  font-semibold">New purpose</span></li>
                <li data-content="4" className="step step-primary "> <span className='text-2xl text-muted-foreground font-bold dark:text-white'>BTS 2025</span></li>
                <li data-content="3" className="step step-primary"><span className='text-2xl text-muted-foreground dark:text-white font-semibold ' >BAC 2023</span></li>
                <li data-content="2" className="step step-primary"><span className='text-2xl text-muted-foreground dark:text-white font-semibold'>BEPC 2020</span></li>
                <li data-content="1" className="step step-primary"><span className='text-2xl text-muted-foreground dark:text-white font-semibold'>CEPE 2016</span></li>
            </ul>

        </div>
    )
}

export default SchoolCarieer