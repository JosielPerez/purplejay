import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/settings.module.css';
import NavBar from '@/components/navbar/NavBar';


type Object = {
    inputType: string
}


// ======================================== //
// ====== use for function component ====== //
export const Editing = () => <div className={styles.profile_editing}>
    <Image
    src="/editing.png"
    alt="edit button"
    priority
    width={40}
    height={40}
    />
</div>


/*
export const Input = ({inputType}: Object) => <div className={styles.profile_input}>
    {input(inputType)}
</div>


function input(inputType:string){
    if(inputType == "email") {
        return(
            <input
            type="email"
            name="email"
            id="email"
            placeholder="username@gmail.com"
            color="#D9D9D9"
            //onChange={(e) => setEmail(e.target.value)}
            required
        />
        );
    }
    if(inputType == "username") {
        return(
            <input
            type="username"
            name="username"
            id="username"
            placeholder="nickname"
            color="#D9D9D9"
            //onChange={(e) => setEmail(e.target.value)}
            required
            />
        );
    }
    if(inputType == "password") {
        return(
            <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            color="#D9D9D9"
            //onChange={(e) => setEmail(e.target.value)}
            required
            />
        );
    }
    return(
        <input
        type="income"
        name="income"
        id="income"
        placeholder="$8888"
        color="#D9D9D9"
        //onChange={(e) => setEmail(e.target.value)}
        required
        />
    );
}

*/



// ====================================== //
// ======= MAIN SETTING FUNCTION ======== //
export default function settings() {
    return(
        <>
        <NavBar/>
        <main className={styles.main}>
            {/* Settings Title */}
            <div className={styles.settings_title}>
                <div className={styles.title_container}>
                    <h1 className={styles.title_name}>Settings</h1>
                </div>
                <div className={styles.right_rectangle}/>
            </div>

            {/* UserProfile */}
            <p className={styles.profile_name}>User Profile</p>
            <div className={styles.profile_box}>
                <div className={styles.profile_left_content}>
                    <p className={styles.profile_left_name}>Email</p>
                    <p className={styles.profile_left_name}>Username</p>
                    <p className={styles.profile_left_name}>Password</p>
                    <p className={styles.profile_left_name}>Monthly Income</p>
                </div>
                <div className={styles.profile_right_content}>
                    <div className={styles.profile_right_box}>
                        {/*<Input inputType="email"/>*/}
                        <p>name@gmail.com</p>
                        <Editing/>
                    </div>
                    <div className={styles.profile_right_box}>
                        {/*<Input inputType="username"/>*/}
                        <p>username</p>
                        <Editing/>
                    </div>
                    <div className={styles.profile_right_box}>
                        {/*<Input inputType="password"/>*/}
                        <p>password here</p>
                        <Editing/>
                    </div>
                    <div className={styles.profile_income_box}>
                        {/*<Input inputType="income"/>*/}
                        <p>$8888</p>
                        <Image
                        className={styles.profile_income_editing}
                        src="/editing.png"
                        alt="edit button"
                        priority
                        width={40}
                        height={40}
                        />
                    </div>
                </div>
            </div>


            {/* ResetButton */}
            <p className={styles.reset_name}>Reset Button</p>
            <div className={styles.reset_box}>
                <p className={styles.reset_description}>
                    By clicking the bomb icon, the pop-up window show up for you to confirm the action. 
                    By clicking "Confirm" you accept the terms and policy, and all of your status will be reset 
                    (i.e. balance, assets, achievements, investment records, and portfolio). <br />
                    After you reset, you cannot re-reset until you spend at least 30 simulated-days in the app.
                </p>
                <div className={styles.reset_image_box}>
                    <Image
                    className={styles.reset_image}
                    src="/bomb.png"
                    alt="reset button"
                    priority
                    width={80}
                    height={80}
                    />
                </div>
            </div>












        </main>
        </>
    );
}






