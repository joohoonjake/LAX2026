export const flights = {
  outbound: {
    date: '2026-07-24',
    dateLabel: '7/24 (금)',
    from: '인천 (ICN)',
    to: 'LA (LAX)',
    departure: '12:40',
    arrival: '08:20',
    arrivalNote: '당일 도착',
    flightNumber: 'OZ202',
    aircraft: 'A380',
    cabinClass: '비즈니스',
    terminal: '인천 제1터미널',
  },
  return: {
    date: '2026-08-07',
    dateLabel: '8/7 (금)',
    from: 'LA (LAX)',
    to: '인천 (ICN)',
    departure: '10:40',
    arrival: '15:20',
    arrivalNote: '익일 8/8 도착',
    flightNumber: 'OZ201',
    aircraft: 'A380',
    cabinClass: '비즈니스',
  },
}

export const carRental = {
  vehicle: 'Tesla Model Y 2026 (FSD)',
  company: 'Turo 개인렌트',
  pickupLocation: 'Turo 개인렌트 픽업 장소',
  pickupMapQuery: 'Los Angeles International Airport, Los Angeles, CA',
  pickupInstructions: [
    '수하물 찾은 후 Arrival level에서 나오기',
    'Turo 호스트에게 연락하여 픽업 장소 확인',
    '호스트와 협의한 장소에서 차량 인수',
    '차량 상태 확인 후 Turo 앱에서 픽업 완료 처리',
  ],
  pickupDate: '7/24 (금)',
  returnDate: '8/7 (금)',
  returnNote: '아침 공항 가는 길에 Turo 개인렌트 반납',
}

export const accommodations = [
  {
    id: 'joshua-tree',
    emoji: '🌵',
    name: '조슈아 트리 숙소',
    subtitle: '트웬티나인 팜스 인근',
    checkIn: '7/24 (금)',
    checkOut: '7/26 (일) 오전',
    nights: 2,
    address: '55795 Acoma Terrace, Yucca Valley, CA 92284',
    mapQuery: '55795 Acoma Terrace, Yucca Valley, CA 92284',
    bookingUrl: 'https://www.airbnb.co.kr/rooms/44433478?guests=1&adults=1&s=67&unique_share_id=382566c6-d4ca-4ca7-9cf0-d236d92d472a',
    highlight: false,
  },
  {
    id: 'la-jolla',
    emoji: '🏖',
    name: '라호야 숙소',
    subtitle: 'Airbnb · 919 Tourmaline St, San Diego, CA 92109',
    checkIn: '7/26 (일)',
    checkOut: '8/3 (월) 오전',
    nights: 8,
    address: '919 Tourmaline St, San Diego, CA 92109',
    mapQuery: '919 Tourmaline St, San Diego, CA 92109',
    bookingUrl: 'https://www.airbnb.co.kr/rooms/747060951327292032',
    highlight: true,
    note: '여기가 메인. 느긋하게 쉬는 곳.',
  },
  {
    id: 'disney-hotel',
    emoji: '🏰',
    name: '디즈니랜드 호텔',
    subtitle: 'Howard Johnson by Wyndham Anaheim · 아나하임',
    checkIn: '8/3 (월)',
    checkOut: '8/6 (목) 오전',
    nights: 3,
    address: '1380 S Harbor Blvd, Anaheim, CA 92802',
    mapQuery: 'Howard Johnson by Wyndham Anaheim, 1380 S Harbor Blvd, Anaheim, CA',
    highlight: false,
    tip: '디즈니랜드까지 도보 8분',
  },
  {
    id: 'airport-hotel',
    emoji: '🛫',
    name: '마지막날 숙소',
    subtitle: 'LAX 공항 근처 호텔 (공항 셔틀)',
    checkIn: '8/6 (목)',
    checkOut: '8/7 (금) 새벽',
    nights: 1,
    mapQuery: 'LAX Airport Hotels, Los Angeles, CA',
    highlight: false,
    note: '다음날 아침 비행기. 렌터카 반납 후 체크아웃.',
  },
]

export type DayEntry = {
  date: string
  dayLabel: string
  sleeping: string
  memo?: string
  isMovingDay?: boolean
}

