import axios from 'axios';

const KEY = 'AIzaSyB_l_Vcz2TmXI3owfvPJHP6qEEyt12ctrM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults:5,
    key: KEY
  }
});