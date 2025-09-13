import React from 'react'
import SkillGrid from './SkillGrid'

const SkillSender = () => {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 px-10 mt-24' id='skills'>
            <SkillGrid 
                urlImage='/assets/react.png' 
                detail='Je maîtrise React pour créer des interfaces dynamiques et réactives, gérer l’état avec les hooks et construire des composants modulaires.' 
                title='React' 
            />
            <SkillGrid 
                urlImage='/assets/next.png' 
                detail='J’utilise Next.js pour développer des applications performantes avec SSR/SSG, routage dynamique et intégration React/Tailwind CSS.' 
                title='NextJs' 
            />
            <SkillGrid 
                urlImage='/assets/js.png' 
                detail='Je suis à l’aise avec JavaScript moderne (ES6+) pour créer des fonctionnalités interactives côté client et serveur et gérer les événements.' 
                title='JavaScript' 
            />
            <SkillGrid 
                urlImage='/assets/nest.png' 
                detail='Avec NestJS, je construis des APIs modulaires et sécurisées en TypeScript et j’intègre facilement des bases de données et systèmes d’authentification.' 
                title='NestJs' 
            />
            <SkillGrid 
                urlImage='/assets/linux.jpeg' 
                detail='Je maîtrise Linux pour le développement et l’administration système, avec gestion de fichiers, terminal et configuration réseau.' 
                title='Linux' 
            />
            <SkillGrid 
                urlImage='/assets/git.jpeg' 
                detail='Je connais Git et GitHub pour gérer mes projets : dépôts, commits, branches et collaboration sur des projets en ligne.' 
                title='GitHub' 
            />
            <SkillGrid 
                urlImage='/assets/python.png' 
                detail='Débutant en Python,je pratique les bases comme variables, boucles et fonctions,et je crée des scripts simples pour m’entraîner.' 
                title='Python' 
            />
            <SkillGrid 
                urlImage='/assets/typescript.jpeg' 
                detail='Je programme en TypeScript pour produire un code robuste et maintenable,avec typage statique et interfaces pour sécuriser mes projets front/back.' 
                title='TypeScript' 
            />
            <SkillGrid 
                urlImage='/assets/figmalog.png' 
                detail='J’utilise Figma pour concevoir des maquettes et prototypes interactifs,créer des interfaces modernes et collaborer efficacement sur le design.' 
                title='Figma' 
            />
        </div>
    )
}

export default SkillSender
