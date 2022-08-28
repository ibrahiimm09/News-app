import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewItem from './Components/NewItem';

export default class App extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "David Cobb",
      "title": "College football scores, schedule, games today: Nebraska vs. Northwestern kicks off Week 0 action - CBS Sports",
      "description": "NCAA football scores, live updates and highlights from the teams playing in Week 0",
      "url": "https://www.cbssports.com/college-football/news/college-football-scores-schedule-games-today-nebraska-vs-northwestern-kicks-off-week-0-action/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/27/c4fda65c-056d-4fbc-95d1-281339c8438b/thumbnail/1200x675/138fb8098f4bb3f6b93cbf522bc467f5/northwestern-nebraska-getty.jpg",
      "publishedAt": "2022-08-27T18:09:53Z",
      "content": "The 2022 college football season has finally arrived ... sort of. With 22 of the 131 FBS teams in action, Week 0 brings several games that will give fans a primer of what's in store for the months to… [+1222 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "TMZ"
      },
      "author": "TMZ Staff",
      "title": "Brittany Aldean Defends Gender Take Against Cassadee Pope, Maren Morris - TMZ",
      "description": "Jason Aldean's wife, Brittany, drew the ire of Cassadee Pope and Maren Morris for a statement some took as transphobic ... but she's digging her heels in and standing firm on her gender take.",
      "url": "https://www.tmz.com/2022/08/27/jason-aldean-wife-brittany-defend-gender-take-cassadee-pope-maren-morris/",
      "urlToImage": "https://imagez.tmz.com/image/81/16by9/2022/08/27/81c4b2f1e0fa482f8b6d53ad1a65b141_xl.jpg",
      "publishedAt": "2022-08-27T17:53:00Z",
      "content": "Brittany Aldean is doubling down on a hot take that some are calling transphobic -- publicly hitting back at a couple fellow country contemporaries who are outraged.\r\nBA -- who's Jason Aldean's wife … [+1807 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Julian Borger",
      "title": "Russia blocks UN nuclear treaty agreement over Zaporizhzhia clause - The Guardian",
      "description": "Failure to agree a joint statement after weeks of debate at UN marks latest blow to hopes of maintaining an arms control regime",
      "url": "https://amp.theguardian.com/world/2022/aug/27/russia-blocks-un-nuclear-treaty-agreement-over-zaporizhzhia-clause",
      "urlToImage": "https://i.guim.co.uk/img/media/c7d1313693f05c70769f2b093c8175e246f616a3/1670_909_2481_1489/master/2481.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b01e97b8070a7706e89ba02272041d6f",
      "publishedAt": "2022-08-27T17:15:56Z",
      "content": "Russia has blocked an agreement at the United Nations that was aimed at bolstering the nuclear non-proliferation treaty (NPT) because Moscow objected to a clause about control over the Zaporizhzhia p… [+3686 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "Intel officials to assess national security fallout from Trump's Mar-a-Lago documents - POLITICO",
      "description": "Director of National Intelligence Avril Haines confirmed the review in a letter to top lawmakers.",
      "url": "https://www.politico.com/news/2022/08/27/intel-officials-national-security-fallout-trumps-mar-a-lago-documents-00054006",
      "urlToImage": "https://static.politico.com/9a/bb/acf1ad654d5cbfa9a67971245863/220826-trump-getty.jpg",
      "publishedAt": "2022-08-27T17:08:20Z",
      "content": "The correspondence represents the Biden administrations first known engagement with Congress on the issue of the ongoing investigation ensnaring the former president. Court documents unsealed in rece… [+3071 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Florida Today"
      },
      "author": "Emre Kelly, Florida Today",
      "title": "NASA's huge Artemis launch: It's going to be loud, but how loud depends - Florida Today",
      "description": "NASA’s Space Launch System rocket, set for its first flight early Monday, is a behemoth. And when it lifts off from Florida, it's going to be loud.",
      "url": "https://www.floridatoday.com/story/tech/science/space/2022/08/26/nasas-huge-artemis-launch-its-going-loud-but-how-loud-depends/7879724001/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/25/PBRE/b1fa8fa5-c6e4-41a0-b64d-8e6d8c73ffa8-crb082522_artemis_1_.jpg?auto=webp&crop=3681,2071,x0,y243&format=pjpg&width=1200",
      "publishedAt": "2022-08-27T16:57:33Z",
      "content": "Space is important to us and that’s why we're working to bring you top coverage of the industry and Florida launches. Journalism like this takes time and resources. Please support it with a subscript… [+7296 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Timothy Nerozzi",
      "title": "Sick dolphin with 'low' chance of survival nursed back to health in Thailand - Fox News",
      "description": "A sick dolphin calf that experts said had a \"low\" chance of survival after being found drowning in a tidal pool was successfully nursed back to health in Thailand.",
      "url": "https://www.foxnews.com/lifestyle/sick-dolphin-low-chance-survival-nursed-back-health-thailand",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Thailand-Sick-Dolphin-Bottle-2.jpg",
      "publishedAt": "2022-08-27T16:46:37Z",
      "content": "A dolphin calf found sick by Thai fishermen is making a successful recovery with the help of a team of volunteers.\r\nParadon, whose name means \"brotherly burden,\" was expected to die from its ailments… [+2678 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Adam Shaw",
      "title": "Border Patrol rescue 4-month-old, 18-month-old abandoned by smugglers in desert: 'This is cruelty' - Fox News",
      "description": "Border Patrol agents rescued two children who had been abandoned in the Sonoran Desert in Arizona, with a four-month-old found unresponsive by the agents.",
      "url": "https://www.foxnews.com/politics/border-patrol-rescue-4-month-old-18-month-old-abandoned-smugglers-desert-cruelty",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/desert3.jpg",
      "publishedAt": "2022-08-27T15:59:38Z",
      "content": "Border Patrol agents on Thursday rescued a four-month-old and 18-month-old who had been abandoned in the sweltering heat of the Arizona desert an incident that officials used to highlight the cruelty… [+2882 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Patricia Mazzei",
      "title": "As DeSantis Campaigns on Education, Crist Picks Teacher as Running Mate - The New York Times",
      "description": "Karla Hernández-Mats, head of the largest teachers union in the region, criticized the Republican governor for attacking educators. “This is what dictators do,” she said.",
      "url": "https://www.nytimes.com/2022/08/27/us/charlie-crist-karla-hernandez-mats-florida-gov.html",
      "urlToImage": "https://static01.nyt.com/images/2022/08/27/multimedia/27CRIST-01/27CRIST-01-facebookJumbo.jpg",
      "publishedAt": "2022-08-27T15:52:59Z",
      "content": "It confirms how out of touch Crist is with Florida families, the party said in a statement on Friday.\r\nMr. Crist dismissed the notion that voters would agree with the criticism that sharing the ticke… [+887 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Tom Warren",
      "title": "Xbox Game Pass \"Friends & Family\" leak suggests you can share with friends - The Verge",
      "description": "A new leak could mean Microsoft is about to let Xbox Game Pass subscribers share benefits with family and friends. Microsoft has been working on a Game Pass family plan, and it could be named Game Pass Friends & Family.",
      "url": "https://www.theverge.com/2022/8/27/23324623/microsoft-xbox-game-pass-friends-family-subscription-leak",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/pl2Nhz8OCyk2EGHynrvf9c6ZbeA=/0x96:400x305/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23975084/xboxgamepassfriendsandfamily.png",
      "publishedAt": "2022-08-27T15:30:30Z",
      "content": "Illustration by Alex Castro / The Verge\r\nA leak of potential branding for Microsofts upcoming Xbox Game Pass family subscription suggests youll be able to share a subscription with friends, too. Micr… [+1368 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Huge dinosaur skeleton unearthed in Portuguese garden - BBC News - BBC News",
      "description": "The remains of what could be the largest dinosaur ever discovered in Europe are being excavated in a Portuguese back garden.The fossilised skeleton of a saur...",
      "url": "https://www.youtube.com/watch?v=VfUn7l027Q8",
      "urlToImage": "https://i.ytimg.com/vi/VfUn7l027Q8/maxresdefault.jpg",
      "publishedAt": "2022-08-27T15:28:52Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "Horror Pic ‘The Invitation’ Leads Worst Weekend At This Summer’s Box Office, All Pics Grossing $54M - Deadline",
      "description": "SATURDAY AM UPDATE: The bowels of the summer box office have been reached with Sony’s new C CinemaScore horror movie The Invitation leading with $6M-$7M at 3,114 theaters. Like the late Andy Rooney, I get a lot of mail from sources, but in this instance it’s …",
      "url": "https://deadline.com/2022/08/box-office-the-invitation-1235101502/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2022/08/invitation-e1661611343162.jpg?w=992",
      "publishedAt": "2022-08-27T15:05:00Z",
      "content": "SATURDAY AM UPDATE: The bowels of the summer box office have been reached, with Sony’s new C CinemaScore horror movie The Invitation leading with $6M-$7M at 3,114 theaters. Like the late Andy Rooney,… [+7438 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Zoe Sottile, CNN",
      "title": "A 3,000-year-old Egyptian artifact was seized by customs officials in Tennessee - CNN",
      "description": "A millennia-old Egyptian artifact was found in a shipment to the port at Memphis, Tennessee, officials say.",
      "url": "https://www.cnn.com/2022/08/27/us/memphis-tennessee-customs-egyptian-artifact-trnd/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220826164523-memphis-egyptian-artifact-super-tease.jpg",
      "publishedAt": "2022-08-27T15:02:00Z",
      "content": "(CNN)A millennia-old Egyptian artifact was found in a shipment to the port at Memphis, Tennessee, officials say.\r\nUS Customs and Border Protection officers discovered the artifact on August 17, accor… [+1067 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Central banks will fail to tame inflation without better fiscal policy, study says - Reuters",
      "description": "Central banks will fail to control inflation and could even push price growth higher unless governments start playing their part with more prudent budget policies, according to a study presented to policymakers at the Jackson Hole conference in the United Sta…",
      "url": "https://www.reuters.com/markets/us/central-banks-will-fail-tame-inflation-without-better-fiscal-policy-study-says-2022-08-27/",
      "urlToImage": "https://www.reuters.com/resizer/iGSxk9OE08JjDSCCCcOrnveYhoY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HJWVJUHNIZJVHBBFQ74Q56M2BY.jpg",
      "publishedAt": "2022-08-27T14:44:00Z",
      "content": "JACKSON HOLE, Wyo., Aug 27 (Reuters) - Central banks will fail to control inflation and could even push price growth higher unless governments start playing their part with more prudent budget polici… [+2644 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Ryan Morik",
      "title": "Seahawks name Geno Smith starting quarterback - Fox News",
      "description": "Geno Smith has won the Seattle Seahawks starting quarterback job, replacing Russell Wilson, who was trade to the Denver Broncos in the offseason.",
      "url": "https://www.foxnews.com/sports/seahawks-name-geno-smith-starting-quarterback",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/805ba26c-Geno-Smith.jpg",
      "publishedAt": "2022-08-27T14:43:03Z",
      "content": "The Seattle Seahawks have their guy for Week 1, and it's Geno Smith.\r\nFor the first time since 2011, someone not named Russell Wilson will be the No. 1 quarterback for the Seahawks, as Seattle traded… [+2652 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "DeSantis suspends 4 Broward school board members after Parkland report - POLITICO",
      "description": "Out of the four sitting school board members scrutinized in the report, the terms of Levinson and Murray are set to expire in November with neither seeking reelection.",
      "url": "https://www.politico.com/news/2022/08/27/desantis-suspends-4-broward-school-board-members-after-parkland-report-00053977",
      "urlToImage": "https://static.politico.com/9d/dc/828f2a5f424388757408ff719927/school-shooting-florida-superintendent-59759.jpg",
      "publishedAt": "2022-08-27T14:03:02Z",
      "content": "It is my duty to suspend people from office when there is clear evidence of incompetence, neglect of duty, misfeasance or malfeasance, DeSantis said in a statement. This action is in the best interes… [+2994 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lookout Landing"
      },
      "author": "Anders Jorstad",
      "title": "Mariners Moose Tracks, 8/27/22: Julio Rodríguez, Tim Anderson, and Tyler Glasnow - Lookout Landing",
      "description": "Digesting a huge day for Mariners fans.",
      "url": "https://www.lookoutlanding.com/2022/8/27/23324512/mariners-moose-tracks-8-27-22-julio-rodriguez-tim-anderson-and-tyler-glasnow",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/niGnuWjKVMYYU6PLzmR9DjxINj0=/0x0:1698x889/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23974934/1323592221.jpg",
      "publishedAt": "2022-08-27T14:00:00Z",
      "content": "Good morning everyone! Between the Julio extension, the Ichiro celebration, and the walk-off win against a fellow playoff hopeful, yesterday was one of the most momentous days in franchise history. L… [+1731 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Hande Atay Alam and Isil Sariyuce, CNN",
      "title": "Turkish pop star jailed after a joke about religious schools in Turkey - CNN",
      "description": "Turkish pop star Gulsen Colakoglu has been jailed pending trial on charges of \"inciting or insulting the public to hatred and enmity\" after she made a joke about religious schools in Turkey, according to the state-run Anadolu news agency.",
      "url": "https://www.cnn.com/2022/08/26/middleeast/turkey-gulsen-colakoglu-arrest-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220826123053-gulsen-colakoglu-file-super-tease.jpg",
      "publishedAt": "2022-08-27T13:45:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "MMA Fighting"
      },
      "author": "MMA Fighting Newswire",
      "title": "Adriano Moraes gives first comments after brutal knockout loss to Demetrious Johnson, calls for trilogy fight - MMA Fighting",
      "description": "Adriano Moraes broke his silence after his devastating loss to Demetrious Johnson — and called for a chance to settle their series for good.",
      "url": "https://www.mmafighting.com/2022/8/27/23324407/adriano-moraes-gives-first-comments-brutal-knockout-loss-demetrious-johnson-calls-for-trilogy-fight",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/jfzuX3iBWxVatDFAGKRKLhP8YvM=/0x0:1536x804/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23130634/Adriano_Moraes_Demetrious_Johnson_ONE_on_TNT_I_16_1536x1024.jpg",
      "publishedAt": "2022-08-27T13:00:04Z",
      "content": "Adriano Moraes wants to settle the series for good.\r\nThe now former ONE Championship flyweight titleholder suffered a brutal defeat at the hands of Demetrious Johnson on Friday night, losing his belt… [+1586 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Drew Harwell",
      "title": "Trump's Truth Social isn't paying its bills - The Washington Post",
      "description": "Former president Donald Trump’s company Truth Social is facing financial doubts, puny traffic and fears of further trouble if his popularity falls.",
      "url": "https://www.washingtonpost.com/technology/2022/08/27/trump-truth-social-mar-a-lago-fbi/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NQFGQ7BGDQI63JZPDZYUSBZPXQ.jpg&w=1440",
      "publishedAt": "2022-08-27T13:00:00Z",
      "content": "Comment on this story\r\nFormer president Donald Trumps Truth Social website is facing financial challenges as its traffic remains puny and the company that is scheduled to acquire it expresses fear th… [+6003 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "POLITICO.eu"
      },
      "author": "Camille Gijs",
      "title": "Meta’s Facebook agrees to settle Cambridge Analytica data privacy suit - POLITICO Europe",
      "description": "Terms of the preliminary settlement were not disclosed.",
      "url": "https://www.politico.eu/article/metas-facebook-agrees-to-settle-cambridge-analytica-data-privacy-suit/",
      "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2022/08/27/GettyImages-1241032118-scaled.jpg",
      "publishedAt": "2022-08-27T12:45:54Z",
      "content": "Meta's Facebook settled a long-running lawsuit in a U.S. court seeking damages for letting third parties, including Cambridge Analytica, access the private data of users. \r\nThe preliminary settlement… [+632 chars]"
    }
  ];
  constructor(){
    super();
    this.state = {
      articles : this.articles,
    }
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="container">
      <h1 className='my-2'>Top-Headlines:</h1>
        <div className="row">
      {this.state.articles.map((element)=>{
         return <div className="col-md-3 my-3" key={element.url}>
            <NewItem title={element.title.slice(0, 45)} description={element.description.slice(0, 80)} imgUrl={element.urlToImage}/>
          </div>
      })}
      </div>
      </div>
      </>
    )
  }
}

// export default App;
