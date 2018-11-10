import { NetInfo } from 'react-native';

const info = async () => NetInfo.getConnectionInfo();

const isConnected = async () => NetInfo.isConnected.fetch();

export default {
  info,
  isConnected,
};
