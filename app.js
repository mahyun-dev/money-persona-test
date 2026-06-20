const questions = [
  {
    text: "병원 진료 영수증을 받으면 보통 어떻게 하시나요?",
    options: [
      {
        text: "어딘가에 넣어두고 나중에 본다.",
        scores: { audit: 0, claim: 0, optimize: 1, discipline: 0 }
      },
      {
        text: "바로 사진 찍어 저장하고 청구 여부를 확인한다.",
        scores: { audit: 2, claim: 3, optimize: 1, discipline: 2 }
      },
      {
        text: "큰 금액만 골라서 챙긴다.",
        scores: { audit: 1, claim: 1, optimize: 2, discipline: 1 }
      }
    ]
  },
  {
    text: "매달 자동이체 내역을 보는 방식에 가장 가까운 것은?",
    options: [
      {
        text: "총합만 보고 크게 문제 없으면 넘어간다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 1 }
      },
      {
        text: "보험료와 구독료를 항목별로 비교해 본다.",
        scores: { audit: 2, claim: 1, optimize: 3, discipline: 2 }
      },
      {
        text: "가끔 생각날 때만 확인한다.",
        scores: { audit: 1, claim: 0, optimize: 1, discipline: 0 }
      }
    ]
  },
  {
    text: "지인이 좋은 보험을 추천했을 때 내 반응은?",
    options: [
      {
        text: "관계가 중요해서 일단 긍정적으로 듣는다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 1 }
      },
      {
        text: "보장 항목과 납입 구조를 먼저 비교한다.",
        scores: { audit: 3, claim: 0, optimize: 3, discipline: 2 }
      },
      {
        text: "필요해 보이면 바로 가입한다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 0 }
      }
    ]
  },
  {
    text: "내 보험의 보장 범위를 설명해달라고 하면?",
    options: [
      {
        text: "핵심 보장은 대략 알고 있다.",
        scores: { audit: 1, claim: 1, optimize: 1, discipline: 1 }
      },
      {
        text: "주요 항목과 제외 조건까지 설명할 수 있다.",
        scores: { audit: 3, claim: 1, optimize: 2, discipline: 2 }
      },
      {
        text: "정확히는 모른다. 필요할 때 찾아본다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 0 }
      }
    ]
  },
  {
    text: "작은 환급금이나 미청구 가능 항목이 보이면?",
    options: [
      {
        text: "금액이 작으면 잘 안 챙긴다.",
        scores: { audit: 0, claim: 0, optimize: 1, discipline: 0 }
      },
      {
        text: "소액도 바로 처리해 누락을 줄인다.",
        scores: { audit: 1, claim: 3, optimize: 2, discipline: 2 }
      },
      {
        text: "주말에 몰아서 한 번에 처리한다.",
        scores: { audit: 1, claim: 2, optimize: 1, discipline: 1 }
      }
    ]
  },
  {
    text: "보험 점검 주기는 어느 쪽에 가까운가요?",
    options: [
      {
        text: "거의 하지 않는다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 0 }
      },
      {
        text: "반기에 한 번은 꼭 점검한다.",
        scores: { audit: 2, claim: 1, optimize: 2, discipline: 3 }
      },
      {
        text: "상황이 바뀔 때만 확인한다.",
        scores: { audit: 1, claim: 0, optimize: 1, discipline: 1 }
      }
    ]
  },
  {
    text: "갱신 안내를 받았을 때 어떤 행동을 하나요?",
    options: [
      {
        text: "특별한 문제 없으면 그대로 둔다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 1 }
      },
      {
        text: "변경 전후를 비교해 꼭 필요한 항목만 유지한다.",
        scores: { audit: 3, claim: 1, optimize: 3, discipline: 2 }
      },
      {
        text: "설계사 설명을 듣고 결정한다.",
        scores: { audit: 1, claim: 0, optimize: 1, discipline: 1 }
      }
    ]
  },
  {
    text: "가족 건강 이력과 병원 방문 기록 관리 방식은?",
    options: [
      {
        text: "기억에 의존한다.",
        scores: { audit: 0, claim: 0, optimize: 0, discipline: 0 }
      },
      {
        text: "앱/메모로 기록해 필요 시 바로 확인한다.",
        scores: { audit: 2, claim: 2, optimize: 1, discipline: 3 }
      },
      {
        text: "중요한 것만 수기로 적어둔다.",
        scores: { audit: 1, claim: 1, optimize: 0, discipline: 1 }
      }
    ]
  }
];

