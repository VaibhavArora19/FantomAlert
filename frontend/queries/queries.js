import { gql } from "@urql/core";

export const channelQuery = gql`
  query channelsQuery {
    channels {
      id
      title
      description
      owner
      totalSubscribers {
        id
      }
    }
  }
`;

export const notificationQuery = gql`
  query notificationsQuery($id: Bytes!) {
    notifications(where: {subscribers_: { id: $id }}) {
      id
      title
      description
      channel {
        id,
        title,
        owner
      },
      subscribers{
        id
      }
    }
  }
`;


export const singleNotificationQuery = gql`
  query singleNotification($id: Bytes!){
    notifications(where: {id: $id}) {
      id,
      title,
      description,
      subscribers{
        id
      },
      channel{
        id,
        title,
        description,
        totalSubscribers{
          id
        }
      }
    }
  }
`

export const subscribedChannelsQuery = gql`
  query subscribedChannelQuery($id: Bytes!) {
    channels(where: {totalSubscribers_: {id: $id}}) {
      id
      owner
      title
      description
      totalSubscribers {
        id
      }
    }
  }
`

export const ownedChannelQuery = gql`
 query ownedChannelQuery($id: Bytes!) {
  channels(where: {owner: $id}) {
    id,
    owner,
    title,
    description
  }
 }
`