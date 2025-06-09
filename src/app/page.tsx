import Main from "@/components/_clientComponents/screen/main/main";
import Section02 from "@/components/_clientComponents/screen/Section02";
import Section03 from "@/components/_clientComponents/screen/Section03";

export default function Home() {
  return (
    <div className="desktop:aspect-[2/1.2] tablet:aspect-[2/1.25] pt-14">
      <Main />
      <Section02 />
      <Section03 />
    </div>
  );
}