const resultTypes = [
  {
    id: "blindspot",
    minTotal: 0,
    maxTotal: 16,
    badge: "주의 단계",
    title: "블라인드스팟형",
    subtitle: "관리 공백으로 손실이 누적될 수 있는 단계",
    feature:
      "보험과 청구를 미루는 구간이 많아 누락 가능성이 큽니다. 작은 금액도 쌓이면 생각보다 큰 차이를 만들 수 있습니다.",
    punch: "지금 필요한 건 어려운 전략이 아니라, 빠른 기본 점검입니다.",
    solution:
      "먼저 현재 계약과 최근 병원비 이력을 기준으로 보험 점검을 진행하고, 미청구 가능 항목을 우선 정리하는 것이 좋습니다.",
    checklist: [
      "최근 1년 진료비 내역부터 미청구 여부 확인하기",
      "중복 보장 여부 3개 항목만 우선 체크하기",
      "월 납입 총액 상한선을 정하고 넘어가면 점검하기"
    ],
    sampleTotals: { audit: 4, claim: 4, optimize: 4, discipline: 3 }
  },
  {
    id: "drift",
    minTotal: 17,
    maxTotal: 24,
    badge: "개선 단계",
    title: "관성유지형",
    subtitle: "기존 구조를 유지하지만 최적화가 필요한 단계",
    feature:
      "기초 관리는 하고 있으나 주기와 기준이 일정하지 않아 손실 방어력이 들쭉날쭉합니다.",
    punch: "관리 습관은 이미 있습니다. 기준만 세우면 성과가 올라갑니다.",
    solution:
      "정기 점검 주기를 고정하고, 납입 대비 실사용 보장 비율을 확인하는 보험 점검 루틴이 필요합니다.",
    checklist: [
      "반기 점검일 캘린더에 고정 등록하기",
      "활용 빈도 낮은 특약 2개 후보 추리기",
      "환급/청구는 소액도 주 1회 처리하기"
    ],
    sampleTotals: { audit: 6, claim: 5, optimize: 6, discipline: 5 }
  },
  {
    id: "steady",
    minTotal: 25,
    maxTotal: 32,
    badge: "안정 단계",
    title: "안정관리형",
    subtitle: "기본 체계가 잡혀 있는 실속 중심형",
    feature:
      "핵심 보장과 지출을 함께 보려는 성향이 안정적으로 보입니다. 큰 누락 위험은 낮은 편입니다.",
    punch: "좋은 관리 흐름입니다. 지금은 미세 조정으로 효율을 더 높일 시점입니다.",
    solution:
      "현재 구조를 유지하되, 신규 상품 변화와 갱신 조건을 비교해 비용 효율을 높이는 보험 점검이 유효합니다.",
    checklist: [
      "최근 갱신 내역에서 인상폭 큰 항목 우선 점검",
      "가족 상황 변화 반영 여부 확인하기",
      "청구 자동화 가능한 앱/알림 설정하기"
    ],
    sampleTotals: { audit: 8, claim: 7, optimize: 9, discipline: 7 }
  },
  {
    id: "balancer",
    minTotal: 33,
    maxTotal: 40,
    badge: "상위 단계",
    title: "균형전략형",
    subtitle: "보장과 납입의 균형을 챙기는 실전형",
    feature:
      "보장 범위, 납입 구조, 청구 습관의 균형이 좋습니다. 실수 가능성을 체계적으로 줄이는 스타일입니다.",
    punch: "이미 탄탄합니다. 핵심은 유지보다 선별 최적화입니다.",
    solution:
      "실사용 기준으로 유지/축소/교체 항목을 나누는 보험 점검을 하면 납입 효율을 한 단계 더 끌어올릴 수 있습니다.",
    checklist: [
      "핵심 보장 3개는 유지, 중복 보장은 비교표 작성",
      "납입 대비 체감 보장 약한 항목 교체 검토",
      "청구 이력 월별 정리로 누락 0건 목표 세우기"
    ],
    sampleTotals: { audit: 11, claim: 9, optimize: 10, discipline: 9 }
  },
  {
    id: "optimizer",
    minTotal: 41,
    maxTotal: 48,
    badge: "우수 단계",
    title: "효율최적화형",
    subtitle: "비용 밀도와 보장 성능을 함께 챙기는 상위형",
    feature:
      "관리 정확도와 실행력이 높고, 구조 개선 포인트를 빠르게 발견합니다. 낭비 방어력이 뛰어난 편입니다.",
    punch: "상위권 관리 역량입니다. 이제는 정밀 튜닝 구간입니다.",
    solution:
      "세부 조건까지 비교하는 보험 점검으로 유지 가치가 낮은 항목을 줄이고 핵심 보장 밀도를 높이세요.",
    checklist: [
      "보장 항목별 ROI(체감가치) 점수화해 보기",
      "갱신형/비갱신형 구조 균형 재점검",
      "분기 1회 점검 리포트 템플릿 만들기"
    ],
    sampleTotals: { audit: 12, claim: 11, optimize: 12, discipline: 10 }
  },
  {
    id: "architect",
    minTotal: 49,
    maxTotal: 65,
    badge: "마스터 단계",
    title: "설계마스터형",
    subtitle: "데이터 기반으로 관리하는 고도화 설계형",
    feature:
      "정보 정리, 청구 실행, 비용 최적화, 주기 관리가 모두 높은 수준입니다. 구조적 손실을 최소화하는 타입입니다.",
    punch: "이미 전문가 수준의 관리 성향입니다. 디테일 완성도만 더하면 됩니다.",
    solution:
      "최신 조건 변화와 생활 패턴 변화를 함께 반영한 보험 점검으로 장기 안정성과 효율을 동시에 확보할 수 있습니다.",
    checklist: [
      "연 1회 종합 점검 + 반기 미니 점검 체계 유지",
      "가족 단위 보장 중복 여부까지 통합 확인",
      "미청구 가능 구간 자동 알림 규칙 고도화"
    ],
    sampleTotals: { audit: 14, claim: 13, optimize: 13, discipline: 12 }
  }
];

