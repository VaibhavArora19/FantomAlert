const {gql} = require("@urql/core");

exports.channelQuery = gql`
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

exports.notificationQuery = gql`
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


exports.singleNotificationQuery = gql`
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

exports.subscribedChannelsQuery = gql`
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

exports.singleChannelQuery = gql`
  query singleChannelQuery($id: String!) {
    channels(where: {id: $id}){
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