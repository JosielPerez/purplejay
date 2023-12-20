This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Overview
This is a web application for practicing stock trading using real-time stock data. <br />
This application allows user to gain some experience in trading without using real money. <br />

<br />
<br />

## System Dependencies
This application used following packages as dependencies:
1. `React`, `Typescript`, `Next.js` to build the webpages
2. `Firebase` for user credentials (email and password)
3. `Alpha Vantage API` for real-time stock data
4. `MongoDB` for database

<br />
<br />

## Pre-Requisites
You will need several files to install before you start the application:
1. run `npm install` on the terminal under directory `/purplejay`
2. add a file named `.env.local` under `/purplejay`
3. Create an account for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_amers-us-ca_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14383025495&adgroup=129270225274&cq_cmp=14383025495&gad_source=1&gclid=CjwKCAiAvoqsBhB9EiwA9XTWGYj9RHguZRj92cd8WwkQp6-OmyNJTuGmor62xthwZQdCOOpPAGjinBoC_RYQAvD_BwE) and include MongoDB URI in `.env.local`
4. install `Firebase` and put firebase keys into `.env.local`. Details on how to install firebase can be found [here](https://firebase.google.com/docs/functions/get-started?hl=en&gen=2nd)
5. purchase real-time data API from [Alpha Vantage](https://www.alphavantage.co/) and put API_KEY into the file named `/purplejay/src/app/dashboard/page.tsx`

<br />
inside of `.env.local` should look something like this:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDAPW_kPfXthEIhEwbm-_uXTNd0e1dbKhs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=purplejay-4282c.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=purplejay-4282c
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=purplejay-4282c.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=144586191442
NEXT_PUBLIC_FIREBASE_APP_ID=1:144586191442:web:bd6b27e1c4ad10a62a258b
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-TRZLJGKZM7
MONGODB_URI=mongodb+srv://username:password@cluster0.f0xoazh.mongodb.net/PurpleJay?retryWrites=true&w=majority
```

<br />
inside of `/purplejay/src/app/dashboard/page.tsx` should look like this:
```bash
function Dashboard() {

  const API_KEY =  'put key string here';
```
<br />
<br />


## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
<br />
<br />


## Further Information on Next.js
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

<br />
<br />

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