const loadingMentions = [
  "당신의 금융 소비 패턴과 보험 내역 성향을 점검하고 있습니다...",
  "누락 가능 항목과 지출 효율 지표를 분석 중입니다...",
  "유형별 맞춤 보험 점검 포인트를 정리하고 있습니다..."
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  lastResultId: null,
  lastProfile: null,
  loadingTimer: null
};

const landing = document.getElementById("landing");
const quiz = document.getElementById("quiz");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const shareUrlText = document.getElementById("shareUrlText");
const modalCopyBtn = document.getElementById("modalCopyBtn");
const modalNativeShareBtn = document.getElementById("modalNativeShareBtn");
const shareModalClose = document.getElementById("shareModalClose");
const restartBtn = document.getElementById("restartBtn");

const qCounter = document.getElementById("qCounter");
const questionText = document.getElementById("questionText");
const answersWrap = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

const resultBadge = document.getElementById("resultBadge");
const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const resultFeature = document.getElementById("resultFeature");
const resultPunch = document.getElementById("resultPunch");
const resultSolution = document.getElementById("resultSolution");
const resultConfidence = document.getElementById("resultConfidence");
const resultChecklist = document.getElementById("resultChecklist");

const metricAudit = document.getElementById("metricAudit");
const metricClaim = document.getElementById("metricClaim");
const metricOptimize = document.getElementById("metricOptimize");
const metricDiscipline = document.getElementById("metricDiscipline");
const metricAuditBar = document.getElementById("metricAuditBar");
const metricClaimBar = document.getElementById("metricClaimBar");
const metricOptimizeBar = document.getElementById("metricOptimizeBar");
const metricDisciplineBar = document.getElementById("metricDisciplineBar");

function calculateDimensionMax() {
  const max = { audit: 0, claim: 0, optimize: 0, discipline: 0 };
  questions.forEach(function (question) {
    const best = { audit: 0, claim: 0, optimize: 0, discipline: 0 };
    question.options.forEach(function (option) {
      best.audit = Math.max(best.audit, option.scores.audit);
      best.claim = Math.max(best.claim, option.scores.claim);
      best.optimize = Math.max(best.optimize, option.scores.optimize);
      best.discipline = Math.max(best.discipline, option.scores.discipline);
    });
    max.audit += best.audit;
    max.claim += best.claim;
    max.optimize += best.optimize;
    max.discipline += best.discipline;
  });
  return max;
}

const DIMENSION_MAX = calculateDimensionMax();
const TOTAL_MAX = DIMENSION_MAX.audit + DIMENSION_MAX.claim + DIMENSION_MAX.optimize + DIMENSION_MAX.discipline;

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

function showPanel(name) {
  [landing, quiz, loading, result].forEach(function (panel) {
    panel.classList.remove("panel-active");
  });

  if (name === "landing") landing.classList.add("panel-active");
  if (name === "quiz") quiz.classList.add("panel-active");
  if (name === "loading") loading.classList.add("panel-active");
  if (name === "result") result.classList.add("panel-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
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

function calculateProfileFromAnswers() {
  const totals = state.answers.reduce(
    function (acc, answerIdx, qIdx) {
      const chosen = questions[qIdx].options[answerIdx];
      acc.audit += chosen.scores.audit;
      acc.claim += chosen.scores.claim;
      acc.optimize += chosen.scores.optimize;
      acc.discipline += chosen.scores.discipline;
      return acc;
    },
    { audit: 0, claim: 0, optimize: 0, discipline: 0 }
  );

  const sum = totals.audit + totals.claim + totals.optimize + totals.discipline;
  const resultType = resultTypes.find(function (type) {
    return sum >= type.minTotal && sum <= type.maxTotal;
  }) || resultTypes[resultTypes.length - 1];

  return {
    type: resultType,
    totals: totals,
    sum: sum,
    percent: Math.round((sum / TOTAL_MAX) * 100)
  };
}

function renderMetric(labelEl, barEl, value, max) {
  labelEl.textContent = String(value) + " / " + String(max);
  barEl.style.width = String(Math.round((value / max) * 100)) + "%";
}

function renderChecklist(items) {
  resultChecklist.innerHTML = "";
  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = "- " + item;
    resultChecklist.appendChild(li);
  });
}

