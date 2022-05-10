import sum from "./Sum";

test("Check Sum ",()=>{
  const result=sum(2,3);
  expect(result).toBe(5);
});
