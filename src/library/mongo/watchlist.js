import clientPromise from ".";

let client
let db
let watchlist

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        watchlist = await db.collection('user_watchlist')
    }catch(error){
        throw new Error('Failed to establish connection to database')
    }
}

(async () => {
    await init()
})()

export async function getWatchlist(){
    try{
        if(!watchlist) await init()
        const result = await watchlist
            .find({id: 12345678})
            .map(user=>({watchlist: user.watchlist }))
            .toArray()

        return {watchlist: result[0].watchlist}
    }catch(error){
        return {error: 'Failed to fetch watchlist'}
    }
}