function renderResult(profile) {
  const type = profile.type;
  state.lastResultId = type.id;
  state.lastProfile = profile;

  resultBadge.textContent = type.badge;
  resultTitle.textContent = type.title;
  resultSubtitle.textContent = type.subtitle;
  resultFeature.textContent = type.feature;
  resultPunch.textContent = type.punch;
  resultSolution.textContent = type.solution;
  resultConfidence.textContent = "분석 신뢰도 " + String(profile.percent) + "% · 8문항 기반 성향 종합 결과";

  renderMetric(metricAudit, metricAuditBar, profile.totals.audit, DIMENSION_MAX.audit);
  renderMetric(metricClaim, metricClaimBar, profile.totals.claim, DIMENSION_MAX.claim);
  renderMetric(metricOptimize, metricOptimizeBar, profile.totals.optimize, DIMENSION_MAX.optimize);
  renderMetric(metricDiscipline, metricDisciplineBar, profile.totals.discipline, DIMENSION_MAX.discipline);
  renderChecklist(type.checklist);
}

function startLoadingTicker() {
  let idx = 0;
  loadingText.textContent = loadingMentions[idx];
  state.loadingTimer = window.setInterval(function () {
    idx = (idx + 1) % loadingMentions.length;
    loadingText.textContent = loadingMentions[idx];
  }, 700);
}

function stopLoadingTicker() {
  if (!state.loadingTimer) return;
  window.clearInterval(state.loadingTimer);
  state.loadingTimer = null;
}

function openSharedResultIfExists() {
  const params = new URLSearchParams(window.location.search);
  const shared = params.get("share");
  const typeId = params.get("type");

  if (shared !== "1" || !typeId) return;
  const type = findResultById(typeId);
  if (!type) return;

  const profile = {
    type: type,
    totals: type.sampleTotals,
    sum: type.minTotal,
    percent: 90
  };
  renderResult(profile);
  restartBtn.textContent = "나도 테스트하기";
  showPanel("result");
}

function resetQuiz() {
  stopLoadingTicker();
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  state.lastResultId = null;
  state.lastProfile = null;
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
  startLoadingTicker();

  window.setTimeout(function () {
    stopLoadingTicker();
    const profile = calculateProfileFromAnswers();
    renderResult(profile);
    showPanel("result");
  }, 1900);
});

function openShareModal() {
  if (!state.lastResultId) return;

  const shareUrl = getShareUrl(state.lastResultId);
  shareUrlText.textContent = shareUrl;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  modalNativeShareBtn.hidden = !(isMobile && navigator.share);
  shareModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  shareModal.hidden = true;
  document.body.style.overflow = "";
}

shareBtn.addEventListener("click", openShareModal);
shareModal.addEventListener("click", function (e) {
  if (e.target === shareModal) closeShareModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !shareModal.hidden) {
    closeShareModal();
  }
});

shareModalClose.addEventListener("click", closeShareModal);
shareUrlText.parentElement.addEventListener("click", function () {
  modalCopyBtn.click();
});

modalCopyBtn.addEventListener("click", async function () {
  const url = shareUrlText.textContent;
  try {
    await navigator.clipboard.writeText(url);
    modalCopyBtn.textContent = "복사 완료! 카톡에 붙여넣기 하세요";
    window.setTimeout(function () {
      modalCopyBtn.textContent = "🔗 링크 복사하기";
    }, 2000);
  } catch (error) {
    modalCopyBtn.textContent = "브라우저 권한 문제로 복사 실패";
  }
});

modalNativeShareBtn.addEventListener("click", async function () {
  const url = shareUrlText.textContent;
  const resultType = findResultById(state.lastResultId);

  try {
    await navigator.share({
      title: "내 돈 관리 유형 & 보험 성향 테스트",
      text: "내 결과는 '" + resultType.title + "'. 너도 1분 테스트 해봐",
      url: url
    });
    closeShareModal();
  } catch (error) {
    /* 사용자가 공유 시트를 닫을 수 있으므로 무시 */
  }
});

restartBtn.addEventListener("click", resetQuiz);

showPanel("landing");
openSharedResultIfExists();
