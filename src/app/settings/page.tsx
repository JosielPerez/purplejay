'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/settings.module.css';
import NavBar from '@/components/navbar/NavBar';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Input, InputLabel, FilledInput, Stack, FormControl, FormHelperText } from '@mui/material';
import { auth } from '@/library/firebase';
import { getAuth, updateEmail, updatePassword, verifyBeforeUpdateEmail } from 'firebase/auth';
import achievement from '../achievement/page';


let testVar:string = "someusername";
let testNum:number = 0;


// ======================================== //
// =========== Helper Functions =========== //
function defineInputType(inputType:string){
    if(inputType=="Email"){
        return "email";
    }
    else if(inputType=="Username"){
        return "text";
    }
    else if(inputType=="Password"){
        return "password";
    }
    else{
        return "number";
    }
}

function getUserEmail(){
    const auth = getAuth();
    const user = auth.currentUser;
    if(user != null) {
        return user.email;
    }
    return "null/no email found";
}

function isIncomeEdit(inputType:string){
    if(inputType=="Buy Power"){ // changed to Income => Buy Power
        return styles.profile_income_editing;
    }
    else {
        return styles.profile_editing;
    }
}

function getUsername(){
    const username:string = localStorage["username"];
    return username;
}
function getIncome(){
    const income:Int32Array = localStorage["buyPower"];
    return income;
}


// ======================================== //
// ========== Function Component ========== //
function Editing(inputType:string){
    const [open, setOpen] = React.useState(false);
    const [income, setIncome] = React.useState(0);
    const [str, setString] = React.useState("");
    const [newPassConfirm, setPassConfirm] = React.useState("");
    const auth = getAuth();

    const setValue = (value: any, inputType:string) => {
        if(inputType == "Buy Power"){ // changed to Income => Buy Power
            console.log("setting income...");
            setIncome(value);
        } 
        else{
            console.log("setting string...");
            setString(value);
        }
    }

    const isPassword = (inputType:string) => {
        if(inputType=="Password"){
            return(
                <React.Fragment>
                <TextField
                autoFocus
                label="New password"
                helperText="Please enter new input here"
                variant="filled"
                margin="dense"
                type={defineInputType(inputType)}
                fullWidth
                onChange={e => setString(e.target.value)}
                />
                <TextField
                autoFocus
                label="Confirm password"
                helperText="Please confirm the password"
                variant="filled"
                margin="dense"
                type={defineInputType(inputType)}
                fullWidth
                onChange={e=> setPassConfirm(e.target.value)}
                />
                </React.Fragment>
            );
        }
        else{
            return(
                <FormControl className={styles.dialog_box} variant="filled">
                    <InputLabel>{inputType}</InputLabel>
                    <FilledInput 
                    autoFocus
                    margin="dense" 
                    type={defineInputType(inputType)} 
                    fullWidth
                    onChange={e => setValue(e.target.value, inputType)}    
                    />
                    <FormHelperText>Please enter new input here</FormHelperText>
                </FormControl>
            );
        }
    } // end isPassword()




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    const handleClickConfirm = () => {
        if(inputType == "Email") {
            if(str != ""){
                if(auth.currentUser != null){
                    verifyBeforeUpdateEmail(auth.currentUser, str)
                    .then(()=>{
                        // updateEmail success!
                        console.log("input: ", str);
                        console.log("User email updated: ", auth.currentUser);
                    })
                    .catch((error)=>{
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log("Error code: ", errorCode);
                        console.log("Error message: ", errorMessage);
                    })
                }
            }
        }
        else if(inputType == "Username"){
            if(str != "" ){
                // ============================
                // NEED TO MODIFY AFTER DATABASE
                testVar = str;
                localStorage.setItem("username", testVar);
            }
        } 
        else if(inputType == "Password"){
            if(str != ""){
                if(str == newPassConfirm){
                    if(auth.currentUser != null){
                        updatePassword(auth.currentUser, str)
                        .then(()=>{
                            // updatePassword success!
                            console.log("input: ", str);
                            console.log("User password updated: ", auth.currentUser);
                        })
                        .catch((error)=>{
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log("Error code: ", errorCode);
                            console.log("Error message: ", errorMessage);
                        })

                        // SHOULD NOTIFY USER THAT IT'S SUCCESS!!!
                    }
                }
                else {
                    // BETTER TO HAVE POP UP WINDOW
                    console.log("BAD INPUT!!! NOT SAME!!!");
                }
            }
        }
        else{
            if(income > 0){
                // ============================
                // NEED TO MODIFY AFTER DATABASE
                testNum = Math.round(income * 100) / 100;
                localStorage.setItem("income", testNum.toString());
            }
        }

        setOpen(false);
    } // end handleClickConfirm()


    return(
    <div className={isIncomeEdit(inputType)}>
        <Button onClick={handleClickOpen}>
        <Image
        src="/editing.png"
        alt="edit button"
        priority
        width={40}
        height={40}
        />
        </Button>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>Edit {inputType}</DialogTitle>
            <DialogContent>
                {isPassword(inputType)}
            </DialogContent>
            <DialogActions>
                <Stack spacing={2} direction="row">
                <Button onClick={handleClickClose}>Cancel</Button>
                <Button className={styles.edit_button} onClick={handleClickConfirm} variant="contained">Confirm</Button>
                </Stack>
            </DialogActions>
        </Dialog>
    </div>
    );
} // end Editing()



