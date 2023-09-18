import welcome from "$lib/images/svelte-welcome.png";
import deductive from "$lib/images/contents/deductive.png";
import metabolism from "$lib/images/contents/metabolism.png";
import waste from "$lib/images/contents/waste.png";
import hyperlipidemia from "$lib/images/contents/hyperlipidemia.png";
import manEnergy from "$lib/images/contents/manEnergy.png";
import neurons from "$lib/images/contents/neurons.png";
import membrane from "$lib/images/contents/membrane.png";
import muscle from "$lib/images/contents/muscle.png";
import muscleEnergy from "$lib/images/contents/muscleEnergy.png";
import nervousSystem from '$lib/images/contents/nervousSystem.png';
import brain from '$lib/images/contents/brain.png';
import cerebral from '$lib/images/contents/cerebral.png';
import spinalCord from '$lib/images/contents/spinalCord.png';
import reflect from '$lib/images/contents/reflect.png';
import division from '$lib/images/contents/division.png';
import hormone from '$lib/images/contents/hormone.png';
import hormoneSystem from '$lib/images/contents/hormoneSystem.png';
import feedback from '$lib/images/contents/feedback.png';
import sugarRegulation from '$lib/images/contents/sugarRegulation.png';
import homeostasis from '$lib/images/contents/homeostasis.png';
import temperatureRegulation from '$lib/images/contents/temperatureRegulation.png';
import osmoticPressure from '$lib/images/contents/osmoticPressure.png';
import inflammation from '$lib/images/contents/inflammation.png';
import acquiredImmunity from '$lib/images/contents/acquiredImmunity.png';
import immunity from '$lib/images/contents/immunity.png';
import abo from '$lib/images/contents/abo.png';