export const dailySchedule: DayEntry[] = [
  { date: '7/24', dayLabel: '(금) 도착', sleeping: '조슈아 트리', memo: '인천 제1터미널 12:40 출발 (비즈니스) → LA 08:20 도착 · Turo 개인렌트에서 테슬라 픽업 → 조슈아 트리 체크인', isMovingDay: true },
  { date: '7/25', dayLabel: '(토)', sleeping: '조슈아 트리' },
  { date: '7/26', dayLabel: '(일)', sleeping: '샌디에고', memo: '★ 조슈아 트리 체크아웃 → 샌디에고 체크인 (8일 시작)', isMovingDay: true },
  { date: '7/27', dayLabel: '(월)', sleeping: '샌디에고' },
  { date: '7/28', dayLabel: '(화)', sleeping: '샌디에고' },
  { date: '7/29', dayLabel: '(수)', sleeping: '샌디에고' },
  { date: '7/30', dayLabel: '(목)', sleeping: '샌디에고' },
  { date: '7/31', dayLabel: '(금)', sleeping: '샌디에고' },
  { date: '8/1', dayLabel: '(토)', sleeping: '샌디에고' },
  { date: '8/2', dayLabel: '(일)', sleeping: '샌디에고' },
  { date: '8/3', dayLabel: '(월)', sleeping: '디즈니 호텔', memo: '★ 샌디에고 체크아웃 → 디즈니 호텔 체크인 (3일 시작)', isMovingDay: true },
  { date: '8/4', dayLabel: '(화)', sleeping: '디즈니 호텔', memo: '🎢 디즈니랜드 노는 날' },
  { date: '8/5', dayLabel: '(수)', sleeping: '디즈니 호텔', memo: '🎢 디즈니랜드 노는 날' },
  { date: '8/6', dayLabel: '(목)', sleeping: 'LAX 공항 호텔', memo: '★ 디즈니 체크아웃 → 공항 호텔 체크인 (차로 직접 이동)', isMovingDay: true },
  { date: '8/7', dayLabel: '(금) 출발', sleeping: '비행기 (집으로!)', memo: '공항 호텔 체크아웃 · 렌터카 반납 (Turo 개인렌트) → LA 10:40 출발 (비즈니스) → 인천 익일(8/8) 15:20 도착 (OZ201)', isMovingDay: true },
]

export const keyNotes = [
  { emoji: '🏖', title: '샌디에고 8일', desc: '여기가 메인. 느긋하게 쉬는 곳.' },
  { emoji: '🎢', title: '디즈니 8/4·8/5', desc: '이틀 노는 날. 낮에 더우면 호텔 복귀 → 아기 낮잠 → 저녁에 재입장. Howard Johnson에서 도보 8분.' },
  { emoji: '🛫', title: '마지막 밤 8/6', desc: '공항 근처 호텔만. 다음날 아침 비행기 타고 집으로.' },
]

export const movingDays = [
  { date: '7/26', from: '조슈아 트리', to: '샌디에고' },
  { date: '8/3', from: '샌디에고', to: '디즈니 (Anaheim)' },
  { date: '8/6', from: '디즈니', to: '공항 호텔 (차로 직접)', note: '렌터카는 다음날 아침 반납' },
]

export type Restaurant = {
  name: string
  cuisine: string
  area: string
  note: string
  tags?: string[]
  mapQuery: string
  top?: boolean
}

