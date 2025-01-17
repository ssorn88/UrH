// 허슬러 : 0
// 힙스터 : 1
// 해커: 2

// 3가지 결과

const qnaList = [
    {
        q: "앱이나 게임 같은 새로운 서비스를 만들 때 가장 고려할 것은 무엇인가요?",
        a: [
            {
                answer: "직관적이고 예쁜 디자인인가?",
                type: [1],
            },
            {
                answer: "돈을 벌 수 있는 서비스인가?",
                type: [0],
            },
            {
                answer: "버그가 없고 업데이트 하기에 쉬운가?",
                type: [2],
            },
            {
                answer: "사람들이 좋아하는 서비스일까?",
                type: [0],
            },
        ],
    },
    {
        q: "당신을 가장 잘 묘사하는 말은 무엇인가요?",
        a: [
            {
                answer: "외향적인",
                type: [0],
            },
            {
                answer: "열정적인",
                type: [0,1],
            },
            {
                answer: "창의적이고 예술적인",
                type: [1],
            },
            {
                answer: "분석적인",
                type: [2],
            },
        ],
    },
    {
        q: "당신은 할 일을 얼마나 자주 미루나요?",
        a: [
            {
                answer: "매번 미룬다",
                type: [1],
            },
            {
                answer: "자주 미룬다",
                type: [1,2],
            },
            {
                answer: "가끔 미룬다",
                type: [0,2],
            },
            {
                answer: "전혀 미루지않는다",
                type: [0],
            },
        ],
    },
    {        
        q: "당신은 보통 잠을 얼마나 자나요?",
        a: [
            {
                answer: "잠이 오는한 계속 잔다. 24시간중 48시간?",
                type: [1],
            },
            {
                answer: "많이 자지는 않는다. 24시간중 10시간",
                type: [1],
            },
            {
                answer: "인간의 적정 수면시간을 지킨다. 24시간중 7시간",
                type: [2],
            },
            {
                answer: "아주 조금 잔다. 24시간 중 5시간 이하",
                type: [0],
            },
        ],
    },
    {
        q: "가장 좋아하는 과목은?",
        a: [
            {
                answer: "마케팅",
                type: [0],
            },
            {
                answer: "공학",
                type: [1,2],
            },
            {
                answer: "디자인",
                type: [1],
            },
            {
                answer: "수학, 경제학",
                type: [0,2],
            },
        ],
    },
    {
        q: "오랫동안 줄을 서서 기다릴 때 나는?",
        a: [
            {
                answer: "내 다음사람과 이야기 한다!",
                type: [0],
            },
            {
                answer: "카톡을 하거나 SNS를 한다!",
                type: [0,1,2],
            },
            {
                answer: "핸드폰 게임을 한다!",
                type: [2],
            },
            {
                answer: "계좌 잔액을 확인하고 밀린 일들을 처리한다!",
                type: [0,2],
            },
        ],
    },
    {
        q: "다음주에 전시회를 가기로 했다! 나라면…?",
        a: [
            {
                answer: "모든 계획을 준비한다!",
                type: [0],
            },
            {
                answer: "인스타 스토리에 올릴 사진을 생각한다!",
                type: [1],
            },
            {
                answer: "전시회에 가져갈 모든 준비물을 챙긴다!",
                type: [0,2],
            },
            {
                answer: "전시회 비용 등 돈관리를 담당한다!",
                type: [0,2],
            },
        ],
    },
    {
        q: "내 책상 상태는?",
        a: [
            {
                answer: "먼지 한톨 없다!",
                type: [0],
            },
            {
                answer: "모든 물건은 책상 위에 있다..",
                type: [1],
            },
            {
                answer: "책상엔 트북만 있으면 되지!",
                type: [2],
            },
            {
                answer: "내가 필요하고 좋아하는 물건만 올려둔다!",
                type: [0],
            },
        ],
    },
    {
        q: "어렸을때 뭘 하고 싶어했지…?",
        a: [
            {
                answer: "나는야 정치인이 될거야",
                type: [0],
            },
            {
                answer: "나는 연예인이 될래",
                type: [1],
            },
            {
                answer: "나는 우주비행사 될 것이다!",
                type: [1,2],
            },
            {
                answer: "백만.. 아니 억만장자가 될래",
                type: [0],
            },
        ],
    },
    {
        q: "해커톤에서 팀을 하고 싶은 사람을 만났다. 나의 행동은?",
        a: [
            {
                answer: "조용히 맴돌며 기회를 기다린다.",
                type: [2],
            },
            {
                answer: "일단 애인이 있는지 물어보고 적극적으로 다가간다.",
                type: [0],
            },
            {
                answer: "상대의 취향을 파악하고 나의 예술적인 감각을 보여준다.",
                type: [1],
            },
        ],
    },
    {
        q: "교수님이 과제를 주셨다..당신의 첫 번째 액션은?",
        a: [
            {
                answer: "관련 자료부터 수집한다.",
                type: [0],
            },
            {
                answer: "과제를 시작하는 순간부터 뿌듯함을 가진다.",
                type: [1],
            },
            {
                answer: "과제 예상 소요 시간을 계산한다.",
                type: [2],
            },
            {
                answer: "미루다가 마감 전 날에 시작한다.",
                type: [1,2],
            },
        ],
    },
    {
        q: "학과에서 MT를 갔다. 개인 자유 시간에 당신의 모습은?",
        a: [
            {
                answer: "MT 이후에 찾아갈 지역 맛집 리스트를 정리한다.",
                type: [0],
            },
            {
                answer: "무작정 돌아다니며 구경한다.",
                type: [1],
            },
            {
                answer: "방 안에서 넷플릭스를 시청한다.",
                type: [2],
            },
            {
                answer: "짐을 정리한다.",
                type: [0,2],
            },
        ],
    },
    {
        q: "옷장에 주로 어떤 옷들이 많은가요?",
        a: [
            {
                answer: "유행의 선두주자, 오색찬란한 옷",
                type: [1],
            },
            {
                answer: "심플하지만, 깔끔한 옷",
                type: [0],
            },
            {
                answer: "단색, 목폴라. 단색, 반팔. 단색, 맨투맨. “단색” 강조",
                type: [2],
            },
            {
                answer: "그냥 옷이 없다",
                type: [2],
            },
        ],
    },
    {
        q: "오랜만에 만끽하는 휴일 아침! 당신은 무엇을 하고 있나요?",
        a: [
            {
                answer: "오늘 할 일을 계획하고 있다.",
                type: [0,2],
            },
            {
                answer: "편한 차림으로 소파에서 TV 프로그램을 시청한다. ",
                type: [1],
            },
            {
                answer: "친구들을 만난다.",
                type: [0],
            },
            {
                answer: "아무 생각이 없다..",
                type: [1],
            },
        ],
    },
    {
        q: "당신의 꿈꾸는 세상에서 필수적인 것은?",
        a: [
            {
                answer: "아름다운 여행지와 경관",
                type: [1],
            },
            {
                answer: "좋아하는 사람들",
                type: [0],
            },
            {
                answer: "편안한 나만의 공간",
                type: [0,1,2],
            },
        ],
    },
    {
        q: "친구가 약속에 모르는 사람을 데려온다면?",
        a: [
            {
                answer: "놀라긴 하지만 금방 친해지기",
                type: [0,1],
            },
            {
                answer: "아 … 언제 가지 …?",
                type: [2],
            },
            {
                answer: "저 사람은 어떤 사람일까? 속으로 생각하기",
                type: [1,2],
            },
        ],
    },
    {
        q: "수업을 듣다가 첫눈에 반한 당신, 고백 할 수 있나요?",
        a: [
            {
                answer: "당장 번호부터 딴다!",
                type: [0,1],
            },
            {
                answer: "주변 지인한테 누군인지 물어본다",
                type: [0,1,2],
            },
            {
                answer: "근처에 앉아서 서서히 다가간다",
                type: [2],
            },
            {
                answer: "그저 바라만 본다 ..",
                type: [1,2],
            },
        ],
    },
    {
        q: "아무리봐도 각이 안보이는 짝사랑 중인 친구의 얘기를 들을때 당신의 반응은?",
        a: [
            {
                answer: "일단 최상의 시나리오를 짜준다.",
                type: [2],
            },
            {
                answer: "정신차리라고 설득한다.",
                type: [0],
            },
            {
                answer: "너 좋을대로 하라고 한다",
                type: [1],
            },
        ],
    },
    {
        q: "일생의 맛집에 온 당신, 대기줄이 많아 음식을 먹으면 비행기를 타지 못한다. 당신의 선택은?",
        a: [
            {
                answer: "비행기를 포기하고 맛있는 음식을 먹는다!",
                type: [1],
            },
            {
                answer: "포기하고 그냥 비행기를 타러 간다.",
                type: [2],
            },
            {
                answer: "다음 비행기 비용을 지불하고 음식을 먹는다!",
                type: [0],
            },
        ],
    },
    {
        q: "당신의 집에서 바퀴벌레가 나왔다. 당신의 행동은?",
        a: [
            {
                answer: "미리 준비된 벌레 잡기채와 에프킬라를 가지고 바퀴벌레를 처리한다.",
                type: [2],
            },
            {
                answer: "당근마켓에 올려 잡아줄 사람을 구한다.",
                type: [0],
            },
            {
                answer: "자연의 일부라고 생각하며 공존한다.",
                type: [1],
            },
        ],
    },
];

