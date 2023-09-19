import welcome from "$lib/images/svelte-welcome.png";
import deductive from "$lib/images/contents/deductive.png";
import metabolism from "$lib/images/contents/metabolism.png";
import waste from "$lib/images/contents/waste.png";
import hyperlipidemia from "$lib/images/contents/hyperlipidemia.png";
import manEnergy from "$lib/images/contents/manEnergy.png";
import neurons from "$lib/images/contents/neurons.png";
import membrane from "$lib/images/contents/membrane.png";
import synapse from "$lib/images/contents/synapse.png";
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
import dna from '$lib/images/contents/dna.png';
import gene from '$lib/images/contents/gene.png';
import cellCycle from '$lib/images/contents/cellCycle.png';
import cellDivision from '$lib/images/contents/cellDivision.png';
import cellDivisionCycle from '$lib/images/contents/cellDivisionCycle.png';
import phenotype from '$lib/images/contents/phenotype.png';
import abnormalChromosome from '$lib/images/contents/abonomalChromosome.png'
import abnormalDivision from '$lib/images/contents/abonomalDivision.png'
import squareSphere from '$lib/images/contents/squareSphere.png';
import distribution from '$lib/images/contents/distribution.png';
import transition from '$lib/images/contents/transition.png';
import ecosystemEnergy from '$lib/images/contents/ecosystemEnergy.png';
import ecoPyramid from '$lib/images/contents/ecoPyramid.png';
import polygenericInheritance from '$lib/images/contents/polygenericInheritance.png';

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
    key: ["자료", "가설", "탐구"],
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
    key: ["흥분의 전달", "시냅스", "아세틸콜린"],
    value: [
      {
        atr: "str",
        data: "흥분의 전달은 자극을 받아 활동 전위가 발생한 뉴런에서 흥분이 다음 뉴런의 가지 돌기나 신경 세포체로 전달되는 현상을 말합니다.",
      },
      {
        atr: "str",
        data: "시냅스는 뉴런의 축삭 돌기 말단과 다른 뉴런의 가지 돌기나 신경 세포체가 약 20 nm의 틈을 두고 접한 부위를 말합니다. 시냅스 이전 뉴런의 흥분이 축삭 돌기 말단까지 전도되면, 축삭 돌기 말단에 존재하는 시냅스 세포가 세포막과 융합되면서 '아세틸콜린'을 분비하여 흥분을 전달합니다.",
      },
      {
        atr: "img",
        data: synapse,
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
    key: ["질병", "감염성", "병원체", "세균", "바이러스", "프라이온", "AIDS", "감기", "야코프", "광우병"],
    value: [
      {
        atr: "str",
        data: "질병은 '감염성 질병'과 '비감염성 질병'으로 구분됩니다.",
      },
      {
        atr: "str",
        data: "병원체는 감염성 질병을 일으키는 인자로, '세균', '바이러스', '원생생물', '균류', '변형된 프라이온'이 있습니다.",
      },
      {
        atr: "str",
        data: "세균은 분열법으로 번식하고, 핵이 없는 단세포 원핵생물입니다. 모양에 따라 '구균', '간균', '나선균'으로 나뉩니다. 세균에 의한 질병은 주로 항생제를 이용하여 치료합니다. 질병의 예는 결핵, 세균성 식중독, 세균성 폐렴이 있습니다.",
      },
      {
        atr: "str",
        data: "바이러스는 세포로 이루어져 있지 않으며, 일반적으로 세균보다 크기가 작습니다. 살아있는 숙주 세포 내에서 증식한 후 방출될 때까지 숙주 세포를 파괴하는 습성을 지닙니다. 바이러스에 의한 질병은 항바이러스제를 이용하여 치료합니다. 질병의 예는 감기, 독감, 홍역, 소아마비, 후천성 면역 결핍증이 있습니다.",
      },
      {
        atr: "str",
        data: "원생생물은 핵을 가지고 있는 진핵생물로 대부분 열대 지역에서 매개 곤충을 통하여 사람 몸 안으로 들어와 질병을 일으킵니다. 질병의 예는 말라리아, 수면병이 있습니다.",
      },
      {
        atr: "str",
        data: "균류는 핵을 가지고 있는 진핵생물로, 균류가 몸에 직접 증식하거나 균류가 생산한 독성 물질에 의해 중독 증상이 일어날 수 있습니다. 균류에 의한 질병은 주로 항진균제를 이용하여 치료합니다. 질병의 예는 무좀이 있습니다.",
      },
      {
        atr: "str",
        data: "변형된 프라이온은 단백질성 감염 입자이며, 신경계의 퇴행성 질병을 유발하고 크기는 대개 바이러스보다 작습니다. 정상적인 프라이온 단백질과 접촉하며 변형된 구조로 만들며, 이 단백질이 축적되면 신경 세포가 파괴됩니다. 질병의 예는 크로이츠벨트-야코프병, 광우병이 있습니다.",
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
    key: ["염색체", "DNA", "히스톤 단백질"],
    value: [
      {
        atr: "str",
        data: "염색체는 DNA와 히스톤 단백질로 이루어진 복합체이며, 뉴클레오솜을 형성하며 동원체가 있습니다.",
      },
      {
        atr: "str",
        data: "DNA의 기본 구성 단위는 인산, 당, 염기로 이루어진 뉴클레오타이드입니다. 4종류의 염기(A, G, C, T)를 포함하며, 유전 정보를 담고 있습니다.",
      },
      {
        atr: "img",
        data: dna,
      },
    ],
  },
  {
    key: ["핵형", "핵상"],
    value: [
      {
        atr: "str",
        data: "핵형은 한 생물이 가진 염색체의 수, 모양, 크기 등과 같이 관찰할 수 있는 염색체의 형태적인 특징을 갖습니다. 성별이 같으면 핵상이 같습니다.",
      },
      {
        atr: "str",
        data: "핵상은 한 세포에 들어있는 염색체의 구성 상태로, 염색체의 상대적인 수로 표시합니다. 체세포는 모든 염색체가 2개씩 상동 염색체 쌍을 이루므로 2n, 생식세포는 상동 염색체 중 1개씩만 있으므로 n으로 표시합니다.",
      },
    ],
  },
  {
    key: ["대립유전자", "대립 유전자"],
    value: [
      {
        atr: "str",
        data: "대립유전자는 상동 염색체의 같은 위치에 존재하며, 하나의 형질을 결정하는 유전자입니다. 부모로부터 하나씩 물려받으므로 상동 염색체에 있는 대립유전자는 같을 수도, 다를 수도 있습니다.",
      },
      {
        atr: "img",
        data: gene,
      },
    ],
  },
  {
    key: ["염색 분체"],
    value: [
      {
        atr: "str",
        data: "염색 분체는 세포가 분열할 때 관찰되는 X자 모양의 염색체에서 하나의 염색체를 이루는 두 가닥입니다. 주로 DNA가 복제되어 형성되며, 세포 분열이 시작되면 염색체가 응축하여 2개의 염색 분체가 붙어 있는 형태가 된 다음, 두 염색 분체는 동원체 부위에서 연결되어 하나의 염색체를 이룹니다.",
      },
    ],
  },
  {
    key: ["세포 주기", "간기", "전기", "중기", "후기", "말기", "G1기", "G2기", "S기"],
    value: [
      {
        atr: "str",
        data: "세포 주기는 분열을 마친 딸세포가 생장하여 다시 분열을 마칠 때까지의 기간을 말합니다. 크게 간기와 분열기로 나뉘며, 간기는 G1기, S기, G2기로 나뉩니다.",
      },
      {
        atr: "img",
        data: cellCycle,
      },
    ],
  },
  {
    key: ["세포 분열", "감수 분열"],
    value: [
      {
        atr: "img",
        data: cellDivision,
      },
      {
        atr: "img",
        data: cellDivisionCycle,
      },
    ],
  },
  {
    key: ["가계도", "유전 형질", "형질", "상염색체 유전", "성염색체 유전", "다인자 유전"],
    value: [
      {
        atr: "str",
        data: "사람의 형질 유전에는 '상염색체 유전'과 '성염색체 유전'이 있습니다.",
      },
      {
        atr: "str",
        data: "상염색체 유전은 멘델 법칙에 따라 유전됩니다. 성염색체 유전에는 주로 X 염색체 유전이 있는데, 남녀에 따라 X 염색체의 수가 다르므로 유전 형질이 발현되는 빈도가 달라집니다.",
      },
      {
        atr: "img",
        data: phenotype,
      },
      {
        atr: "str",
        data: "단일 인자 유전은 한 가지 형질에 대해 1쌍의 대립유전자가 영향을 미쳐 형질이 결정되는 유전 현상을 말합니다. 다인자 유전은 한 가지 형질에 대해 여러 쌍의 대립유전자가 영향을 미쳐 형질이 결정되는 유전 현상입니다.",
      },
      {
        atr: "img",
        data: polygenericInheritance,
      },
    ],
  },
  {
    key: ["유전자 이상", "유전자 돌연변이"],
    value: [
      {
        atr: "str",
        data: "유전자 돌연변이는 '유전자 이상' 현상 중 하나이며, 유전자를 구성하는 DNA의 염기 서열이 변해 나타나는 돌연변이입니다.",
      },
      {
        atr: "str",
        data: "유전자 돌연변이에 의한 유전병은 '낫 모양 적혈구 빈혈증', '알비노증', '헌팅턴 무도병', '낭성 섬유증'이 있습니다.",
      },
    ],
  },
  {
    key: ["염색체 이상", "염색체 돌연변이", "염색체 구조 이상", "염색체 수 이상", "비분리"],
    value: [
      {
        atr: "str",
        data: "염색체 돌연변이는 '염색체 구조 이상'과 '염색체 수 이상'으로 나뉩니다. 각 염색체 돌연변이 여부는 핵형 분석을 통해 알아낼 수 있습니다.",
      },
      {
        atr: "str",
        data: "염색체 구조 이상은 유전자가 없어지거나 유전자 발현에 영향을 주어 표현형이 바뀔 수 있는 현상입니다. 주로 '결실', '역위', '중복', '전좌' 4가지로 구분됩니다.",
      },
      {
        atr: "img",
        data: abnormalChromosome,
      },
      {
        atr: "str",
        data: "염색체 수 이상이 있으면 유전자 수의 변화로 인해 유전병이 나타납니다. 주로 '염색체 비분리'에 의해 현상이 발현됩니다. 이 현상의 예에는 '다운 증후군', '터너 증후군', '클라인펠터 증후군'이 있습니다.",
      },
      {
        atr: "img",
        data: abnormalDivision,
      },
    ],
  },
  {
    key: ["생태계", "생물적 요인"],
    value: [
      {
        atr: "str",
        data: "생태계는 '생물적 요인'과 '비생물적 요인'으로 나뉩니다. 생물적 요인에는 생산자, 소비자, 분해자가 있습니다. 비생물적 요인에는 생물의 생존을 영향을 미치는 빛, 온도, 물, 토양, 공기 등이 있습니다.",
      },
    ],
  },
  {
    key: ["개체군", "환경 저항", "생장 곡선", "생존 곡선"],
    value: [
      {
        atr: "str",
        data: "개체군의 밀도는 개체군이 서식하는 공간의 단위 면적당 개체 수를 의미합니다. (개체군 구성 개체 수)/(개체군이 서식공간 면적)으로 구할 수 있습니다.",
      },
      {
        atr: "str",
        data: "개체군의 생장은 개체군의 개체 수가 시간에 따라 증가하는 것을 말하며, 주로 '이론적 생장 곡선'과 '실제 생장 곡선'으로 나뉩니다. 환경 저항이 작용하는 곳은 '실제 생장 곡선'에서 작용합니다.",
      },
    ],
  },
  {
    key: ["개체군 내의 상호 작용", "경쟁", "텃세", "순위제", "상호 작용"],
    value: [
      {
        atr: "str",
        data: "개체군 내의 개체들 사이에서는 먹이, 서식 공간, 배우자 등을 차지하기 위해 경쟁이 일어납니다. 주로 '텃세', '순위제', '리더제', '사회생활', 가족생활'이 있습니다.",
      },
    ],
  },
  {
    key: ["군집", "먹이 사슬", "먹이 그물", "우점종", "핵심종"],
    value: [
      {
        atr: "str",
        data: "군집의 구성은 군집을 이루고 있는 여러 종류의 개체군들은 먹고 먹히는 관계를 맺습니다.",
      },
      {
        atr: "str",
        data: "우점종은 군집에서 개체 수가 많거나 넓은 면적을 차지하여 군집을 대표하는 종을 말합니다. 핵심종은 군집 안에서 우점종은 아니지만 군집의 구조에 중요한 역할을 하는 종입니다.",
      },
    ],
  },
  {
    key: ["방형구", "밀도", "빈도", "피도"],
    value: [
      {
        atr: "img",
        data: squareSphere,
      },
    ],
  },
  {
    key: ["군집의 생태 분포", "위도", "고도"],
    value: [
      {
        atr: "img",
        data: distribution,
      },
    ],
  },
  {
    key: ["개체군 사이의 상호 작용", "군집 내", "배타 원리"],
    value: [
      {
        atr: "str",
        data: "군집 내 개체군 사이의 상호 작용에는 '종간 경쟁', '분서', '포식과 피식', '공생', '기생'이 있습니다. 두 개체군이 경쟁하면 '경쟁-배타 원리'가 일어나기도 합니다.",
      },
    ],
  },
  {
    key: ["군집의 천이", "천이", "양수림", "음수림", "극상", "산불"],
    value: [
      {
        atr: "str",
        data: "군집의 천이는 군집의 종 특성과 특성이 시간에 지남에 따라 변하는 과정을 말합니다. '1차 천이', '2차 천이', '극상'으로 분류됩니다.",
      },
      {
        atr: "str",
        data: "1차 천이는 생물이 없고 토양이 형성되지 않은 곳에서 토양의 형성 과정부터 시작하는 천이입니다. 주로 '건성 천이'와 '습성 천이'가 있습니다.",
      },
      {
        atr: "str",
        data: "2차 천이는 기존의 식물 군집이 있었던 곳에서 산불, 산사태, 벌목 등이 일어나 군집이 파괴된 후, 기존에 남아 있던 토양에서 시작하는 천이입니다. 주로 초본(풀)이 개척자로 들어오며, 1차 천이와 똑같은 양상을 보입니다.",
      },
      {
        atr: "str",
        data: "극상은 천이의 마지막 단계로, 안정된 상태를 말합니다.",
      },
      {
        atr: "img",
        data: transition,
      },
    ],
  },
  {
    key: ["물질의 생산과 소비", "총생산량", "호흡량", "순생산량", "생장량", "피식량"],
    value: [
      {
        atr: "str",
        data: "생태계는 에너지 흐름과 물질 순환을 통해 생물적 요인과 비생물적 요인이 연결된 역동적인 시스템입니다.",
      },
      {
        atr: "str",
        data: "총생산량은 생산자가 일정 기간 동안 광합성을 통해 합성한 유기물의 총량을 말합니다.",
      },
      {
        atr: "str",
        data: "호흡량은 생물이 자신의 생활에 필요한 에너지를 얻기 위해 호흡에 소비한 유기물의 양을 말합니다.",
      },
      {
        atr: "str",
        data: "순생산량은 총생산량에서 호흡량을 제외한 유기물의 양(총생산량 - 호흡량)입니다.",
      },
      {
        atr: "str",
        data: "생장량은 생물의 생장에 이용된 유기물의 총량으로, 순생산량 중에서 피식량, 고사-낙엽량을 제외하고 생물체에 남아 있는 유기물의 양을 말합니다.",
      },
      {
        atr: "str",
        data: "주로 식물의 피식량은 초식 동물의 섭식량과 같으며, 초식 동물의 동화량을 섭식량에서 배출량을 제외한 유기물의 양입니다.",
      },
    ],
  },
  {
    key: ["에너지 흐름,", "빛 에너지", "빛에너지", "에너지 효율"],
    value: [
      {
        atr: "str",
        data: "생태계 내의 에너지는 순환하지 않고, 한 방향으로만 흐릅니다. 주로 생태계에 공급되는 주요 에너지원은 '태양의 빛에너지'입니다.",
      },
      {
        atr: "str",
        data: "에너지 효율은 생태계의 한 영양 단계에서 다음 영양 단계로 이동하는 에너지의 비율을 말합니다.",
      },
      {
        atr: "img",
        data: ecosystemEnergy,
      },
    ],
  },
  {
    key: ["생태 피라미드"],
    value: [
      {
        atr: "img",
        data: ecoPyramid,
      },
    ],
  },
  {
    key: ["생물 다양성", "유전적 다양성", "종 다양성", "생태계 다양성", "서식지 단편화"],
    value: [
      {
        atr: "str",
        data: "생물 다양성이란 지구의 다양한 환경에 다양한 생물이 살고 있는 것을 말합니다. 주로 '유전적 다양성', '종 다양성', '생태계 다양성'이 있습니다.",
      },
      {
        atr: "str",
        data: "유전적 다양성은 같은 종이라도 개체군 내의 개체들이 유전자의 변이로 인해 다양한 형질이 나타나는 것을 의미합니다.",
      },
      {
        atr: "str",
        data: "종 다양성은 한 지역에서 종의 다양한 정도를 의미합니다.",
      },
      {
        atr: "str",
        data: "생태계 다양성은 어떤 지역에 사막, 초원, 삼림, 습지, 산, 호수, 강, 바다 등 다양한 생태계가 존재하는 것을 의미합니다.",
      },
    ],
  },
];

export default data;
