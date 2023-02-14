import { gql} from "@urql/core"

export const channelQuery = gql`
    query channelsQuery{ 
    channels{
        id,
        title,
        description,
        owner,  
        totalSubscribers{
            id
        }
    }
}
`