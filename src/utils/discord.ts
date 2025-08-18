import axios from 'axios';

export const notifyDiscord = async (discordWebHook: string, message: string): Promise<void> => {
  if (discordWebHook == '') {
    console.log('Would notify to Discord:', message);
  } else {
    return axios.post(discordWebHook, {
      content: message,
    });
  }
};