// 출처: r/FoodSanDiego "Staying near La Jolla this summer, what are 2 or 3
// must go nicer restaurants worth driving for?" 댓글 추천 정리
export const restaurants: {
  laJolla: Restaurant[]
  laJollaMore: Restaurant[]
  drive: { area: string; emoji: string; items: Restaurant[] }[]
} = {
  // 라호야 안에서 (숙소에서 가깝게)
  laJolla: [
    {
      name: 'Catania',
      cuisine: '이탈리안',
      area: '라호야',
      tags: ['추천 1순위'],
      note: '댓글에서 가장 많은 추천을 받은 곳. "그냥 최고(amazing)". 라호야에서 한 곳만 고른다면 여기.',
      mapQuery: 'Catania, La Jolla, San Diego, CA',
      top: true,
    },
    {
      name: 'Callie',
      cuisine: '지중해 · 모던',
      area: '라호야',
      tags: ['채식 OK', '칵테일'],
      note: '채식 옵션은 많지 않지만 훌륭. 아보카도 라브네는 SD 최고의 채식 메뉴라는 평. 칵테일도 좋음.',
      mapQuery: 'Callie, La Jolla, San Diego, CA',
      top: true,
    },
    {
      name: 'Marine Room',
      cuisine: '파인다이닝',
      area: '라호야',
      tags: ['오션뷰', '기념일'],
      note: '파도가 창문을 때리는 뷰 맛집 같지만 음식·서비스 모두 잊을 수 없는 수준. 양도 푸짐.',
      mapQuery: 'The Marine Room, La Jolla, San Diego, CA',
      top: true,
    },
    {
      name: "George's at the Cove",
      cuisine: '모던 아메리칸',
      area: '라호야',
      tags: ['오션뷰', '선셋'],
      note: 'The Cove 환상적인 뷰 + 훌륭한 음식. 옥상 Ocean Terrace는 선셋 명소. (여러 명 추천)',
      mapQuery: "George's at the Cove, La Jolla, San Diego, CA",
      top: true,
    },
    {
      name: "Duke's La Jolla",
      cuisine: '하와이안',
      area: '라호야',
      tags: ['오션뷰'],
      note: '멋진 뷰 + 좋은 음식. 디저트 Hula pie는 "세계 최고"라는 평.',
      mapQuery: "Duke's La Jolla, San Diego, CA",
    },
    {
      name: 'Marisi',
      cuisine: '이탈리안',
      area: '라호야',
      note: '음식·분위기·위치 모두 좋음. (여러 명 추천)',
      mapQuery: 'Marisi, La Jolla, San Diego, CA',
    },
  ],
  // 라호야 안에서 (추가)
  laJollaMore: [
    {
      name: 'Paradisaea',
      cuisine: '모던',
      area: '라호야',
      tags: ['고급'],
      note: '음식·음료 환상적. 비싸지만 그만한 값어치가 있다는 강력 추천.',
      mapQuery: 'Paradisaea, La Jolla, San Diego, CA',
    },
    {
      name: 'Fleurette',
      cuisine: '모던',
      area: '라호야',
      note: 'Callie의 자매점(같은 셰프).',
      mapQuery: 'Fleurette, La Jolla, San Diego, CA',
    },
    {
      name: 'Dora',
      cuisine: '모던',
      area: '라호야',
      note: '분위기와 음식 모두 좋음.',
      mapQuery: 'Dora, La Jolla, San Diego, CA',
    },
    {
      name: 'Lucrezia',
      cuisine: '이탈리안',
      area: '라호야',
      note: '분위기·음식 좋고, 오랜만에 받아본 최고의 서비스라는 평.',
      mapQuery: 'Lucrezia Trattoria, La Jolla, San Diego, CA',
    },
    {
      name: 'Wolf in the Woods',
      cuisine: '모던',
      area: '라호야',
      tags: ['예약 권장'],
      note: '"탁월하다(outstanding)". 자리 예약 추천.',
      mapQuery: 'Wolf in the Woods, La Jolla, San Diego, CA',
    },
    {
      name: 'Le Coq',
      cuisine: '프렌치',
      area: '라호야',
      tags: ['해피아워'],
      note: '해피아워 추천.',
      mapQuery: 'Le Coq, La Jolla, San Diego, CA',
    },
    {
      name: 'Gata',
      cuisine: '와인바 · 타파스',
      area: '라호야',
      note: '독특한 와인바 + 훌륭한 타파스. Wall St — 다운타운 라호야 중심.',
      mapQuery: 'Gata, Wall Street, La Jolla, San Diego, CA',
    },
    {
      name: 'Destiny Coast',
      cuisine: '모던',
      area: '라호야',
      note: '댓글 추천 — 둘러볼 만한 곳.',
      mapQuery: 'Destiny Coast, La Jolla, San Diego, CA',
    },
    {
      name: 'Raised by Wolves',
      cuisine: '위스키 바',
      area: '라호야',
      tags: ['식후 한잔', '스피크이지'],
      note: '위스키 스피크이지. 식사 후 한잔용. 예약 권장.',
      mapQuery: 'Raised by Wolves, La Jolla, San Diego, CA',
    },
  ],
  // 운전해서 갈 만한 곳 (지역별)
  drive: [
    {
      area: 'Del Mar',
      emoji: '🌊',
      items: [
        {
          name: "Jake's Del Mar",
          cuisine: '시푸드 · 아메리칸',
          area: 'Del Mar',
          tags: ['비치뷰'],
          note: '해변 바로 앞. 뷰와 위치가 최고이고 음식도 좋음. 마이타이 칵테일.',
          mapQuery: "Jake's Del Mar, Del Mar, CA",
        },
      ],
    },
    {
      area: 'Oceanside',
      emoji: '🏄',
      items: [
        {
          name: 'The Plot',
          cuisine: '비건',
          area: 'Oceanside',
          tags: ['올비건'],
          note: '올비건 레스토랑. 식후 새로 생긴 다운타운 산책 추천.',
          mapQuery: 'The Plot, Oceanside, CA',
        },
        {
          name: 'Plumeria',
          cuisine: '타이 (비건)',
          area: 'Oceanside',
          tags: ['올비건'],
          note: '환상적이라는 평. 올비건 타이.',
          mapQuery: 'Plumeria Vegetarian, Oceanside, CA',
        },
        {
          name: 'Wrench and Rodent',
          cuisine: '스시 · 시푸드',
          area: 'Oceanside',
          tags: ['예약 권장'],
          note: '독특하고 정말 맛있는 저녁. 예약 필요.',
          mapQuery: 'Wrench and Rodent Seabasstropub, Oceanside, CA',
        },
        {
          name: 'Pescador Fish Market',
          cuisine: '시푸드',
          area: 'Oceanside',
          note: '"미친 듯이 맛있다(insanely good)".',
          mapQuery: 'Pescador Fish Market, Oceanside, CA',
        },
      ],
    },
    {
      area: 'North Park',
      emoji: '🍕',
      items: [
        {
          name: 'Tribute Pizza',
          cuisine: '피자',
          area: 'North Park',
          note: '현재 최애 피자. 예약 추천.',
          mapQuery: 'Tribute Pizza, North Park, San Diego, CA',
        },
        {
          name: 'Donna Jean',
          cuisine: '비건',
          area: 'North Park',
          tags: ['비건'],
          note: '식후 North Park 동네 구경.',
          mapQuery: 'Donna Jean, San Diego, CA',
        },
      ],
    },
    {
      area: 'Carlsbad',
      emoji: '🌅',
      items: [
        {
          name: 'Campfire',
          cuisine: '모던 아메리칸',
          area: 'Carlsbad',
          note: '댓글 추천.',
          mapQuery: 'Campfire, Carlsbad, CA',
        },
        {
          name: 'Lilo',
          cuisine: '파인다이닝',
          area: 'Carlsbad',
          tags: ['파인다이닝'],
          note: '파인다이닝. 차로 약 25분(막힘 없을 때).',
          mapQuery: 'Lilo, Carlsbad, CA',
        },
      ],
    },
    {
      area: 'Cardiff',
      emoji: '🍳',
      items: [
        {
          name: "Ki's",
          cuisine: '브런치 · 카페',
          area: 'Cardiff',
          tags: ['가성비 뷰'],
          note: '가성비 좋은 뷰 맛집 아침식사.',
          mapQuery: "Ki's Restaurant, Cardiff, CA",
        },
      ],
    },
    {
      area: 'Harbor / Shelter Island',
      emoji: '⛵',
      items: [
        {
          name: 'Coasterra',
          cuisine: '멕시칸',
          area: 'Harbor Island',
          tags: ['베이뷰'],
          note: '베이 건너 다운타운 SD 뷰가 멋진 업스케일 멕시칸.',
          mapQuery: 'Coasterra, Harbor Island, San Diego, CA',
        },
        {
          name: 'Island Prime',
          cuisine: '스테이크 · 시푸드',
          area: 'Harbor Island',
          tags: ['베이뷰'],
          note: '다운타운 SD를 바라보는 베이뷰 업스케일 다이닝.',
          mapQuery: 'Island Prime, Harbor Island, San Diego, CA',
        },
        {
          name: "Tom Ham's Lighthouse",
          cuisine: '시푸드 · 아메리칸',
          area: 'Harbor Island',
          tags: ['베이뷰'],
          note: '등대 콘셉트, 베이 건너 다운타운 뷰.',
          mapQuery: "Tom Ham's Lighthouse, San Diego, CA",
        },
        {
          name: 'Bali Hai',
          cuisine: '폴리네시안',
          area: 'Shelter Island',
          tags: ['베이뷰'],
          note: '셸터 아일랜드의 클래식 티키 레스토랑. 다운타운 뷰.',
          mapQuery: 'Bali Hai Restaurant, Shelter Island, San Diego, CA',
        },
      ],
    },
  ],
}

