import Image from "next/image"
const Project2 = () => {
    return (
        <div className='w-full grid grid-cols-1  lg:grid-cols-2 mt-24 mb-7  justify-center items-center'>
            <div className='text-white flex flex-col  justify-center items-center'>
                <h1 className='text-center text-xl font-bold italic underline underline-offset-4 lg:text-4xl mb-3 text-muted-foreground dark:text-white'>Projet Réalisé Au cours de l&apos;année scolaire</h1>
                <p className="w-full text-sm md:text-md sm:text-wrap text-center lg:text-wrap text-muted-foreground dark:text-white lg:px-10 lg:text-2xl lg:text-justify ">
                    Ce projet a été réalisé dans le cadre de l&apos;année scolaire avec pour objectif de mettre en exergue mes idoles de vie et de créer une section de vêtements inspirés par leur style.
                </p>
                <p className="w-full text-sm md:text-md sm:text-wrap text-center lg:text-wrap mt-3 text-muted-foreground dark:text-white lg:px-10 lg:text-2xl lg:text-justify ">
                    Il m&apos;a permis de développer mes compétences en design et en création de contenu, tout en explorant comment mes inspirations peuvent influencer des projets concrets.
                </p>

                <p className="w-full text-sm md:text-md sm:text-wrap text-center lg:text-wrap text-muted-foreground dark:text-white lg:px-10 mt-3 lg:text-2xl lg:text-justify ">
                    Ce travail reflète à la fois ma créativité et ma volonté de lier passion et apprentissage.

                </p>
                <div className='mt-7 space-y-3 flex flex-col justify-center items-center'>
                    <p className=' w-fit border-b-2 py-2 rounded-4xl text-center text-xl lg:text-2xl  font-bold italic text-muted-foreground dark:text-white px-5 shadow-md '>TECHNOLOGIES UTILISEES</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-10 rounded-4xl shadow-xl ">
                        <Image src="/assets/html1.png" alt="legend" width={150} height={150} className=" object-cover " />
                        <Image src="/assets/css.png" alt="legend" width={150} height={150} className=" object-cover " />
                        <Image src="/assets/js.png" alt="legend" width={150} height={150} className=" object-cover " />

                    </div>
                    <span className='text-center font-bold text-muted-foreground dark:text-white '>Réalisé avec HTML, CSS ,JS</span>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-x-7 gap-y-16 justify-items-center">
                <Image src="/assets/pro1.png" alt="project phone" width={384} height={256} className="rounded-md" />
                <Image src="/assets/pro4.png" alt="project phone" width={384} height={256} className="rounded-md" />
                <Image src="/assets/pro2.png" alt="project phone" width={384} height={256} className="rounded-md" />
                <Image src="/assets/pro5.png" alt="project phone" width={384} height={256} className="rounded-md" />
                <Image src="/assets/pro3.png" alt="project phone" width={384} height={256} className="rounded-md" />
            </div>

        </div>
    )
}

export default Project2