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
  },
}

export const carRental = {
  vehicle: 'Tesla Model Y 2026 (FSD)',
  company: 'LAX Budget',
  pickupLocation: 'LAX Budget Parking',
  pickupMapQuery: 'LAX Budget Parking, Los Angeles, CA',
  pickupInstructions: [
    'Arrival level에서 내리기',
    'Pink shuttle zones로 이동',
    'LAX Budget Parking Shuttle 탑승',
  ],
  pickupDate: '7/24 (금)',
  returnDate: '8/7 (금)',
  returnNote: '아침 공항 가는 길에 LAX Budget Parking 반납',
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
    mapQuery: 'Twentynine Palms, CA',
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
    mapQuery: '919 Tourmaline St, San Diego, CA 92109',
    bookingUrl: 'https://www.airbnb.com',
    highlight: true,
    note: '여기가 메인. 느긋하게 쉬는 곳.',
  },
  {
    id: 'disney-hotel',
    emoji: '🏰',
    name: '디즈니 호텔',
    subtitle: 'Howard Johnson by Wyndham Anaheim · 1380 S Harbor Blvd',
    checkIn: '8/3 (월)',
    checkOut: '8/6 (목) 오전',
    nights: 3,
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
  { date: '7/24', dayLabel: '(금) 도착', sleeping: '조슈아 트리', memo: '인천 12:40 출발 → LA 08:20 도착 · LAX Budget Parking에서 테슬라 픽업 → 조슈아 트리 체크인', isMovingDay: true },
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
  { date: '8/7', dayLabel: '(금) 출발', sleeping: '비행기 (집으로!)', memo: '공항 호텔 체크아웃 · 렌터카 반납 (LAX Budget Parking) → LA 10:40 출발 → 인천 익일(8/8) 15:20 도착 (OZ201)', isMovingDay: true },
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