// 채식 친화 추가 추천 (한 댓글의 리스트)
export const vegFriendly: { label: string; items: string[] }[] = [
  { label: '운전할 가치 O', items: ['Dija Mara (발리, Oceanside)'] },
  { label: '이탈리안', items: ['Cesarina', 'Buona Forchetta', 'Cucina Basilico'] },
  { label: '아시안', items: ['Din Tai Fung', 'Kingfisher (베트남)', 'Birdseye Kitchen (타이)', 'Burma Place'] },
  { label: '멕시칸', items: ['El Agave', 'Puesto'] },
  { label: '브런치', items: ['The Cottage', 'Sugar n Scribe', 'Madison'] },
]

export type Spot = {
  name: string
  desc: string
  tags?: string[]
  mapQuery?: string
  free?: boolean
}

// 출처: r/asksandiego "Thing/places that really need to be seen in La Jolla?"
// 댓글 추천 정리 — 라호야에서 해볼 것 / 가볼 곳
export const laJollaSpots: { category: string; emoji: string; items: Spot[] }[] = [
  {
    category: '자연 · 뷰포인트 · 산책',
    emoji: '🌅',
    items: [
      {
        name: 'Torrey Pines Gliderport (글라이더포트)',
        desc: '해발 약 350피트(107m) 절벽 위. 캘리포니아 최고의 오션뷰라는 평이 많음. 행글라이더·패러글라이더 이착륙 장면을 볼 수 있고, 위에 괜찮은 델리도 있어요. 선셋 명소. 주차 무료.',
        tags: ['무료', '선셋', '오션뷰'],
        free: true,
        mapQuery: 'Torrey Pines Gliderport, La Jolla, San Diego, CA',
      },
      {
        name: 'La Jolla Cove → Marine Street Beach 해안 산책',
        desc: '라호야 코브에서 마린 스트리트 비치까지 이어지는 해안길. "캘리포니아에서 가장 아름다운 해안 산책 중 하나"라는 강력 추천이 여러 개.',
        tags: ['무료', '강추', '산책'],
        free: true,
        mapQuery: 'La Jolla Cove, San Diego, CA',
      },
      {
        name: 'Coast Walk Trail',
        desc: '환상적인 뷰에 사람은 적은 숨은 코스. Park Row 끝(주차 몇 자리 있음)에서 시작해 양방향 어느 쪽으로든 걸으면 됨.',
        tags: ['무료', '한적'],
        free: true,
        mapQuery: 'Coast Walk Trail, La Jolla, San Diego, CA',
      },
      {
        name: 'Scripps Coastal Reserve Biodiversity Trail',
        desc: '쉬운 산책에 숨막히는 뷰. 머리 위로 행글라이더가 지나가며, 가끔 손을 흔들어 주기도 해요.',
        tags: ['무료', '쉬운 코스'],
        free: true,
        mapQuery: 'Scripps Coastal Reserve, La Jolla, San Diego, CA',
      },
      {
        name: 'Torrey Pines State Natural Reserve',
        desc: '주립 자연보호구역의 네이처 트레일. 해안 절벽과 희귀한 토레이 소나무 숲.',
        tags: ['트레일'],
        mapQuery: 'Torrey Pines State Natural Reserve, San Diego, CA',
      },
      {
        name: 'Mount Soledad (마운트 솔레다드)',
        desc: '정상에서 샌디에고 거의 전체를 조망. 윈댄시 주차가 꽉 차면 여기로 올라오면 보통 자리가 있어요.',
        tags: ['무료', '파노라마 뷰'],
        free: true,
        mapQuery: 'Mount Soledad National Veterans Memorial, La Jolla, San Diego, CA',
      },
      {
        name: 'Windansea Beach (윈댄시)',
        desc: 'Nautilus St 끝에 위치. 샌드위치 사가서 서퍼들 구경하기 좋은 곳. 주차는 빡빡한 편 — 안 되면 솔레다드로.',
        tags: ['무료', '서핑', '비치'],
        free: true,
        mapQuery: 'Windansea Beach, La Jolla, San Diego, CA',
      },
      {
        name: '언덕 드라이브 & Munchkin House',
        desc: 'La Jolla Parkway 건너 언덕(Roseland Dr, Hillside Dr 등)으로 올라가면 대저택과 뷰가 펼쳐져요. 유명한 "먼치킨 하우스"도 찾아보기.',
        tags: ['드라이브'],
        mapQuery: 'Roseland Drive, La Jolla, San Diego, CA',
      },
      {
        name: 'La Jolla Shores (라호야 쇼어스)',
        desc: '라호야에서 가장 넓고 좋은 모래 해변. 빌리지에서 차로 잠깐 거리. 파도가 잔잔해 가족·물놀이에 좋고, 카약·패들보드 출발지로도 인기.',
        tags: ['무료', '비치', '강추'],
        free: true,
        mapQuery: 'La Jolla Shores Beach, San Diego, CA',
      },
    ],
  },
  {
    category: '바다 · 동물 · 동굴',
    emoji: '🌊',
    items: [
      {
        name: 'La Jolla 씨케이브 카약 투어',
        desc: '라호야의 시그니처 액티비티. 보통 동굴 근처(La Jolla Shores) 해변에서 출발하며, 바다가 다소 차고 거칠 수 있어요. 잔잔한 물을 원하면 코로나도(베이)나 미션 베이 카약이 좋은 대안.',
        tags: ['액티비티', '카약'],
        mapQuery: 'La Jolla Kayak, San Diego, CA',
      },
      {
        name: 'Sea Caves & The Cave Store',
        desc: '케이브 스토어에서 티켓을 사면 긴 계단을 따라 바다 동굴 안으로 내려갈 수 있어요. 가게 앞 뷰포인트도 좋음. 다만 관광지 성격이 강하고, 시기에 따라 동굴 내부 진입이 막혀 외부 관람만 가능할 때도 있어요.',
        tags: ['유료 입장', '동굴'],
        mapQuery: 'The Cave Store, La Jolla, San Diego, CA',
      },
      {
        name: "Children's Pool (칠드런스 풀)",
        desc: '바다사자·물범을 가까이서 볼 수 있는 인공 만(灣). 동물 보호를 위해 시즌엔 출입 제한이 있을 수 있어요.',
        tags: ['무료', '동물'],
        free: true,
        mapQuery: "Children's Pool Beach, La Jolla, San Diego, CA",
      },
    ],
  },
  {
    category: '문화 · 건축 · 쇼핑',
    emoji: '🏛',
    items: [
      {
        name: 'Birch Aquarium',
        desc: '작은 수족관으로 1시간이면 충분. 스킵해도 된다는 의견이 많고 성인 입장료 약 $30로 비싼 편. 단 2024년 5월 리노베이션 완료로 새 전시가 생겼어요.',
        tags: ['선택', '$30'],
        mapQuery: 'Birch Aquarium at Scripps, La Jolla, San Diego, CA',
      },
      {
        name: 'UCSD 캠퍼스 건축',
        desc: '역피라미드 모양의 Geisel Library, Jacobs Hall 위에 아슬아슬하게 얹힌 작은 오두막 Fallen Star가 명물. 글라이더포트에 주차하고 캠퍼스를 걸어도 돼요.',
        tags: ['무료', '건축'],
        free: true,
        mapQuery: 'Geisel Library, UC San Diego, La Jolla, CA',
      },
      {
        name: 'Salk Institute (살크 인스티튜트)',
        desc: 'Louis Kahn의 걸작 건축. 외부는 자유롭게 둘러볼 수 있고, 내부 가이드 투어는 사전 예약 필요. 글라이더포트 바로 옆.',
        tags: ['건축', '외부 무료'],
        mapQuery: 'Salk Institute for Biological Studies, La Jolla, CA',
      },
      {
        name: 'MOCA La Jolla (현대미술관)',
        desc: '바다를 마주한 현대미술관. 기프트샵이 특히 좋다는 추천.',
        tags: ['미술관'],
        mapQuery: 'Museum of Contemporary Art San Diego, La Jolla, CA',
      },
      {
        name: 'Athenaeum & JAI 콘서트',
        desc: '클래식·재즈 등 콘서트가 열리는 곳. 월요일 정오 콘서트는 무료. JAI는 서퍼클럽처럼 꾸며진 멋진 공연장.',
        tags: ['공연', '월요일 무료'],
        mapQuery: 'Athenaeum Music & Arts Library, La Jolla, San Diego, CA',
      },
      {
        name: 'Girard Avenue 쇼핑 & Warwick’s 서점',
        desc: '메인 거리 Girard Ave를 따라 상점 구경. Warwick’s는 현지인이 가장 사랑하는 서점.',
        tags: ['쇼핑'],
        mapQuery: "Warwick's, Girard Avenue, La Jolla, San Diego, CA",
      },
      {
        name: 'Sunday Farmer’s Market',
        desc: '일요일 파머스 마켓 — 들를 만한 가치가 있어요.',
        tags: ['일요일'],
        mapQuery: 'La Jolla Open Aire Market, San Diego, CA',
      },
    ],
  },
  {
    category: '먹거리 · 카페',
    emoji: '🍦',
    items: [
      {
        name: 'Bobboi Natural Gelato',
        desc: '라호야 젤라토 맛집. 댓글에서 여러 번 추천.',
        tags: ['디저트', '강추'],
        mapQuery: 'Bobboi Natural Gelato, La Jolla, San Diego, CA',
      },
      {
        name: 'The Cottage',
        desc: '브런치/아침 추천 스폿.',
        tags: ['브런치'],
        mapQuery: 'The Cottage La Jolla, San Diego, CA',
      },
      {
        name: 'Bird Rock Coffee Roasters',
        desc: '"믿기지 않게 맛있는" 커피. 자가 로스팅.',
        tags: ['커피'],
        mapQuery: 'Bird Rock Coffee Roasters, La Jolla, San Diego, CA',
      },
      {
        name: 'The Living Room Coffeehouse',
        desc: '쇼핑 중 커피 한잔하기 좋은 곳.',
        tags: ['커피'],
        mapQuery: 'The Living Room Coffeehouse, La Jolla, San Diego, CA',
      },
      {
        name: 'El Pescador Fish Market',
        desc: 'Taco Stand 건너편의 씨푸드 맛집. 줄 서는 타코 스탠드 대신 여기를 추천하는 댓글도.',
        tags: ['씨푸드'],
        mapQuery: 'El Pescador Fish Market, La Jolla, San Diego, CA',
      },
      {
        name: 'The Taco Stand',
        desc: '멕시칸 자체는 맛있지만 피크타임엔 줄이 한 블록. 갈 거면 시간대를 피하세요. (대안: Don Carlos, Rigobertos 등)',
        tags: ['멕시칸', '대기 주의'],
        mapQuery: 'The Taco Stand, La Jolla, San Diego, CA',
      },
      {
        name: 'Puesto',
        desc: '인기 있는 모던 멕시칸.',
        tags: ['멕시칸'],
        mapQuery: 'Puesto La Jolla, San Diego, CA',
      },
    ],
  },
]

