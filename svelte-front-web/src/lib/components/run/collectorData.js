const c2406 = import.meta.glob('$lib/images/collector/2406/*.png');

const data = [{
  category: "2024학년도 6월 모의평가",
  images: []
}];

for (const path in c2406) {
  data[0].images.push(path);
}

export default data;