function ResetButton(){
    const [open, setOpen] =React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClickClose = () => {
        setOpen(false);
    }
    const handleClickConfirm = () => {
        // username & monthly income will be reset.
        // achievement & assets will be reset.
        localStorage.setItem("username", "PurpleJay");
        localStorage.setItem("buyPower", "1000");
        localStorage.setItem("achievement1", "false");
        localStorage.setItem("achievement2", "false");
        let current = new Date();
        let cDate =
            current.getFullYear() +
            "-" +
            (current.getMonth() + 1) +
            "-" +
            current.getDate() + 
            " " +
            current.getHours() +
            ":" + current.getMinutes() + 
            ":" + current.getSeconds();

        localStorage.setItem("watchlist", JSON.stringify([null]));
        localStorage.setItem("balances", JSON.stringify([[cDate,1000]]));
        localStorage.removeItem("transactions");

        setOpen(false);
    }

    return(
        <div className={styles.reset_image_box}>
            <Button onClick={handleClickOpen}>
            <Image
            className={styles.reset_image}
            src="/bomb.png"
            alt="reset button"
            priority
            width={80}
            height={80}
            />
            </Button>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Are You Sure to Reset?</DialogTitle>
                <DialogActions>
                    <Stack spacing={2} direction="row">
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button className={styles.edit_button} onClick={handleClickConfirm} variant="contained">Confirm</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </div>
    );
} // end ResetButton()





// ====================================== //
// ======= MAIN SETTING FUNCTION ======== //
export default function settings() {
    return(
        <>
        <NavBar navId = 'settings'/>
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
                    <p className={styles.profile_left_name}>Buy Power</p>
                </div>
                <div className={styles.profile_right_content}>
                    <div className={styles.profile_right_box}>
                        <p>{getUserEmail()}</p>
                        {Editing("Email")}
                    </div>
                    <div className={styles.profile_right_box}>
                        <p>{getUsername()}</p>
                        {Editing("Username")}
                    </div>
                    <div className={styles.profile_right_box}>
                        <p>************</p>
                        {Editing("Password")}
                    </div>
                    <div className={styles.profile_income_box}>
                        <p>${getIncome()}</p>
                        {Editing("Buy Power")} {/*changed to Income => Buy Power*/}
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
                    {/*After you reset, you cannot re-reset until you spend at least 30 simulated-days in the app.*/}
                </p>
                {ResetButton()}
            </div>

        </main>
        </>
    );
}



