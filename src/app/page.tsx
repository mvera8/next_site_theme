import RefreshmentHomePage from "@/components/templates/RefreshmentHomePage";
import { getSiteData } from "@/lib/site";

export default async function Home() {
  const data = await getSiteData();

  return (
    <RefreshmentHomePage
      title={data.hero.title}
      domain={data.site.domain}
      link={data.hero.link}
    />
  );
}
