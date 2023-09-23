const c2409 = import.meta.glob('$lib/images/collector/c2409/*.jpg');
const c2406 = import.meta.glob('$lib/images/collector/c2406/*.png');
const c2311 = import.meta.glob('$lib/images/collector/c2311/*.png');
const c2309 = import.meta.glob('$lib/images/collector/c2309/*.png');
const c2306 = import.meta.glob('$lib/images/collector/c2306/*.png');

const data = [{
  category: "2024학년도 9월 모의평가",
  images: []
},
{
  category: "2024학년도 6월 모의평가",
  images: []
},
{
  category: "2023학년도 11월 수능",
  images: []
},
{
  category: "2023학년도 9월 모의평가",
  images: []
},
{
  category: "2023학년도 6월 모의평가",
  images: []
},];

const list = [c2409, c2406, c2311, c2309, c2306]
{
  for (let i = 0; i < list.length; i++)
  {
    for (const path in list[i]) {
      data[i].images.push(path);
    }
  }
}

export default data;