export const laJollaTips: { emoji: string; text: string }[] = [
  { emoji: '🌙', text: '라호야 중심가는 해가 지면 대부분 한산해져요. 저녁/디너는 다른 동네에서 즐기는 것도 방법.' },
  { emoji: '🌊', text: '바다 동굴(Sea Caves)은 파도가 거칠 때가 있어요. 들어가기 전 근무 중인 라이프가드에게 물 상태를 꼭 확인하세요.' },
  { emoji: '🅿️', text: '윈댄시·코브 주변 주차가 꽉 차면 Mount Soledad에 올라가면 보통 자리가 있어요.' },
  { emoji: '🐠', text: 'Birch Aquarium은 작아서 1시간이면 충분 — 다른 수족관을 가봤다면 우선순위는 낮게 둬도 OK.' },
  { emoji: '🌇', text: 'Cabrillo National Monument는 오후 5시에 닫고(트레일·타이드풀은 더 일찍) 공원 안에서는 선셋을 못 봐요. 선셋은 근처 Sunset Cliffs에서.' },
  { emoji: '🦒', text: 'Safari Park는 시내에서 차로 ~50분, 하루가 꼬박 걸려요. 일정이 빠듯하면 Zoo로 충분.' },
]

// 출처: r/asksandiego "San Diego 4 day trip itinerary" 댓글 정리
// 라호야를 베이스로 다녀올 만한 샌디에고 근처 명소
export const sdNearby: { category: string; emoji: string; items: Spot[] }[] = [
  {
    category: '코로나도 (Coronado)',
    emoji: '⛴',
    items: [
      {
        name: 'Coronado Ferry & 자전거 라이딩',
        desc: '다운타운에서 페리로 5분이면 코로나도. 선착장에서 자전거를 빌려 예쁜 집과 골목을 둘러보는 걸 추천(차로 가면 주차·교통이 번거로움). 선착장에서 Hotel Del까지 2.5km라 자전거나 우버가 편해요.',
        tags: ['페리', '자전거'],
        mapQuery: 'Coronado Ferry Landing, Coronado, CA',
      },
      {
        name: 'Hotel del Coronado',
        desc: '코로나도의 상징적인 빅토리아풍 리조트. 해변 산책과 사진 명소.',
        tags: ['비치', '랜드마크'],
        mapQuery: 'Hotel del Coronado, Coronado, CA',
      },
      {
        name: '곤돌라 라이드 (The Gondola Company)',
        desc: '코로나도 케이즈 운하에서 즐기는 로맨틱한 곤돌라. 샴페인·초콜릿 추가 가능. 기념일에 인기.',
        tags: ['로맨틱', '예약'],
        mapQuery: 'The Gondola Company, Coronado, CA',
      },
    ],
  },
  {
    category: '포인트 로마 · 선셋 (Point Loma)',
    emoji: '🌇',
    items: [
      {
        name: 'Cabrillo National Monument',
        desc: '베이와 바다를 한눈에 보는 전망과 타이드풀(조수 웅덩이). 단 공원은 오후 5시 폐장(트레일·타이드풀은 더 일찍)이라 일찍 가야 해요.',
        tags: ['전망', '5시 폐장'],
        mapQuery: 'Cabrillo National Monument, San Diego, CA',
      },
      {
        name: 'Sunset Cliffs Natural Park',
        desc: '태평양으로 지는 노을 명소. Cabrillo에서 시내로 돌아오는 길에 들르기 좋아요. 이른 아침도 멋짐.',
        tags: ['무료', '선셋'],
        free: true,
        mapQuery: 'Sunset Cliffs Natural Park, San Diego, CA',
      },
      {
        name: 'Liberty Station',
        desc: '옛 해군기지를 개조한 복합문화공간(공방·식당·푸드홀). Gaslamp 대신 조용히 거닐기 좋은 대안.',
        tags: ['산책', '푸드홀'],
        mapQuery: 'Liberty Station, San Diego, CA',
      },
      {
        name: 'Fort Rosecrans National Cemetery',
        desc: '양옆으로 베이와 바다 전망이 펼쳐지는 드라이브 길. Cabrillo 가는 길에 지나가요.',
        tags: ['무료', '드라이브'],
        free: true,
        mapQuery: 'Fort Rosecrans National Cemetery, San Diego, CA',
      },
    ],
  },
  {
    category: '발보아 파크 · 다운타운',
    emoji: '🦒',
    items: [
      {
        name: 'Balboa Park & San Diego Zoo',
        desc: '박물관·정원이 모인 대형 공원 + 세계적인 동물원. 하루 코스. 주차는 발보아 파크에 두면($10) 동물원 주차보다 저렴.',
        tags: ['공원', '동물원'],
        mapQuery: 'Balboa Park, San Diego, CA',
      },
      {
        name: 'USS Midway Museum',
        desc: '항공모함 박물관. 제대로 보려면 5시간 이상 걸리기도 해요.',
        tags: ['박물관'],
        mapQuery: 'USS Midway Museum, San Diego, CA',
      },
      {
        name: 'Embarcadero & Seaport Village',
        desc: 'Rady Shell에서 베이를 따라 Star of India까지 걷는 산책로. 중간에 Seaport Village. Gaslamp보다 한적한 산책 대안.',
        tags: ['무료', '산책'],
        free: true,
        mapQuery: 'Seaport Village, San Diego, CA',
      },
      {
        name: 'Barrio Logan & Chicano Park',
        desc: '치카노 벽화로 유명한 동네. 로컬 타코(Fish Guts), 서점(Libelula), 기념품. 호불호는 갈리지만 독특한 로컬 감성과 예술이 매력.',
        tags: ['아트', '로컬'],
        mapQuery: 'Chicano Park, Barrio Logan, San Diego, CA',
      },
      {
        name: 'Old Town State Historic Park',
        desc: '옛 멕시코풍 역사지구. 평은 호불호가 있어 가볍게 점심 정도(Old Town Mexican Cafe·Cafe Coyote) 추천. 주차 무료.',
        tags: ['역사', '점심'],
        mapQuery: 'Old Town San Diego State Historic Park, San Diego, CA',
      },
    ],
  },
  {
    category: '노스 카운티 (North County)',
    emoji: '🚆',
    items: [
      {
        name: 'Oceanside (The Plot)',
        desc: '올드스쿨 감성의 비치타운. 다운타운에서 기차로 ~1시간(또는 차로 약 40마일, 교통 주의). 비건 레스토랑 The Plot이 추천.',
        tags: ['비치타운', '기차'],
        mapQuery: 'Oceanside, CA',
      },
      {
        name: 'Encinitas · Moonlight Beach',
        desc: '노스 카운티 가는 길에 들르기 좋은 해변 마을. 근처 Peace Pies(raw 비건)도 독특해요.',
        tags: ['비치'],
        mapQuery: 'Moonlight Beach, Encinitas, CA',
      },
    ],
  },
]
