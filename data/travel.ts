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
