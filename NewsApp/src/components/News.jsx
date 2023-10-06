import React, { Component } from "react";
import Newsitems from "./Newsitems";

const sam = "sameeer";
export default class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title:
        "Japan issues tsunami advisory for islands in eastern Japan - Reuters",
      description:
        "Japan issued an advisory for a tsunami of 1 metre for the islands off of Izu peninsula on the eastern coast of the country.",
      url: "https://www.reuters.com/world/asia-pacific/japan-issues-tsunami-advisory-islands-eastern-japan-2023-10-05/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=159",
      publishedAt: "2023-10-05T05:14:40Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "WBAL TV Baltimore",
      },
      author: "Greg Ng",
      title:
        "BPD: Video shows persons of interest in Morgan State University shooting - WBAL TV Baltimore",
      description:
        "Investigators are seeking the public's help to identify people seen on video in connection with Tuesday night's shooting at Morgan State University.",
      url: "https://www.wbaltv.com/article/morgan-state-university-shooting-persons-of-interest-video/45449878",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/1700-argonne-dr-jpg-651e34b41306f.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2023-10-05T04:47:00Z",
      content:
        "BALTIMORE —Investigators are seeking the public's help to identify people seen on video in connection with Tuesday night's shooting at Morgan State University.\r\nThe search for suspects -- at least tw… [+7574 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2023 MLB playoff schedule: Dates, TV channels for ALDS, NLDS with matchups set, times TBD - CBS Sports",
      description:
        "The 2023 MLB postseason will have two days off before resuming on Saturday",
      url: "https://www.cbssports.com/mlb/news/2023-mlb-playoff-schedule-dates-tv-channels-for-alds-nlds-with-matchups-set-times-tbd/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/10/05/902cc89d-a48d-4454-b487-70a92c43eaf4/thumbnail/1200x675/113ee1932b1b7d6ff0956afd1e12ad56/trea-getty.png",
      publishedAt: "2023-10-05T04:36:43Z",
      content:
        "The 12-team MLB postseason field has been trimmed to eight teams. All four Wild Card Series came to an end Wednesday as the Phillies, Diamondbacks, Twins and Rangers completed two-game sweeps. The Ma… [+3715 chars]",
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Kisha Forde",
      title:
        "Khloe Kardashian Addresses Tristan Thompson’s “Traumatic” Scandal After He Calls Her His “Person” - E! NEWS",
      description:
        "After Tristan Thompson called Khloe Kardashian his “person,” the Kardashians star reflected on his “traumatic” cheating scandal.",
      url: "https://www.eonline.com/news/1386907/khloe-kardashian-addresses-tristan-thompsons-traumatic-scandal-after-he-calls-her-his-person",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2023113/rs_1200x1200-230213105250-1200-Tristan_Thompson-Khloe_Kardashian-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2023-10-05T04:00:00Z",
      content:
        "However, despite their circumstances as a former couple, family always comes first for Khloe, especially considering Tristan, 32, and his brotherAmari, 17, (who suffers from epilepsy) moved in with h… [+1082 chars]",
    },
    {
      source: {
        id: null,
        name: "Internet",
      },
      author: "https://www.facebook.com/thehackernews",
      title:
        "Apple Rolls Out Security Patches for Actively Exploited iOS Zero-Day Flaw - The Hacker News",
      description:
        "Attention iPhone and iPad users! Apple rushes in with iOS 17.0.3 and iPadOS 17.0.3 updates to patch an actively exploited kernel vulnerability.",
      url: "https://thehackernews.com/2023/10/apple-rolls-out-security-patches-for.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHxjqjpNebTMUg_scSDjZVE0rV9iwKxyM9oY2aFxiM8wFbT_OUFdZ9zDYzu5BhlJDCKl1yY4QgyZ6NTIU3tTqNOKEGwltTuRPE69Kgsmv5xwLsg9dqyKM5YwaEAHFGldZyfjAxZ-MhifwQblBCxaxfLfWHZiEewPvh3Xiw5y_EddJ_tLMgbQbFXHcuMFDs/s728-rw-ft-e30/apple.jpg",
      publishedAt: "2023-10-05T03:42:00Z",
      content:
        "Apple on Wednesday rolled out security patches to address a new zero-day flaw in iOS and iPadOS that it said has come under active exploitation in the wild.\r\nTracked as CVE-2023-42824, the kernel vul… [+2597 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Holly Yan",
      title:
        "Powerball jackpot winning numbers announced for the estimated $1.2 billion prize. Here are your odds – and what you could buy - CNN",
      description:
        "Your dream of buying 400 private jets or some Lamborghini Veneno Roadsters for you and 143 of your closest friends could become reality after Wednesday night’s Powerball drawing.",
      url: "https://www.cnn.com/2023/10/04/business/powerball-jackpot-wednesday-drawing/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231004065913-powerball-ticket-071923.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-05T03:16:00Z",
      content:
        "Your dream of buying 400 private jets or some Lamborghini Veneno Roadsters for you and 143 of your closest friends could become reality after Wednesday nights Powerball drawing. \r\nThe winning numbers… [+703 chars]",
    },
    {
      source: {
        id: null,
        name: "Nbcsportsphiladelphia.com",
      },
      author: "Eric Mullin",
      title:
        "Here are the ALDS and NLDS matchups with Wild Card Series over - Yahoo Sports",
      description:
        "The ALDS and NLDS matchups are set as the Wild Card Series came to an end Wednesday. Here's what to know about the next round of the 2023 MLB playoffs.",
      url: "https://www.nbcsportsphiladelphia.com/mlb/here-are-the-alds-and-nlds-matchups-with-wild-card-series-over/539278/",
      urlToImage:
        "https://media.nbcsportsphiladelphia.com/2023/10/image-13-1.png?resize=1200%2C675&quality=85&strip=all",
      publishedAt: "2023-10-05T02:55:00Z",
      content:
        "And then there were eight.\r\nFour clubs were bounced from the 2023 MLB playoffs on Wednesday as all four Wild Card Series ended in two-game sweeps.\r\nThe opening round of the postseason saw one upset i… [+1432 chars]",
    },

    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Matt Donnelly",
      title:
        "SAG-AFTRA and AMPTP Talks to Continue Friday and Monday - Variety",
      description:
        "After a second day of negotiations, SAG-AFTRA and Hollywood's biggest producers will reconvene for more talks on Friday, Oct. 6, and Monday, Oct. 9.",
      url: "https://variety.com/2023/film/news/sag-aftra-amptp-negotiations-day-3-1235745741/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2018/11/sag-aftra-building.jpg?w=1000&h=562&crop=1",
      publishedAt: "2023-10-05T01:59:00Z",
      content:
        "SAG-AFTRA and the Alliance of Motion Picture and Television Producers will meet for further negotiations in the former’s ongoing strike, the parties announced on Wednesday.\r\n“SAG-AFTRA and the AMPTP … [+1553 chars]",
    },
    {
      source: {
        id: null,
        name: "KUTV 2News",
      },
      author: "Paul Nelson, KUTV",
      title:
        "Central Utah braces for traffic issues, crowds with annular solar eclipse expected to draw thousands - KUTV 2News",
      description:
        "There&rsquo;s already a lot of excitement in central Utah about the eclipse passing over the state on Oct 14. Officials are already warning people that traffic is exp",
      url: "https://kutv.com/news/local/central-utah-braces-for-traffic-issues-crowds-with-annular-solar-eclipse-expected-to-draw-thousands-october-14-udot-warning-signs-richfield-utah-limited-services",
      urlToImage:
        "https://kutv.com/resources/media/9c4fd6dd-e71f-447b-acf8-e43623f5712a-large16x9_Addaheading53.png",
      publishedAt: "2023-10-05T01:55:00Z",
      content:
        "RICHFIELD, Utah (KUTV) Theres already a lot of excitement in central Utah about the eclipse passing over the state on Oct 14. Officials are already warning people that traffic is expected to be a hug… [+2071 chars]",
    },
    {
      source: {
        id: null,
        name: "Minneapolis Star Tribune",
      },
      author: "Bobby Nightengale, Star Tribune",
      title:
        "Twins sweep Blue Jays, advance to American League Division Series - Star Tribune",
      description:
        "A two-run fourth inning was all the offense the Twins needed as their pitchers shut down Toronto 2-0 in Game 2 on Wednesday. The Twins face Houston next.",
      url: "https://www.startribune.com/twins-blue-jays-wild-card-series-sweep-sonny-gray-carlos-correa/600309877/",
      urlToImage:
        "https://chorus.stimg.co/24978479/merlin_72215733.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      publishedAt: "2023-10-05T01:45:23Z",
      content:
        "After the Twins clinched a spot in the postseason, players kept insisting this was a different type of Twins team. A few reasons behind their confidence: Pablo López, Sonny Gray and a surging bullpen… [+4304 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Garfield Reynolds",
      title:
        "Barclays Says Only Stocks Crash Can Rescue Bonds, as Fed Likely Won't Ease - Bloomberg",
      description:
        "Global bonds are doomed to keep falling unless a sustained slump in equities revives the appeal of fixed-income assets, according to Barclays Plc.",
      url: "https://www.bloomberg.com/news/articles/2023-10-05/only-a-stocks-crash-can-rescue-bonds-for-barclays-as-fed-won-t",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iG000Rfy.CJw/v0/1200x799.jpg",
      publishedAt: "2023-10-05T01:37:34Z",
      content:
        "Global bonds are doomed to keep falling unless a sustained slump in equities revives the appeal of fixed-income assets, according to Barclays Plc. \r\nThere is no magic level of yields that, when reach… [+254 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Brie Stimson",
      title:
        "CDC stops printing COVID-19 vaccination cards: pandemic relic - Fox News",
      description:
        "The The U.S. Centers for Disease Control and Prevention has stopped printing and distributing the once critical coronavirus vaccination cards.",
      url: "https://www.foxnews.com/health/cdc-stops-printing-covid-19-vaccination-cards-pandemic-relic",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/vaccine-card.jpg",
      publishedAt: "2023-10-05T01:05:00Z",
      content:
        "The U.S. Centers for Disease Control and Prevention has stopped printing coronavirus vaccination cards since the federal government is no longer distributing vaccines. \r\nThe cards, which were once es… [+1357 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hannah Rabinowitz, Jeremy Herb",
      title:
        "Why there is no jury in the New York civil case against Trump - CNN",
      description:
        "Former President Donald Trump has complained repeatedly that the civil trial in New York, where he’s accused of business fraud, does not have a jury – and the fate of the case is up to Judge Arthur Engoron.",
      url: "https://www.cnn.com/2023/10/04/politics/trump-new-york-case-no-jury/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231004134858-01-trump-fraud-trial-gallery-update-100423.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-05T01:00:00Z",
      content:
        "Former President Donald Trump has complained repeatedly that the civil trial in New York, where hes accused of business fraud, does not have a jury and the fate of the case is up to Judge Arthur Engo… [+6389 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author:
        "Dan De Luce, Peter Alexander, Kelly O'Donnell, Julie Tsirkin, Frank Thorp V, Carol E. Lee, Courtney Kube, Abigail Williams",
      title:
        "Can Biden keep U.S. aid flowing to Ukraine amid GOP chaos in House? - NBC News",
      description:
        "The Biden administration is scrambling to keep U.S. military aid flowing to Ukraine as a political power struggle plays out among GOP House lawmakers.",
      url: "https://www.nbcnews.com/politics/white-house/can-biden-keep-us-aid-flowing-ukraine-gop-chaos-house-rcna118907",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231004-ukraine-russia-war-se-554p-62505c.jpg",
      publishedAt: "2023-10-05T00:54:00Z",
      content:
        "The Biden administration is scrambling to find a way to keep U.S. weapons flowing to Ukraine in its war with Russia after the ouster of the Republican House speaker put future assistance to Kyiv in s… [+8140 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Katie Mogg",
      title:
        "Sticking to a vegetarian diet may be partly genetic, study finds - NBC News",
      description:
        "Sticking to a vegetarian diet may be partly genetic, a study found. The research identified several genes associated with people's adherence to vegetarianism.",
      url: "https://www.nbcnews.com/health/health-news/vegetarian-diet-partly-genetic-rcna118370",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231002-vegetarian-stock-mn-1200-db49dd.jpg",
      publishedAt: "2023-10-05T00:37:00Z",
      content:
        "Have you ever tried to be vegetarian but found it too difficult to stop eating meat? Your genes could be partly to blame, a new study suggests. \r\nThe research, published Wednesday in the journal PLOS… [+5162 chars]",
    },

    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Ex-crypto CEO Sam Bankman-Fried’s fraud trial underway - NBC News",
      description:
        "Opening statements began today in the trial of Sam Bankman-Fried, the former cryptocurrency CEO that is accused of orchestrating one of the biggest financial...",
      url: "https://www.youtube.com/watch?v=sUW4oofWsMI",
      urlToImage: "https://i.ytimg.com/vi/sUW4oofWsMI/maxresdefault.jpg",
      publishedAt: "2023-10-05T00:15:02Z",
      content: null,
    },

    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Melissa Quinn",
      title:
        "Steve Scalise and Jim Jordan running for House speaker as GOP race to replace McCarthy kicks off - CBS News",
      description:
        "Reps. Jim Jordan and Steve Scalise asked their Republican colleagues to support them for speaker of the House in letters Wednesday.",
      url: "https://www.cbsnews.com/news/jim-jordan-speaker-of-the-house-kevin-mccarthy/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/04/af5f5c31-93de-4978-88bf-5f4e92389b85/thumbnail/1200x630g2/0515a8266d6f1fa9f91324c7f23872ff/ap19302711025517.jpg?v=42bbcea0e3eaab3fb7d470f54c86b0bd",
      publishedAt: "2023-10-05T00:02:00Z",
      content:
        "Washington — House Majority Whip Steve Scalise of Louisiana and fellow Republican Rep. Jim Jordan of Ohio announced Wednesday that they will each run for speaker of the House, becoming the first two … [+8070 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f1d8c8d63a421199d6142c4610ad9e`;
    let response = await fetch(url);
    let result = await response.json();
    this.articles = result.articles.filter((res) => {
      if (res.title && res.urlToImage && res.description) {
        return res;
      }
    });
    this.setState({
      articles: this.articles ,
    });
  }

  render() {
    return (
      <div style={{ marginTop: "56px" }} className="container">
        <h2>NewsSeven- Top headlines </h2>
        <div className="row gx-4 gy-4">
          {this.state.articles.map((item) => (
            <div className="col-md-4" key={item.url}>
              <Newsitems
                title={item.title.slice(0, 44)}
                description={item.description}
                imageurl={item.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
