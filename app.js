const questions = [
  {
    text: "병원 다녀온 뒤 영수증을 받으면 나는?",
    options: [
      {
        text: "귀찮아서 그냥 보관만 하거나 잊어버린다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "실비 청구를 위해 바로 정리하거나 앱으로 신청한다.",
        scores: { check: 2, claim: 2, control: 1 }
      }
    ]
  },
  {
    text: "매달 나가는 지출(구독료, 보험료)을 확인할 때 나는?",
    options: [
      {
        text: "대략 총액만 알고 넘어간다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "항목별 금액과 변동까지 살핀다.",
        scores: { check: 2, claim: 1, control: 2 }
      }
    ]
  },
  {
    text: "지인이 좋은 조건이라며 보험을 추천하면?",
    options: [
      {
        text: "관계가 신경 쓰여서 일단 가입을 고려한다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "보장 범위와 보험료 구조를 먼저 비교한다.",
        scores: { check: 2, claim: 0, control: 2 }
      }
    ]
  },
  {
    text: "내 보험에서 어떤 상황에 얼마가 보장되는지?",
    options: [
      {
        text: "정확히는 모른다. 필요할 때 찾아보려 한다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "주요 보장 항목과 기준을 알고 있다.",
        scores: { check: 2, claim: 1, control: 1 }
      }
    ]
  },
  {
    text: "작은 금액의 환급이나 포인트가 생기면 나는?",
    options: [
      {
        text: "금액이 작으면 그냥 지나치는 편이다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "소액이라도 챙겨서 누락을 줄인다.",
        scores: { check: 1, claim: 2, control: 1 }
      }
    ]
  },
  {
    text: "보험 점검 주기에 가장 가까운 내 스타일은?",
    options: [
      {
        text: "가입 후 거의 건드리지 않는다.",
        scores: { check: 0, claim: 0, control: 0 }
      },
      {
        text: "정기적으로 필요 보장과 불필요 지출을 확인한다.",
        scores: { check: 2, claim: 1, control: 2 }
      }
    ]
  }
];

const resultTypes = [
  {
    id: "donor",
    minTotal: 0,
    maxTotal: 8,
    title: "기부천사형",
    subtitle: "보험사에 매달 기부 중인 텅장 요정",
    feature:
      "좋은 제안에 쉽게 마음이 열려 불필요한 특약이 쌓일 가능성이 큽니다. 매달 내는 금액 대비 핵심 보장이 약해질 수 있습니다.",
    punch: "착한 성향은 장점이지만, 통장 관리는 더 냉정해야 손실을 줄일 수 있습니다.",
    solution:
      "우선순위 보장을 중심으로 보험 점검을 진행하고, 중복·과잉 항목을 정리해 지출 밀도를 낮추는 전략이 필요합니다."
  },
  {
    id: "sleepy",
    minTotal: 9,
    maxTotal: 14,
    title: "소생불가형",
    subtitle: "잠자는 돈을 깨우지 않는 귀차니즘 만렙",
    feature:
      "청구 가능한 항목을 놓치거나 소액이라 미루는 습관이 보입니다. 작은 누락이 누적되면 생각보다 큰 차이를 만듭니다.",
    punch: "지금의 귀찮음은 미래의 손실로 돌아올 수 있습니다.",
    solution:
      "미청구 가능 항목부터 빠르게 확인하고, 청구 루틴을 단순화해 자동으로 챙길 수 있는 구조를 만드는 것이 우선입니다."
  },
  {
    id: "balancer",
    minTotal: 15,
    maxTotal: 20,
    title: "균형관리형",
    subtitle: "지출과 보장을 함께 보는 현실 점검가",
    feature:
      "기본적인 관리 습관이 좋아 큰 누락 위험은 낮은 편입니다. 다만 환경 변화에 따라 기존 구성이 비효율적일 가능성은 존재합니다.",
    punch: "지금도 좋지만, 한 번의 점검으로 더 가벼운 구조를 만들 수 있습니다.",
    solution:
      "현재 보장과 납입 구조를 주기적으로 보험 점검하여 필요 없는 비용을 덜고, 핵심 보장을 선명하게 유지하는 전략이 적합합니다."
  },
  {
    id: "strategist",
    minTotal: 21,
    maxTotal: 27,
    title: "전략분석형",
    subtitle: "지출 효율과 보장 가성비를 챙기는 설계형",
    feature:
      "보장 구조와 청구 흐름을 꾸준히 확인하는 상위 관리 성향입니다. 정보력과 실행력이 높아 손실 방어력이 뛰어납니다.",
    punch: "이미 잘하고 있습니다. 이제는 세부 최적화로 효율을 끌어올릴 차례입니다.",
    solution:
      "최근 상품 구조 변화까지 반영해 보험 점검을 진행하면, 유지할 항목과 교체할 항목을 명확히 구분해 더 탄탄한 포트폴리오를 만들 수 있습니다."
  }
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  lastResultId: null
};

const landing = document.getElementById("landing");
const quiz = document.getElementById("quiz");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");
const restartBtn = document.getElementById("restartBtn");

const qCounter = document.getElementById("qCounter");
const questionText = document.getElementById("questionText");
const answersWrap = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");

const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const resultFeature = document.getElementById("resultFeature");
const resultPunch = document.getElementById("resultPunch");
const resultSolution = document.getElementById("resultSolution");