const infoList = [
    {
        nameIntro: "강한 의지로 법칙을 구부리고 깨트리며 결국 변화를 만들어내는 당신 이 시대의 진정한 허슬러!",
        name: "Hustler",
        descTitle1:
            "Hustler는 수단과 방법을 가리지 않고 목표한 것을 성취해내는 사람이에요.",
        desc1: "초기 스타트업에서 MVP를 가지고 회사의 꿈과 비전을 말하며 VC 및 고객들을 설득시키는 사람이랍니다.",
        descTitle2: "분명한 목표의식을 가지고 신선한 혁신을 만들어내요.",
        desc2: "열정이 넘치며 인간관계를 잘 구축하고 거절이나 반대에 멋지게 직면해요. 멋진 센스와 추진력으로 한다고 한 일은 성공적으로 만들어낸답니다. 대표적으로 애플의 CEO인 스티브잡스가 있어요.",
    },
    {   
        nameIntro: "유행에 민감하고 예술적인 감각이 뛰어난 당신 이 시대의 진정한 힙스터!",
        name: "Hipster",
        descTitle1: "Hipster는 디자인과 서비스를 예쁘게 만들어주는 사람이에요.",
        desc1: "원래 Hipster는 문화적 코드를 공유하는 젊은이라는 의미도 있지만, 스타트업에서는 최신 트렌드를 잘 이해하는 디자이너의 의미가 커요.",
        descTitle2:
            "단순히 디자인에 유행을 적용하는게 아니라, 사용자들이 반복적으로 쉽게 사용할 수 있도록 제품이나 서비스를 설계하는 사람이에요.",
        desc2: "대표적으로 애플의 디자인을 이끌었던 Jony Ive가 있어요.",
    },
    {
        nameIntro: "노트북 앞에서 아무말없이 밤새 개발에 몰두하는 당신 이 시대의 진정한 해커!",
        name: "Hacker",
        descTitle1: "Hacker는 해결해야하는 범위를 알고 일처리를 빠르게 구현해내는 사람이에요.",
        desc1: "바로 스타트업에서 개발자의 역할이죠! 논리력과 빠른 문제 해결 능력을 가지고 서비스를 구축해낼 뿐 아니라 하나에 빠지면 끝없이 몰두해서 결과를 만들어낸답니다.",
        descTitle2:
            "비즈니스를 위한 새로운 기술을 받아들이는 것에 능숙하고 프로토타입을 제작해요.",
        desc2: "누구보다 멋진 실행력을 가졌답니다. 대표적으로 마이크로소프트의 공동 설립자이자 미국 비즈니스 거물인 빌게이츠가 있어요.",
    },
];

