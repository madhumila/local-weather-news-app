import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import ReactPaginate from "react-paginate";
import "./NewsHome.css";

const NewsHome = ({ query, category, mode }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [currentPages, setCurrentPages] = useState(0);
  const itemsPerPage = 6;

  // Fetch news articles when category or query changes
  
  useEffect(() => {
    const apiKey = "101f1a09f1b3c0ab1a1388e8b23e83a6";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=ml&country=in&max=30&apikey=${apiKey}&q=${query}`;

    const fetchNews = async () => {
      try {
        // const response = await fetch(url);
        // const data = await response.json();
        const data = {
          // TODO This mock response needs to be removed while merging to master.
          totalArticles: 3988,
          articles: [
            {
              title: "climate engineering",
              description:
                "climate engineering study reveals that climate engineering efforts off the US coast might inadvertently worsen heatwaves in Europe.",
              content:
                "കാലിഫോർണിയയിലെ ഉയർന്ന താപനില കുറയ്ക്കാൻ രൂപകൽപ്പന ചെയ്ത ജിയോ എഞ്ചിനീയറിംഗ് ടെക്നിക് യൂറോപ്പിൽ ഉഷ്ണ തരംഗം വർദ്ധിപ്പിക്കുമെന്ന് പഠനങ്ങൾ. ഒരു പ്രദേശത്തെ കാലാവസ്ഥാ വ്യതിയാനം മറ്റിടങ്ങളിൽ അപ്രതീക്ഷിത പ്രത്യാഘാതങ്ങൾ ഉണ്ടാക്കുന്നു എന്നാണ് പഠനങ്ങൾ വ്യക്തമാക്... [3844 chars]",
              url: "https://azhimukham.com/climate-engineering-off-us-coast-could-increase-heatwaves-in-europe-study-finds/",
              image:
                "https://azhimukham.com/wp-content/uploads/2024/04/heat-img.jpg",
              publishedAt: "2024-06-22T02:33:43Z",
              source: {
                name: "Azhimukham",
                url: "https://azhimukham.com",
              },
            },
            {
              title: "അഭയാർത്ഥികളെ മറക്കരുതെന്നോർമ്മിപ്പിച്ച് ഫ്രാൻസിസ് പാപ്പാ",
              description:
                "ആഗോള അഭയാർത്ഥിദിനവുമായി ബന്ധപ്പെടുത്തി, ഫ്രാൻസിസ് പാപ്പാ നൽകിയ ട്വീറ്റ്.",
              content:
                "ആഗോള അഭയാർത്ഥിദിനവുമായി ബന്ധപ്പെടുത്തി, ഫ്രാൻസിസ് പാപ്പാ നൽകിയ ട്വീറ്റ്.\nമോൺസിഞ്ഞോർ ജോജി വടകര, വത്തിക്കാന്‍ ന്യൂസ്\nഅഭയാർത്ഥികളെ മറക്കരുതെന്നും അവരുടെ ജീവിതചരിത്രത്തെ നമ്മോട് ചേർത്തുപിടിക്കണമെന്നും ഓർമ്മിപ്പിച്ച് ഫ്രാൻസിസ് പാപ്പാ. ഐക്യരാഷ്ട്രസഭ, ജൂൺ ഇ... [1060 chars]",
              url: "https://www.vaticannews.va/ml/pope/news/2024-06/pope-francis-tweet-world-refugee-day-do-not-forget-their-plight.html",
              image:
                "https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/srv/2023/10/19/2023-10-19-preghiera-per-i-migranti-e-rifugiati/1697737687328.JPG/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
              publishedAt: "2024-06-20T19:33:00Z",
              source: {
                name: "Vatican News",
                url: "https://www.vaticannews.va",
              },
            },
            {
              title:
                "തെറ്റായ ആശയവിനിമയം മനുഷ്യാന്തസ്സിനെ കളങ്കപ്പെടുത്തുന്നു: ഫ്രാൻസിസ് പാപ്പാ",
              description:
                "വിദ്വേഷജനകമായ ആശയവിനിമയം ജീവിതത്തിൽ നിന്നും ഒഴിവാക്കണമെന്ന ആശയവുമായി ഫ്രാൻസിസ് പാപ്പാ ജൂൺ മാസം പതിനെട്ടാം തീയതി സമൂഹ മാധ്യമമായ എക്സ് (X) ൽ ...",
              content:
                "വിദ്വേഷജനകമായ ആശയവിനിമയം ജീവിതത്തിൽ നിന്നും ഒഴിവാക്കണമെന്ന ആശയവുമായി ഫ്രാൻസിസ് പാപ്പാ ജൂൺ മാസം പതിനെട്ടാം തീയതി സമൂഹ മാധ്യമമായ എക്സ് (X) ൽ ഹ്രസ്വസന്ദേശം പങ്കുവച്ചു.\nഫാ. ജിനു ജേക്കബ്, വത്തിക്കാൻ സിറ്റി\nതെറ്റായ വിവരകൈമാറ്റത്താൽ മനുഷ്യാന്തസ്സിനെ കളങ്കപ്... [1398 chars]",
              url: "https://www.vaticannews.va/ml/pope/news/2024-06/pope-francis-x-message-on-human-dignity-in-communication.html",
              image:
                "https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/srv/2024/06/12/2024-06-12-udienza-generale/1718185970229.JPG/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
              publishedAt: "2024-06-19T03:28:06Z",
              source: {
                name: "Vatican News",
                url: "https://www.vaticannews.va",
              },
            },
            {
              title: "വൃദ്ധജനത്തെ പുറന്തള്ളുന്ന മനോഭാവം ആവൃത ദയാവധം, പാപ്പാ!",
              description:
                "ഫ്രാൻസീസ് പാപ്പായുടെ എക്സ് സന്ദേശം: പ്രായം ചെന്നവരെ തള്ളിക്കളയുന്ന മനോഭാവത്തിനെതിരെ പോരാടുക.",
              content:
                "ഫ്രാൻസീസ് പാപ്പായുടെ എക്സ് സന്ദേശം: പ്രായം ചെന്നവരെ തള്ളിക്കളയുന്ന മനോഭാവത്തിനെതിരെ പോരാടുക.\nജോയി കരിവേലി, വത്തിക്കാൻ സിറ്റി\nവിഷലിപ്തമായ വലിച്ചെറിയൽ സംസ്കാരത്തെ ചെറുക്കാൻ നാമെല്ലാവരും വിളിക്കപ്പെട്ടിരിക്കുന്നുവെന്ന് മാർപ്പാപ്പാ ഓർമ്മിപ്പിക്കുന്നു.\nവയ... [1315 chars]",
              url: "https://www.vaticannews.va/ml/pope/news/2024-06/pope-x-message-on-throaway-culture-and-elderly-people.html",
              image:
                "https://www.vaticannews.va/content/dam/vaticannews/multimedia/2020/06/16/sunset-3156176_1920.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
              publishedAt: "2024-06-15T11:28:26Z",
              source: {
                name: "Vatican News",
                url: "https://www.vaticannews.va",
              },
            },
            {
              title:
                "ഇറ്റലിയില്‍ നരേന്ദ്ര മോദി നാളെ അനാഛാദനം ചെയ്യാനിരുന്ന ഗാന്ധി പ്രതിമ ഖലിസ്ഥാന്‍വാദികള്‍ തകര്‍ത്തു",
              description:
                "റോം: ഇറ്റലിയില്‍ നരേന്ദ്ര മോദി നാളെ അനാഛാദനം ചെയ്യാനിരുന്ന പ്രതിമ ഖലിസ്ഥാന്‍വാദികള്‍ തകര്‍ത്തു. കാനഡയില്‍ കൊല്ലപ്പെട്ട ഖലിസ്ഥാന്‍ ഭീകരന്‍ ഹര്‍ദീപ് സിങ്",
              content:
                "റോം: ഇറ്റലിയില്‍ നരേന്ദ്ര മോദി നാളെ അനാഛാദനം ചെയ്യാനിരുന്ന പ്രതിമ ഖലിസ്ഥാന്‍വാദികള്‍ തകര്‍ത്തു.\nകാനഡയില്‍ കൊല്ലപ്പെട്ട ഖലിസ്ഥാന്‍ ഭീകരന്‍ ഹര്‍ദീപ് സിങ് നിജ്ജാറുമായി ബന്ധപ്പെട്ട വിവാദ മുദ്രാവാക്യങ്ങളും പ്രതിമയില്‍ ഖാലിസ്ഥാന്‍ വാദികള്‍ എഴുതിയിരുന്നു.\nM... [358 chars]",
              url: "https://janmabhumi.in/2024/06/12/3210269/news/world/gandhis-statue-which-was-to-be-beheaded-by-narendra-modi-in-italy-tomorrow-was-destroyed-by-khalistanists/",
              image:
                "https://janmabhumi.in/wp-content/uploads/2024/06/gandhi-statue.jpg",
              publishedAt: "2024-06-12T14:02:00Z",
              source: {
                name: "ജന്മഭൂമി - Janmabhumi",
                url: "https://janmabhumi.in",
              },
            },
            {
              title:
                "Suresh Gopi | കേന്ദ്രമന്ത്രിയായ ശേഷം സുരേഷ് ഗോപി ആദ്യമായി കേരളത്തിൽ; തളി ക്ഷേത്രത്തിൽ ദർശനം നടത്തി",
              description:
                "Suresh Gopi visits Kerala first time after swearing in as Union minister of state. He interacted with the media as well. മൂന്നാം മോദി സർക്കാരിൽ സഹമന്ത്രിയായി സത്യപ്രതിജ്ഞ ചെയ്ത സുരേഷ് ഗോപി കോഴിക്കോട്ടെത്തി",
              content:
                "മൂന്നാം മോദി സർക്കാരിൽ സഹമന്ത്രിയായി സത്യപ്രതിജ്ഞ ചെയ്ത സുരേഷ് ഗോപി (Suresh Gopi) കോഴിക്കോട്ടെത്തി. ജില്ലയിലെ പ്രമുഖ ബിജെപി നേതാക്കളെ അദ്ദേഹം സന്ദർശിക്കും. തളി ക്ഷേത്രത്തിലും അദ്ദേഹം ദർശനം നടത്തി. രാവിലെ കണ്ണൂരിലേക്ക് പോകുന്ന അദ്ദേഹം പയ്യാമ്പലം ബീച്ച... [1783 chars]",
              url: "https://malayalam.news18.com/news/kerala/suresh-gopi-visits-kerala-first-time-after-swearing-in-as-union-minister-of-state-mm-673643.html",
              image:
                "https://images.news18.com/malayalam/uploads//2024/06/Suresh-Gopi-2024-06-def2c0b3bfd65878b994e0730289a08b-3x2.jpg?im=FitAndFill=(1200,675)",
              publishedAt: "2024-06-12T01:49:06Z",
              source: {
                name: "News18 മലയാളം",
                url: "https://malayalam.news18.com",
              },
            },
            {
              title:
                "Will Sanju Samson play against Pakistan in T20 world cup?",
              description:
                "Will Sanju Samson play against Pakistan in T20 world. സർപ്രൈസായി സഞ്ജു എത്തുമോ?; പാകിസ്താനെതിരെ ഇന്ത്യയുടെ സാധ്യതാ ഇലവന്‍",
              content:
                "ടി20 ലോകകപ്പിലെ ത്രില്ലറില്‍ ഇന്ന് പാകിസ്താനെതിരെ ഇറങ്ങുകയാണ് ഇന്ത്യ. ആദ്യ മത്സരത്തില്‍ അയര്‍ലന്‍ഡിനെ തോല്‍പ്പിച്ച ആത്മവിശ്വാസം രോഹിത് ശര്‍മയ്ക്കും സംഘത്തിനുമുണ്ട്. ഇന്ത്യൻ ടീമിറങ്ങുമ്പോൾ ക്രിക്കറ്റ് പ്രേമികളുടെ പ്രത്യേകിച്ച് മലയാളി ആരാധകരുടെ ഏറ്റവും... [3173 chars]",
              url: "https://www.twentyfournews.com/2024/06/09/will-sanju-samson-play-against-pakistan-in-t20-world-cup.html",
              image:
                "https://www.twentyfournews.com/wp-content/uploads/2024/06/Will-Sanju-Samson-play-against-Pakistan-in-T20-world-cup_.jpg",
              publishedAt: "2024-06-09T06:48:16Z",
              source: {
                name: "24 News",
                url: "https://www.twentyfournews.com",
              },
            },
            {
              title: "യുദ്ധങ്ങളുടെ ഇരകൾക്കായി പ്രാർത്ഥിക്കാം: ഫ്രാൻസിസ് പാപ്പാ",
              description:
                "യുദ്ധക്കെടുതിയുടെ ഇരകളാക്കായി പ്രാർത്ഥനകൾ അഭ്യർത്ഥിച്ച് ജൂൺ ആറാം തീയതി വ്യാഴാഴ്ച ഫ്രാൻസിസ് പാപ്പാ നൽകിയ ട്വീറ്റ്.",
              content:
                "യുദ്ധക്കെടുതിയുടെ ഇരകളാക്കായി പ്രാർത്ഥനകൾ അഭ്യർത്ഥിച്ച് ജൂൺ ആറാം തീയതി വ്യാഴാഴ്ച ഫ്രാൻസിസ് പാപ്പാ നൽകിയ ട്വീറ്റ്.\nമോൺസിഞ്ഞോർ ജോജി വടകര, വത്തിക്കാന്‍ ന്യൂസ്\nഎക്കാലത്തെയും യുദ്ധക്കെടുതികളുടെ ഇരകൾക്കായി പ്രാർത്ഥിക്കാൻ ആഹ്വാനം ചെയ്‌ത്‌ ഫ്രാൻസിസ് പാപ്പാ. ... [1476 chars]",
              url: "https://www.vaticannews.va/ml/pope/news/2024-06/pope-francis-tweet-x-pray-for-victims-of-wars-poor-weak-elderly.html",
              image:
                "https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/ansa/2024/04/03/10/1712134071441.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
              publishedAt: "2024-06-06T16:42:04Z",
              source: {
                name: "Vatican News",
                url: "https://www.vaticannews.va",
              },
            },
            {
              title:
                "വ്യോമ പ്രകടനത്തിനിടെ വിമാനങ്ങള്‍ കൂട്ടിയിടിച്ച് പൈലറ്റിന് ദാരുണാന്ത്യം",
              description:
                "മരിച്ചത് സ്പാനിഷ് പൗരന്‍ Two Planes, Collide, Air Show, Pilot, Dead",
              content:
                "ലിസ്ബണ്‍: (KVARTHA) തെക്കന്‍ പോര്‍ചുഗലില്‍ വ്യോമ പ്രകടനത്തിനിടെ രണ്ട് ചെറുവിമാനങ്ങള്‍ കൂട്ടിയിടിച്ച് പൈലറ്റിന് ദാരുണാന്ത്യം. സ്പാനിഷ് പൗരനായ പൈലറ്റാണ് മരിച്ചത്. എയര്‍ ഷോയില്‍ ആറ് വിമാനങ്ങള്‍ ഉള്‍പെടുന്ന വ്യോമ പ്രകടനത്തിനിടെ രണ്ട് വിമാനങ്ങള്‍ അപകടത്... [1292 chars]",
              url: "https://www.kvartha.com/news/world/on-camera-2-planes-collide-at-portugal-air-show-pilot-dead/cid14661024.htm",
              image:
                "https://www.kvartha.com/static/c1e/client/115656/uploaded_original/c18390705d4c6c5edba86b7d6876b09f.jpg",
              publishedAt: "2024-06-03T04:34:17Z",
              source: {
                name: "കെവാർത്ത | KVARTHA.COM",
                url: "https://www.kvartha.com",
              },
            },
            {
              title:
                "വിവേകാനന്ദപാറയിലെ മോദിയുടെ ധ്യാനം; ചെറുകിട മീന്‍ത്തൊഴിലാളികളും കച്ചവടക്കാരും പ്രതിസന്ധിയില്‍",
              description:
                "കന്യാകുമാരിയും പരിസരവും വന്‍സുരക്ഷയില്‍  Prime Minister, Narendra Modi, Meditation",
              content:
                "കന്യാകുമാരി: (KVARTHA) വിവേകാനന്ദപാറയിലെ പ്രധാനമന്ത്രി നരേന്ദ്ര മോദിയുടെ ധ്യാനം ചെറുകിട മീന്‍ത്തൊഴിലാളികളെയും കച്ചവടക്കാരെയും പ്രതിസന്ധിയിലാക്കിയിരിക്കുകയാണ്. പാറക്ക് ചുറ്റും അഞ്ച് കിലോമീറ്റര്‍ പരിധിയില്‍ കടലില്‍ സുരക്ഷ ഏര്‍പെടുത്തിയതോടെ മീന്‍പിടുത്ത... [2523 chars]",
              url: "https://www.kvartha.com/news/national/prime-minister-narendra-modis-meditation-kanyakumari/cid14644550.htm",
              image:
                "https://www.kvartha.com/static/c1e/client/115656/uploaded_original/45904dac27e87a35db33fab473103210.jpg",
              publishedAt: "2024-05-31T10:41:52Z",
              source: {
                name: "കെവാർത്ത | KVARTHA.COM",
                url: "https://www.kvartha.com",
              },
            },
          ],
        };
        setNewsArticles(data.articles);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNews();
  }, [category, query]);

  const paginatedData = newsArticles.slice(
    currentPages * itemsPerPage,
    (currentPages + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    console.log("Page clicked:", selected);
    setCurrentPages(selected);
  };

  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger" style={{ marginTop: "20px" }}>
          News
        </span>
      </h2>
      {paginatedData &&
        paginatedData.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
              mode={mode}
            />
          );
        })}
      <ReactPaginate
        pageCount={Math.ceil(newsArticles.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default NewsHome;
