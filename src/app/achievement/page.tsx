import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/achievement.module.css";
import NavBar from "@/components/navbar/NavBar";


// ======================================== //
// ====== use for function component ====== //
type ObjectProps = {
    src1: string,
    name1: string,
    desc1: string,
    isDone1: boolean,
    src2: string,
    name2: string,
    desc2: string,
    isDone2: boolean
}

// Helper functions:
// deals with color config for icon and description
function isAchievementTrue(src:string, isDone:boolean) {
    if (isDone) {
        return (
        <div className={`${styles.achievement_box} ${styles.achievementTrue}`}>
            <Image
            className={styles.achievement_image}
            src={src}
            alt="achievement"
            priority
            width={100}
            height={100}
            />
        </div>
        );
    }
    return (
    <div className={`${styles.achievement_box} ${styles.achievementFalse}`}>
        <Image
        className={styles.achievement_image}
        src={src}
        alt="achievement"
        priority
        width={100}
        height={100}
            />
    </div>
    );
}

function isDescriptionTrue(desc:string, isDone:boolean) {
    if(isDone) {
        return (
        <div className={`${styles.achievement_description} ${styles.descriptionTrue}`}>
            <p className={styles.description_paragraph}>
                {desc}
            </p>
        </div>
        );
    }
    return (
        <div className={`${styles.achievement_description} ${styles.descriptionFalse}`}>
            <p className={styles.description_paragraph}>
                {desc}
            </p>
        </div>
    );
}


// ====================================== //
// == FUNCTION COMPONENT for each row === //
export const Row = ({src1, name1, desc1, isDone1, src2, name2, desc2, isDone2}:ObjectProps) => <div>
    <div className={styles.achievement_name}>
        <p className={styles.name}>{name1}</p>
        <p className={styles.name}>{name2}</p>
    </div>
    <div className={styles.achievement_row}>
        {isAchievementTrue(src1, isDone1)}
        {isDescriptionTrue(desc1, isDone1)}
        {isAchievementTrue(src2, isDone2)}
        {isDescriptionTrue(desc2, isDone2)}
    </div>
</div>



// ====================================== //
// ===== MAIN ACHIEVEMENT FUNCTION ====== //
export default function achievement() {
    return (
        <>
        <NavBar navId = 'achievement'/>
        <main className={styles.main}>
            {/* Achievement Title */}
            <div className={styles.achievement_title}>
                <div className={styles.title_container}>
                    <h1 className={styles.title_name}>Achievement</h1>
                </div>
                <div className={styles.right_rectangle}/>
            </div>

            {/* Achievement Number */}
            <div className={styles.achievement_number}>
                <h1>1/10</h1> {/*need to modify somehow*/}
            </div>

            {/* Achievements Content */}
            <div className={styles.achievement_top}>
                {/* ================================= */}
                {/* 1st row */}
                <Row 
                src1="/achievement1.png" 
                name1="Let's Get Started" 
                desc1="You got the first asset"
                isDone1={true}
                src2="/achievement1.png"
                name2="Something Longer Sentence"
                desc2="Fortune 500 company"
                isDone2={false}
                />

                {/* ================================= */}
                {/* 2nd row */}
                <Row 
                src1="/achievement1.png" 
                name1="WANAWANA" 
                desc1="You earned $1,000"
                isDone1={true}
                src2="/achievement1.png"
                name2="OkieDokie"
                desc2="Crypto"
                isDone2={true}
                />
                
                {/* ================================= */}
                {/* 3rd row */}
                <Row 
                src1="/achievement1.png" 
                name1="Samurai Sword" 
                desc1="You have earned $10,000"
                isDone1={false}
                src2="/achievement1.png"
                name2="Why Japanese People"
                desc2="Tech Company"
                isDone2={true}
                />
                
                {/* ================================= */}
                {/* 4th row */}
                <Row 
                src1="/achievement1.png" 
                name1="Amaozon Prime" 
                desc1="You have earned $50,000"
                isDone1={false}
                src2="/achievement1.png"
                name2="Netflix Killer"
                desc2="Health stock"
                isDone2={false}
                />
    
                {/* ================================= */}
                {/* 5th row */}
                <Row 
                src1="/achievement1.png" 
                name1="Legend of Zelda" 
                desc1="You have earned $100,000"
                isDone1={true}
                src2="/achievement1.png"
                name2="It's Great Game"
                desc2="Foreign stock"
                isDone2={true}
                />

            </div> {/* End of Achievements Content */}



        </main>
        </>
    );
}