const data = [
  {
    key: ["test"],
    value: [
      {
        atr: "str",
        data: "그렇게 해서, 눈부신 햇살 아래 아름다운 꽃들이 만개한 아침, 제임스는 평소보다 일찍 일어나서 자전거를 타고 목이 마른 나무들 사이를 빠져나와 작은 마을로 향했고, 그곳에서는 신선한 빵과 과일, 그리고 그의 좋아하는 커피를 사기 위해 시장을 찾았습니다; 하지만 그가 찾던 것은 물질적인 것들만은 아니었고, 사실 그는 오랜만에 마음의 평화와 자유를 느끼고 싶었다, 그래서 저녁 무렵에는 해가 지기 전에 호수가 있는 작은 공원에 도착하여, 노을이 반짝이는 물 위에 소리 없이 떠있는 작은 배를 타고 자신만의 시간을 보냈다. 이 문장은 여러 개의 주제와 아이디어를 담고 있지만, 전체적으로는 어느 날 제임스가 어떤 하루를 보냈는지에 대해 이야기하고 있습니다.",
      },
      { atr: "img", data: welcome },
    ],
  },
  {
    key: ["자료", "가설"],
    value: [
      {
        atr: "str",
        data: "가설에는 '귀납적 탐구 방법'과 '연역적 탐구 방법'이 있습니다. 연역적 탐구 방법에는 귀납적 탐구 방법과는 다르게 '가설'이 존재합니다.",
      },
      { atr: "img", data: deductive },
    ],
  },
  {
    key: ["생물의 특성"],
    value: [
      {
        atr: "str",
        data: "생물의 특성에는 '세포로 구성', '물질대사', '자극에 대한 반응과 항상성', '발생과 생장', '생식과 유전', '적응과 진화'가 있습니다.",
      },
    ],
  },
  {
    key: ["물질대사"],
    value: [
      {
        atr: "str",
        data: "물질대사는 생물체 내에서 일어나는 화학 반응으로, 효소가 관여합니다. 이 종류에는 물질을 합성하는 '동화 작용'과 분해하는 '이화 작용'이 있습니다.",
      },
    ],
  },
  {
    key: ["세포 호흡", "ATP"],
    value: [
      {
        atr: "str",
        data: "세포 호흡 과정에는 화학 에너지 형태인 ATP에 대부분 저장하고, 나머지는 열에너지로 방출합니다.",
      },
      {
        atr: "img",
        data: metabolism,
      },
    ],
  },
  {
    key: ["세포 호흡의 결과", "노폐물", "소화 산물"],
    value: [
      {
        atr: "str",
        data: "탄수화물을 포도당, 과당, 갈락토스로 분해됩니다. 단백질은 아미노산으로, 지방은 모노글리세리드와 지방산으로 분해됩니다.",
      },
      {
        atr: "img",
        data: waste,
      },
    ],
  },
  {
    key: ["대사성 질환", "고혈압", "고지혈증", "당뇨병"],
    value: [
      {
        atr: "str",
        data: "대사성 질환은 물질대사 장애에 의해 일어나는 질환을 말합니다. 그 종류에는 당뇨병, 고혈압, 고지혈증이 있습니다.",
      },
    ],
  },
  {
    key: ["고지혈증"],
    value: [
      {
        atr: "str",
        data: "고지혈증은 혈액 속에 콜레스테롤, 중성 지방 등이 과다하게 들어 있는 상태를 말합니다. 혈관벽에 콜레스테롤이 쌓이면 혈액의 흐름을 방해하게 됩니다.",
      },
      { atr: "img", data: hyperlipidemia },
    ],
  },
  {
    key: ["에너지 섭취량", "소비량", "대사량"],
    value: [
      {
        atr: "str",
        data: "에너지 섭취량이 에너지 소비량보다 많으면 비만이 될 수 있습니다.",
      },
      {
        atr: "str",
        data: "에너지가 부족하게 된다면, 우리 몸에 저장된 지방이나 단백질로부터 에너지를 얻습니다.",
      },
      {
        atr: "img",
        data: manEnergy,
      },
    ],
  },
  {
    key: ["뉴런", "신경 세포체", "가지 돌기", "축삭 돌기"],
    value: [
      {
        atr: "str",
        data: "신경계를 구성하는 뉴런은 신경 세포체, 가지 돌기, 축삭 돌기로 이루어져 있습니다.",
      },
      {
        atr: "img",
        data: neurons,
      },
    ],
  },
  {
    key: ["흥분 전도", "흥분의 전도", "분극", "재분극", "역치 이상의 자극"],
    value: [
      {
        atr: "str",
        data: "분극은 자극을 받지 않아 휴지 상태인 뉴런이 안쪽은 음전하, 바깥쪽은 양전하 상태(휴지 전위)를 말합니다. 주로 -70mV를 유지하며, 분극의 원인은 Na+-K+ 펌프가 있기 때문입니다.",
      },
      {
        atr: "str",
        data: "탈분극은 역치 이상의 자극이 가해진 부위에서 막전위가 상승하는 것을 말합니다.",
      },
      {
        atr: "str",
        data: "재분극은 상승한 막전위가 다시 휴지 전위로 하강하는 현상을 말합니다.",
      },
      {
        atr: "img",
        data: membrane,
      },
    ],
  },
  {
    key: ["골격근", "근육"],
    value: [
      {
        atr: "str",
        data: "골격근은 몸의 움직임에 관여하는 근육을 말하며, 원심성 뉴런으로부터 흥분을 전달받아 수축합니다.",
      },
      {
        atr: "img",
        data: muscle,
      },
    ],
  },
  {
    key: ["근수축", "크레아틴"],
    value: [
      {
        atr: "str",
        data: "근수축은 근육 원섬유가 에너지를 공급받아 수축하는 과정을 말합니다. ATP로부터 에너지를 공급받는 과정에서 '크레아틴 인산의 분해'와 '세포 호흡 과정'을 통해 작용합니다.",
      },
      {
        atr: "img",
        data: muscleEnergy,
      },
    ],
  },
  {
    key: ["신경계", "중추 신경계", "말초 신경계", "구심성 신경", "원심성 신경"],
    value: [
      {
        atr: "str",
        data: "사람의 신경계는 '중추 신경계'와 '말초 신경계'로 이루어져 있습니다.",
      },
      {
        atr: "str",
        data: "중추 신경계는 몸의 정보를 받아들여 통합하고 처리하며, 뇌와 척수로 구분됩니다.",
      },
      {
        atr: "str",
        data: "말초 신경계는 중추 신경계의 명령을 받아들여 전달하며, 해부학적으로 뇌 신경과 척수 신경으로 구분되거나, 기능적으론 구심성 신경이나 원심성 신경으로 구분됩니다.",
      },
      {
        atr: "img",
        data: nervousSystem,
      },
    ],
  },
  {
    key: ["대뇌", "소뇌", "간뇌", "중간뇌", "뇌교", "연수"],
    value: [
      {
        atr: "img",
        data: brain,
      },
    ],
  },
  {
    key: ["대뇌", "전두엽", "감각령", "연합령", "운동령"],
    value: [
      {
        atr: "str",
        data: "대뇌 겉질은 뉴런의 신경 세포체가 모인 회색질이며, 기능에 따라 감각령, 연합령, 운동령으로 나뉘며, 위치에 따라 전두엽, 두정엽, 측두엽, 후두엽으로 구분됩니다.",
      },
      {
        atr: "img",
        data: cerebral,
      },
    ],
  },
  {
    key: ["척수"],
    value: [
      {
        atr: "str",
        data: "척수는 뇌와 척수 신경 사이에서 정보를 전달하는 역할을 합니다. 겉질은 축삭 돌기로 이루어진 백색질이고, 속질은 신경 세포체로 이루어진 회색질입니다.",
      },
      {
        atr: "img",
        data: spinalCord,
      },
    ],
  },
  {
    key: ["의식적인 반응", "무조건 반사", "척수 반사", "연수 반사", "중간뇌 반사", "반응의 중추"],
    value: [
      {
        atr: "str",
        data: "무조건 반사는 의식적인 반응보다 속도가 빠릅니다. 반응의 중추는 중간뇌, 연수, 척수 등입니다.",
      },
      {
        atr: "img",
        data: reflect,
      },
    ],
  },
  {
    key: ["교감 신경", "부교감 신경", "신경절 이전 뉴런", "신경절 이후 뉴런"],
    value: [
      {
        atr: "img",
        data: division,
      },
    ],
  },
  {
    key: ["신경계 이상", "운동 신경 이상"],
    value: [
      {
        atr: "str",
        data: "중추 신경계 이상에는 '알츠하이머 병'과 '파킨슨 병'이 있습니다. 운동 신경 이상에는 '근위축성 측삭 경화증'이 있습니다.",
      },
    ],
  },
  {
    key: ["호르몬", "내분비계", "표적 기관"],
    value: [
      {
        atr: "str",
        data: "호르몬은 내분비샘에서 생성되어 혈액이나 조직액으로 분비됩니다. 특정 호르몬 수용체를 가진 표적 기관에 작용합니다.",
      },
      {
        atr: "img",
        data: hormone,
      },
    ],
  },
  {
    key: ["사람의 내분비샘과 호르몬", "갑상샘", "뇌하수체", "부신", "이자", "항이뇨 호르몬"],
    value: [
      {
        atr: "img",
        data: hormoneSystem,
      },
    ],
  },
  {
    key: ["당뇨병", "인슐린"],
    value: [
      {
        atr: "str",
        data: "당뇨병은 인슐린 분비 이상이나 표적 세포가 인슐린에 적절히 반응하지 못하여 생기는 현상입니다.",
      },
      {
        atr: "str",
        data: "제1형 당뇨병은 이자의 베타 세포가 파괴되어 인슐린을 생성하지 못하는 것을 말하고, 제2형 당뇨병은 인슐린의 표적 세포가 인슐린에 정상적으로 반응하지 못하는 것을 말합니다.",
      },
    ],
  },
  {
    key: ["갑상샘", "항진증", "저하증"],
    value: [
      {
        atr: "str",
        data: "갑상샘에 문제가 생기면 두 가지로 나뉘는데, '갑상샘 기능 항진증'과 '갑상생 기능 저하증'이 있습니다.",
      },
      {
        atr: "str",
        data: "갑상생 기능 항진증은 대사량이 증가하고 성격이 과민해집니다. 갑상샘 기능 저하증은 동작이 느려지고 추위를 많이 탑니다.",
      },
    ],
  },
  {
    key: ["음성 피드백", "과정을 억제", "TRH", "TSH", "길항 작용"],
    value: [
      {
        atr: "str",
        data: "음성 피드백은 어느 과정의 산물이 그 과정을 억제하는 조절을 말하며, 길항 작용은 두 가지 요인이 같은 생리 작용에 대해 서로 반대로 작용하여 서로의 효과를 줄이는 것을 말합니다.",
      },
      {
        atr: "img",
        data: feedback,
      },
    ],
  },
  {
    key: ["혈당량 조절 과정", "인슐린", "글루카곤"],
    value: [
      {
        atr: "img",
        data: sugarRegulation,
      },
    ],
  },
  {
    key: ["체온 조절 과정"],
    value: [
      {
        atr: "img",
        data: homeostasis,
      },
    ],
  },
  {
    key: ["신경계의 체온 조절", "열 발생량", "열 발산량", "저온 자극", "고온 자극"],
    value: [
      {
        atr: "img",
        data: temperatureRegulation,
      },
    ],
  },
  {
    key: ["삼투압 조절", "혈장 삼투압", "항이뇨 호르몬", "ADH"],
    value: [
      {
        atr: "img",
        data: osmoticPressure,
      },
    ],
  },
  {
    key: ["염증", "백혈구", "대식 세포", "대식세포", "식세포 작용", "식균 작용"],
    value: [
      {
        atr: "str",
        data: "염증은 병원체를 제거하기 위한 방어 작용입니다.",
      },
      {
        atr: "img",
        data: inflammation,
      },
    ],
  },
  {
    key: ["방어 작용"],
    value: [
      {
        atr: "img",
        data: immunity,
      },
    ],
  },
  {
    key: ["특이적 면역 작용", "후천성 면역", "T 림프구", "B 림프구"],
    value: [
      {
        atr: "str",
        data: "특이적 면역 작용은 특정 항원을 인식하여 제거하는 방어 작용이며, T 림프구와 B 림프구에 의해 이루어집니다.",
      },
      {
        atr: "img",
        data: acquiredImmunity,
      },
    ],
  },
  {
    key: ["ABO", "abo", "혈액형"],
    value: [
      {
        atr: "img",
        data: abo,
      },
    ],
  },
  {
    key: ["대립유전자", "대립 유전자"],
    value: [
      {
        atr: "str",
        data: "대립유전자는 '특정 유전 형질을 결정하는 유전자'를 말합니다.",
      },
    ],
  },
];

export default data;