function getShareUrl(resultId) {
  const baseUrl = window.location.origin === "null"
    ? window.location.href.split("?")[0]
    : window.location.origin + window.location.pathname;
  return baseUrl + "?share=1&type=" + encodeURIComponent(resultId);
}

function findResultById(resultId) {
  return resultTypes.find(function (type) {
    return type.id === resultId;
  });
}

function initKakaoSdk() {
  if (!window.Kakao) return;
  if (!window.KAKAO_JS_KEY) return;

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(window.KAKAO_JS_KEY);
  }
}

function openSharedResultIfExists() {
  const params = new URLSearchParams(window.location.search);
  const shared = params.get("share");
  const typeId = params.get("type");

  if (shared !== "1" || !typeId) return;

  const type = findResultById(typeId);
  if (!type) return;

  renderResult(type);
  restartBtn.textContent = "나도 테스트하기";
  showPanel("result");
}

function showPanel(name) {
  [landing, quiz, loading, result].forEach(function (panel) {
    panel.classList.remove("panel-active");
  });

  if (name === "landing") landing.classList.add("panel-active");
  if (name === "quiz") quiz.classList.add("panel-active");
  if (name === "loading") loading.classList.add("panel-active");
  if (name === "result") result.classList.add("panel-active");
}

function renderQuestion() {
  const q = questions[state.current];
  const selected = state.answers[state.current];

  qCounter.textContent = "Q" + String(state.current + 1) + " / " + String(questions.length);
  questionText.textContent = q.text;

  const progressPercent = Math.round((state.current / questions.length) * 100);
  progressBar.style.width = String(progressPercent) + "%";
  progressBar.parentElement.setAttribute("aria-valuenow", String(progressPercent));

  answersWrap.innerHTML = "";

  q.options.forEach(function (option, idx) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn" + (selected === idx ? " selected" : "");
    button.textContent = option.text;
    button.setAttribute("role", "listitem");

    button.addEventListener("click", function () {
      state.answers[state.current] = idx;
      renderQuestion();
    });

    answersWrap.appendChild(button);
  });

  prevBtn.disabled = state.current === 0;
  nextBtn.disabled = selected === null;
  nextBtn.textContent = state.current === questions.length - 1 ? "결과 보기" : "다음";
}

function calculateResult() {
  const totals = state.answers.reduce(
    function (acc, answerIdx, qIdx) {
      const chosen = questions[qIdx].options[answerIdx];
      acc.check += chosen.scores.check;
      acc.claim += chosen.scores.claim;
      acc.control += chosen.scores.control;
      return acc;
    },
    { check: 0, claim: 0, control: 0 }
  );

  const sum = totals.check + totals.claim + totals.control;

  const found = resultTypes.find(function (type) {
    return sum >= type.minTotal && sum <= type.maxTotal;
  });

  return found || resultTypes[0];
}

function renderResult(type) {
  state.lastResultId = type.id;
  resultTitle.textContent = type.title;
  resultSubtitle.textContent = type.subtitle;
  resultFeature.textContent = type.feature;
  resultPunch.textContent = type.punch;
  resultSolution.textContent = type.solution;
}

function resetQuiz() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  state.lastResultId = null;
  restartBtn.textContent = "다시 테스트하기";
  renderQuestion();
  showPanel("landing");
}

startBtn.addEventListener("click", function () {
  state.current = 0;
  renderQuestion();
  showPanel("quiz");
});

prevBtn.addEventListener("click", function () {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", function () {
  if (state.answers[state.current] === null) return;

  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }

  showPanel("loading");

  window.setTimeout(function () {
    const resultType = calculateResult();
    renderResult(resultType);
    showPanel("result");
  }, 1650);
});

shareBtn.addEventListener("click", async function () {
  if (!state.lastResultId) {
    shareBtn.textContent = "먼저 결과를 확인해주세요";
    window.setTimeout(function () {
      shareBtn.textContent = "결과 공유하기";
    }, 1400);
    return;
  }

  const resultType = findResultById(state.lastResultId);
  const shareUrl = getShareUrl(state.lastResultId);
  const text =
    "내 결과: " +
    resultType.title +
    " - " +
    resultType.subtitle +
    "\n나도 해보기: " +
    shareUrl;

  try {
    initKakaoSdk();

    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "내 돈 관리 유형 & 보험 성향 테스트",
          description: "내 결과는 '" + resultType.title + "'. 친구도 1분 테스트 해보기",
          imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl
          }
        },
        buttons: [
          {
            title: "결과 보고 테스트 참여하기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl
            }
          }
        ]
      });

      shareBtn.textContent = "카카오톡 공유창이 열렸어요";
      window.setTimeout(function () {
        shareBtn.textContent = "결과 공유하기";
      }, 1800);
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: "내 돈 관리 유형 & 보험 성향 테스트",
        text: text,
        url: shareUrl
      });

      shareBtn.textContent = "공유가 완료되었어요";
      window.setTimeout(function () {
        shareBtn.textContent = "결과 공유하기";
      }, 1800);
      return;
    }

    await navigator.clipboard.writeText(text);
    shareBtn.textContent = "링크 복사 완료! 카톡에 붙여넣어 공유하세요";
    window.setTimeout(function () {
      shareBtn.textContent = "결과 공유하기";
    }, 1800);
  } catch (error) {
    shareBtn.textContent = "공유에 실패했어요. 다시 시도해주세요";
  }
});

restartBtn.addEventListener("click", function () {
  resetQuiz();
});

showPanel("landing");
openSharedResultIfExists();
