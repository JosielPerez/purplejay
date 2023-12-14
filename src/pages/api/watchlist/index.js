import { getWatchlist} from "../../../library/mongo/watchlist";

const handler = async (req,res)=>{
    if(req.method == 'GET'){
        try{
            const {watchlist, error} = await getWatchlist()
            if (error) throw Error(error)
    
            return res.status(200).json({watchlist})
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }

    res.setHeader('Allow',['GET'])
    res.status(405).end(`Method ${req.method} is not allowed`)
}

export default handler