const abouht3H = [
    {
        Hustler : ` Hustler는 수단과 방법을 가리지 않고 목표한 것을 성취해내는 사람이에요. 초기 스타트업에서 MVP를 가지고 회사의 꿈과 비전을 말하며 VC 및 고객들을 설득시키는 사람이랍니다.
        분명한 목표의식을 가지고 신선한 혁신을 만들어내요. 열정이 넘치며 인간관계를 잘 구축하고 거절이나 반대에 멋지게 직면해요. 멋진 센스와 추진력으로 한다고 한 일은 성공적으로 만들어낸답니다.
        대표적으로 애플의 CEO인 스티브잡스가 있어요.
        강한 의지로 법칙을 구부리고 깨트리며 결국 변화를 만들어내는 당신 이 시대의 진정한 허슬러!`,
    },
    {
        Hipster: `Hipster는 디자인과 서비스를 예쁘게 만들어주는 사람이에요. 원래 Hipster는 문화적 코드를 공유하는 젊은이라는 의미도 있지만, 스타트업에서는 최신 트렌드를 잘 이해하는
     디자이너의 의미가 커요. 단순히 디자인에 유행을 적용하는게 아니라, 사용자들이 반복적, 쉽게 사용할 수 있도록 제품이나 서비스를 설계하는 사람이에요.
     대표적으로 애플의 디자인을 이끌었던 Jony Ive가 있어요.
     유행에 민감하고 예술적인 감각이 뛰어난 당신 이 시대의 진정한 힙스터!`   
    },
    {
        Hacker:`Hacker는 범위를 알고 일처리를 빠르게 구현해내는 사람이에요. 바로 스타트업에서 개발자의 역할이죠! 논리력과 빠른 문제 해결 능력을 가지고 서비스를 구축해냅니다.
        하나에 빠지면 끝없이 몰두해서 결과를 만들어낸답니다. 비즈니스를 위한 새로운 기술을 받아들이는 것에 능숙하고 프로토타입을 제작해요. 누구보다 멋진 실행력을 가졌답니다.
        대표적으로 마이크로소프트의 공동 설립자이자 미국 비즈니스 거물인 빌게이츠가 있어요.
        노트북 앞에서 아무말없이 밤새 개발에 몰두하는 당신 이 시대의 진정한 해커!`,  
    }
]
