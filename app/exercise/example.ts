export interface IExample {
  words: string;
  hide: string[];
  vietnamese: string;
  phonetics: string;
}

export const examples: IExample[] = [
  {
    words: "I love playing the guitar",
    hide: ['playing', 'guitar'],
    vietnamese: "Tôi thích chơi đàn ghi-ta",
    phonetics: "aɪ lʌv ˈpleɪɪŋ ðə ɡɪˈtɑr",
  },
  {
    words: "She is a talented artist",
    hide: ['talented', 'artist'],
    vietnamese: "Cô ấy là một nghệ sĩ tài năng",
    phonetics: "ʃi ɪz ə ˈtælənˌtɪd ˈɑrtɪst",
  },
  {
    words: "We are traveling to Japan next week",
    hide: ['traveling', 'Japan'],
    vietnamese: "Chúng tôi đang đi đến Nhật Bản tuần tới",
    phonetics: "wi ɑr ˈtrævəlɪŋ tu ʤəˈpæn nɛkst wik",
  },
  {
    words: "The weather today is beautiful",
    hide: ['weather', 'beautiful'],
    vietnamese: "Thời tiết hôm nay thật đẹp",
    phonetics: "ðə ˈwɛðər təˈdeɪ ɪz ˈbjutɪfəl",
  },
  {
    words: "He enjoys reading science fiction",
    hide: ['enjoys', 'science fiction'],
    vietnamese: "Anh ấy thích đọc tiểu thuyết khoa học viễn tưởng",
    phonetics: "hi ɛnˈʤɔɪz ˈridɪŋ ˈsaɪəns ˈfɪkʃən",
  },
  {
    words: "The cat is sleeping on the sofa",
    hide: ['cat', 'sleeping', 'sofa'],
    vietnamese: "Con mèo đang ngủ trên ghế sofa",
    phonetics: "ðə kæt ɪz ˈslipɪŋ ɑn ðə ˈsoʊfə",
  },
  {
    words: "They are building a new house",
    hide: ['building', 'new', 'house'],
    vietnamese: "Họ đang xây một ngôi nhà mới",
    phonetics: "ðeɪ ɑr ˈbɪldɪŋ ə nu haʊs",
  },
  {
    words: "I am learning to speak French",
    hide: ['learning', 'speak', 'French'],
    vietnamese: "Tôi đang học nói tiếng Pháp",
    phonetics: "aɪ æm ˈlɜrnɪŋ tu spik frɛnʧ",
  },
  {
    words: "My favorite food is pizza",
    hide: ['favorite', 'food', 'pizza'],
    vietnamese: "Món ăn yêu thích của tôi là pizza",
    phonetics: "maɪ ˈfeɪvərɪt fud ɪz ˈpitsə",
  },
  {
    words: "She is working in a hospital",
    hide: ['working', 'hospital'],
    vietnamese: "Cô ấy đang làm việc trong bệnh viện",
    phonetics: "ʃi ɪz ˈwɜrkɪŋ ɪn ə ˈhɑˌspɪtəl",
  }
];
