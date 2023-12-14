'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/achievement.module.css";
import NavBar from "@/components/navbar/NavBar";
import { count } from "firebase/firestore";


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


function getAchievement1() {
    const achievement1 = localStorage["achievement1"];
    if(achievement1 == "true") {
        return true;
    }
    return false;
}
function getAchievement2() {
    const achievement2 = localStorage["achievement2"];
    if(achievement2 == "true") {
        return true;
    }
    return false;
}

function countAchievements() {
    var count = 0;
    var str = "achievement";
    for(var i = 1; i <= 10; i++) {
        str += i;
        if(localStorage.getItem(str) == "true"){
            count++;
        }
        str = "achievement";
    }

    return count;
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
                <h1>{countAchievements()}/10</h1> {/*need to modify somehow*/}
            </div>

            {/* Achievements Content */}
            <div className={styles.achievement_top}>
                {/* ================================= */}
                {/* 1st row */}
                <Row 
                src1="/achievement1.png" 
                name1="Let's Get Started" 
                desc1="You bought the first asset"
                isDone1={getAchievement1()} // local parameter
                src2="/achievement2.png"
                name2="A Decision's Made"
                desc2="You sold your first asset"
                isDone2={getAchievement2()}
                />

                {/* ================================= */}
                {/* 2nd row */}
                <Row 
                src1="/achievement3.png" 
                name1="Achievement3" 
                desc1="You have earned $1,000"
                isDone1={false}
                src2="/achievement4.png"
                name2="Achievement4"
                desc2="You have earned $5,000"
                isDone2={false}
                />
                
                {/* ================================= */}
                {/* 3rd row */}
                <Row 
                src1="/achievement5.png" 
                name1="Achievement5" 
                desc1="You have earned $10,000"
                isDone1={false}
                src2="/achievement6.png"
                name2="Achievement6"
                desc2="You have earned $15,000"
                isDone2={false}
                />
                
                {/* ================================= */}
                {/* 4th row */}
                <Row 
                src1="/achievement7.png" 
                name1="Achievement7" 
                desc1="You have earned $20,000"
                isDone1={false}
                src2="/achievement8.png"
                name2="Achievement8"
                desc2="You have earned $25,000"
                isDone2={false}
                />
    
                {/* ================================= */}
                {/* 5th row */}
                <Row 
                src1="/achievement9.png" 
                name1="Achievement9" 
                desc1="You have earned $30,000"
                isDone1={false}
                src2="/achievement10.png"
                name2="Achievement10"
                desc2="You have earned $35,000"
                isDone2={false}
                />

            </div> {/* End of Achievements Content */}



        </main>
        </>
    );
}

