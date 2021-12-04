//Response Example
let documento = {
  results: [
    {
      responseHeader: {
        status: 0,
        QTime: 132,
        params: {
          defType: "edismax",
          qf: "_title_^20 _text_^2",
          fl: ["score", "*"],
          json: '{"query": "*", "facet": {"url": {"type": "terms", "field": "url", "limit": 10}, "size": {"type": "terms", "field": "size", "limit": 300}}}',
          rows: "200",
        },
      },
      response: {
        numFound: 36,
        start: 0,
        maxScore: 1.0,
        numFoundExact: true,
        docs: [
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "9355a3fc-e262-4232-8d52-8f1f4d9a1296",
            _version_: 1717978302461771776,
            score: 1.0,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "7fddc65d-6145-421b-9dce-700f43d0d154",
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "5f52c6f1-f4f3-4845-996f-005c204eb338",
            _version_: 1717978031401730048,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "939509d9-486e-46ca-bcd5-ca451c10b729",
            _version_: 1717978021256757248,
            score: 1.0,
          },
          {
            title: ["Reach the world’s largest collection of tech talent"],
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "68570b68-4312-4822-9284-d58d2b3ca47d",
            _version_: 1717978063907586048,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "2195a381-a0ce-45c2-9569-c8cdda922d35",
            _version_: 1717978022434308096,
            score: 1.0,
          },
          {
            _title: "Tale of good guy",
            title: ["Tale of good guy"],
            url: ["goodguys.com"],
            base_url: ["goodguy.com"],
            _snippet_: ["a good guy was somewhat good"],
            size: [505.0],
            id: "f72be6e2-bff2-496d-817a-e34db59bde9b",
            _version_: 1717918130245730304,
            score: 1.0,
          },
          {
            _title: "Tale of good guy",
            title: ["Tale of good guy"],
            url: ["goodguys.com"],
            base_url: ["goodguy.com"],
            _snippet_: ["a good guy was somewhat good"],
            size: [505.0],
            id: "5fc02411-b591-418a-9bb1-060ee793e6eb",
            _version_: 1717918182869565440,
            score: 1.0,
          },
          {
            _title: "Tale of good guy",
            title: ["Tale of good guy"],
            url: ["goodguys.com"],
            base_url: ["goodguy.com"],
            _snippet_: ["a good guy was somewhat good"],
            size: [100.0],
            id: "52f7327e-945e-45d9-a30c-75459120d3bc",
            _version_: 1717914058446864384,
            score: 1.0,
          },
          {
            _title: "Tale of bad guy",
            title: ["Tale of bad guy"],
            url: ["badguy.com"],
            base_url: ["badguy.com"],
            _snippet_: ["a good guy was somewhat bad"],
            size: [50.0],
            id: "060aa400-0f5e-41cf-8914-4a72d5b2b1f8",
            _version_: 1717916897465335808,
            score: 1.0,
          },
          {
            title: ["Tale of bad almost good guy"],
            url: ["goodguys.com"],
            base_url: ["goodguy.com"],
            _snippet_: ["a good guy was almost somewhat good"],
            size: [75.0],
            id: "47696425-d3a6-47ec-a1e5-aad4acd2fcc3",
            _version_: 1717917119522275328,
            score: 1.0,
          },
          {
            title: ["Tale of almost good guy"],
            url: ["goodguys.com"],
            base_url: ["goodguy.com"],
            _snippet_: ["a good guy was almost somewhat good"],
            size: [75.0],
            id: "c52530e2-2d57-4e1e-9ea7-c8ce35d34488",
            _version_: 1717917051823063040,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "14fea615-682f-4c0a-a042-2355d9e89ed1",
            _version_: 1717978378912399360,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "e16d5b58-4554-409d-9fe5-d5fc7df96eb1",
            _version_: 1717978282745397248,
            score: 1.0,
          },
          {
            title: ["User user2758113 - Stack Overflow"],
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "95af1dd6-38ce-4707-8e11-8056e453644f",
            _version_: 1717978383324807168,
            score: 1.0,
          },
          {
            title: ["User user2758113 - Stack Overflow"],
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "6f3b4d7c-a71a-4fb5-91aa-14aeb3409dba",
            _version_: 1717978289010638848,
            score: 1.0,
          },
          {
            title: ["Reach the world’s largest collection of tech talent"],
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "c0ac6aba-7dca-4af5-bf21-148e2208cbe0",
            _version_: 1717978306262859776,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            text: [
              "not found not found the requested url was not found on this server server at port",
            ],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "a7427a71-6917-4490-8895-d593451fc26b",
            _version_: 1717978283453186048,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "7f670113-cb53-47d9-8ffe-097dd461898f",
            _version_: 1717978379748114432,
            score: 1.0,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "bce46c8a-cef0-48d9-8103-7cb60d1037eb",
            _version_: 1717978391851827200,
            score: 1.0,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "0bf8b45a-e149-446c-9852-30c8d5eb4191",
            _version_: 1717978802136547328,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "7b7cd492-974f-4ab1-aced-971873b95e42",
            _version_: 1717978928153362432,
            score: 1.0,
          },
          {
            title: ["User user2758113 - Stack Overflow"],
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "2325b984-dd2f-4591-8cc9-fc52013e8d02",
            _version_: 1717978935381196800,
            score: 1.0,
          },
          {
            title: ["User user2758113 - Stack Overflow"],
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "94333821-75f0-437b-9b52-ce44773b4ece",
            _version_: 1717978787527786496,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "4f0545b0-9575-4dbb-8da2-1a102aa492d5",
            _version_: 1717978779564900352,
            score: 1.0,
          },
          {
            title: ["Reach the world’s largest collection of tech talent"],
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "9b6cc0d6-ad63-4f3f-954a-a4452f87c63a",
            _version_: 1717978394519404544,
            score: 1.0,
          },
          {
            title: ["Reach the world’s largest collection of tech talent"],
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "c88d7b06-36bd-4a4d-b50b-62a6317086a7",
            _version_: 1717978806274228224,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "e7dd5f3a-e0c5-4c60-a6ff-ad84d4f13edc",
            _version_: 1717978780648079360,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "d3a50dc8-d849-4ebf-9d21-05df19ec7158",
            _version_: 1717978928962863104,
            score: 1.0,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "0fa557f2-eef2-4e48-a384-23221778b433",
            _version_: 1717978950704037888,
            score: 1.0,
          },
          {
            title: ["Reach the world’s largest collection of tech talent"],
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "c1f7a0b3-09d2-446d-a895-1bed3468903b",
            _version_: 1717978954654023680,
            score: 1.0,
          },
          {
            title: ["python — Cómo obtener sinónimos de nltk WordNet Python"],
            _snippet_: ["python — Cómo obtener sinónimos de nltk WordNet Py"],
            size: [293.0],
            url: [
              "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
            ],
            base_url: ["www.it-swarm-es.com"],
            id: "304a15f4-65c5-4d16-bc38-1eaa806f63af",
            _version_: 1717979010412052480,
            score: 1.0,
          },
          {
            title: ["404 Not Found"],
            _snippet_: [" 404 Not Found Not Found The requested URL /Perl/w"],
            size: [16.0],
            url: [
              "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
            ],
            base_url: ["wordnetweb.princeton.edu"],
            id: "7452880e-f3a4-42e3-b412-4a25cce34ac3",
            _version_: 1717979011279224832,
            score: 1.0,
          },
          {
            title: ["User user2758113 - Stack Overflow"],
            _snippet_: [" User user2758113 - Stack Overflow Stack Overflow "],
            size: [425.0],
            url: ["https://stackoverflow.com/users/2758113/user2758113"],
            base_url: ["stackoverflow.com"],
            id: "2bfde56f-f687-486f-ac62-30ac6c1f2164",
            _version_: 1717979017303293952,
            score: 1.0,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "b7b57c35-8f4e-4a32-8c2a-a94b4c0881a5",
            _snippet_: [" Reach the world’s largest collection of tech tale"],
            size: [284.0],
            url: ["https://stackoverflow.com/talent"],
            base_url: ["stackoverflow.com"],
            id: "e4995628-d10b-4fa6-a263-bdea87e224a3",
            _version_: 1717979038058807296,
            score: 1.0,
          },
        ],
      },
      facets: {
        count: 36,
        url: {
          buckets: [
            {
              val: "http://wordnetweb.princeton.edu/Perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=small&i=3&h=00100000000000000#c",
              count: 6,
            },
            { val: "https://stackoverflow.com", count: 6 },
            { val: "https://stackoverflow.com/talent", count: 6 },
            {
              val: "https://stackoverflow.com/users/2758113/user2758113",
              count: 6,
            },
            {
              val: "https://www.it-swarm-es.com/es/python/como-obtener-sinonimos-de-nltk-wordnet-python/1041861904/",
              count: 6,
            },
            { val: "goodguys.com", count: 5 },
            { val: "badguy.com", count: 1 },
          ],
        },
        size: {
          buckets: [
            { val: 16.0, count: 6 },
            { val: 284.0, count: 6 },
            { val: 293.0, count: 6 },
            { val: 425.0, count: 6 },
            { val: 1174.0, count: 6 },
            { val: 75.0, count: 2 },
            { val: 505.0, count: 2 },
            { val: 50.0, count: 1 },
            { val: 100.0, count: 1 },
          ],
        },
      },
    },
  ],
};

let request2 = {
  results: [
    {
      responseHeader: {
        status: 0,
        QTime: 1,
        params: {
          defType: "edismax",
          qf: "_title_^20 _text_^2",
          fl: ["score", "*"],
          json: '{"query": "github", "facet": {"url": {"type": "terms", "field": "base_url", "limit": 10}, "size": {"type": "terms", "field": "size", "limit": 3000}}}',
          rows: "200",
        },
      },
      response: {
        numFound: 8,
        start: 0,
        maxScore: 24.219145,
        numFoundExact: true,
        docs: [
          {
            title: ["Sign in to GitHub · GitHub"],
            text: [
              "sign in to github github skip to content github longer supports this web browser learn more about the browsers we support sign in to github username or email address password forgot password new to github create an account terms privacy security contact github you ca perform that action at this time you signed in with another tab or window reload to refresh your session you signed out in another tab or window reload to refresh your session",
            ],
            _snippet_: [" Sign in to GitHub · GitHub Skip to content GitHub"],
            size: [77.0],
            url: ["https://github.com/mdn/content/issues/new"],
            base_url: ["github.com"],
            id: "68780843-2c74-40ab-bd6b-81b4b43cb55e",
            _version_: 1718181730887663616,
            score: 24.219145,
          },
          {
            title: ["Sign in to GitHub · GitHub"],
            text: [
              "sign in to github github skip to content github longer supports this web browser learn more about the browsers we support sign in to github username or email address password forgot password new to github create an account terms privacy security contact github you ca perform that action at this time you signed in with another tab or window reload to refresh your session you signed out in another tab or window reload to refresh your session",
            ],
            _snippet_: [" Sign in to GitHub · GitHub Skip to content GitHub"],
            size: [77.0],
            url: ["https://github.com/mdn/yari/issues/new"],
            base_url: ["github.com"],
            id: "19ae8680-b1f9-4995-a548-d32bf26f2ed8",
            _version_: 1718181771957239808,
            score: 24.219145,
          },
          {
            title: ["GitHub: Where the world builds software · GitHub"],
            _snippet_: [" GitHub: Where the world builds software · GitHub "],
            size: [1269.0],
            url: ["https://github.com/"],
            base_url: ["github.com"],
            id: "1bfd5dc9-ff94-48b5-b00a-0dbaf62189a4",
            text: [
              "github where the world builds software github skip to content github longer supports this web browser learn more about the browsers we support sign up why github features mobile actions codespaces packages security code review issues integrations github sponsors customer stories team enterprise explore explore github learn and contribute topics collections trending learning lab open source guides connect with others the readme project events community forum github education github stars program marketplace pricing plans compare plans contact sales education search all github jump to suggested jump to results search all github jump to search all github jump to search all github jump to sign in sign up where the world builds software millions of developers and companies build ship and maintain their software on github the largest and most advanced development platform in the world email address sign up for github million developers million organizations million repositories fortune build like the best with github enterprise take collaboration to the next level with security and administrative features built for teams start free trial contact sales code collaborate develop automate secure community sign up give your code home in the cloud record or rewind any change to your code to keep you and your team in sync host it all for free with unlimited public and private repositories sign up for github jasonetco added some commits minutes ago updated assets tests license octocat classifier octopus cat mag https https https as the name suggests octocat classifier is used to determine whether given image contains an octocat it is trained with images from the octodex images shared with myoctocat on twitter and photographs of laptops with octocat stickers on them installation git clone https gh repo create created repository on github added remote https git push origin main support octocats shared on twitter created build on what been built write less code thanks to the world largest software package registry find the best projects to accelerate your work then share it with the world with npm and github packages npm install eslint eslint added packages from contributors and audited packages in packages are looking for funding run npm fund for details found vulnerabilities added package for javascript linting git checkout origin collaborators ready player two scale your team to any size in the cloud create new organization for free better code starts with pull requests conversations around your code where you can experiment squash bugs and build new features code review is built in pull requests cover the entire review flow propose changes browse code ask for input make suggestion and sign off in one place know when your pull request is ready to merge when everything green reviews approved check tests passing check check conflicts ship it already git merge keep work moving review or merge code manage notifications browse repositories and more with github mobile available for ios and android bash gh pr status relevant pull requests in current branch there is pull request associated with main created by you you have open pull requests requesting code review from you correctly handle and set empty fields octocat emptybody checks passing added confirmation steps for risk octocat confirmations x checks failing work however you want put gui on it with github desktop or stay in the command line with github cli available for macos windows and linux github cli is available on macos windows and linux github desktop is available on macos and windows blazing fast cloud developer environments with codespaces learn more about github codespaces the future of code is in the cloud not your local copy codespaces gives you complete configurable dev environment on top of powerful vm in minutes visual studio code in your browser full stop codespaces brings the world most popular desktop editor to every repo code build test use the terminal and open pull requests from anywhere customize to your heart desire add your favorite vs code extensions create devcontainer config file install new themes and tweak your settings automate anything with github actions learn more about github actions setup enhance your devops and script your entire workflow with github actions kick off automated workflows with github events like push issue creation merge and release actions write your own or import actions from the open source community all within our editor feeling stuck browse the actions developer docs as you code explore the actions marketplace you can have it all run actions in any language or operating system on linux macos windows arm and containers or all at once with matrix builds with million jobs run per month you in good company with actions the number one ci service on the world largest developer platform speaking of automation dependabot keeps your projects up to date with automated pull requests that update all your dependencies just review and merge to keep your software secure learn more about dependabot find and fix vulnerabilities before you merge learn more about advanced security secure your code as you write it codeql code scanning automatically reviews every change to your codebase and identifies known vulnerabilities before they ever reach production vulnerabilities found fixed deserialized data security vulnerability keep your secrets we automatically scan repositories for oauth tokens api keys personal tokens and more if we find one we notify you and the partner that issued it to invalidate the secret oauth token found replaced oauth token with key vault value found vulnerability our security advisory remediation tools help developers identify and disclose them responsibly so maintainers can patch them in dedicated private workspaces the home for all developers including you github discussions is dedicated space for your community to come together ask and answer questions and have conversations learn how to get started with discussions amplify your voice in your own personal readme on your profile tell the story of your work through your repositories contributions and technologies of choice sophshep started sponsoring you for days ago joshaber started sponsoring you for days ago pmarsceill started sponsoring you for days ago that open source code you wrote for yourself might just help someone else get paid for building what matters to you with github sponsors support the projects you depend on too to developers zero fees learn more about sponsors make your contribution small experiments inspired inventions and the software everyone depends on the code you write on github can reach one codebase or millions sign up for github contact sales an open source machine learning framework for everyone build blazing fast modern apps and websites with react open source home automation that puts local control and privacy first empowering everyone to build reliable and efficient software flutter makes it easy and fast to build beautiful apps for mobile and beyond container scheduling and management the swift programming language ansible is radically simple it automation platform terraform enables you to safely and predictably create change and improve infrastructure delightful framework for managing your zsh configuration declarative efficient and flexible javascript library for building user interfaces the package manager for javascript product features security team enterprise customer stories the readme project pricing resources roadmap platform developer api partners atom electron github desktop support docs community forum professional services learning lab status contact github company about blog careers press inclusion social impact shop github on twitter github on facebook github on youtube github on linkedin github organization on github c github terms privacy site map what is git you ca perform that action at this time you signed in with another tab or window reload to refresh your session you signed out in another tab or window reload to refresh your session",
            ],
            _version_: 1718181765860818944,
            score: 23.211258,
          },
          {
            title: ["GitHub: Where the world builds software · GitHub"],
            _snippet_: [" GitHub: Where the world builds software · GitHub "],
            size: [1269.0],
            url: ["https://github.com/"],
            base_url: ["github.com"],
            id: "e54fa174-227a-4d94-a88d-8247bd3710f9",
            text: [
              "github where the world builds software github skip to content github longer supports this web browser learn more about the browsers we support sign up why github features mobile actions codespaces packages security code review issues integrations github sponsors customer stories team enterprise explore explore github learn and contribute topics collections trending learning lab open source guides connect with others the readme project events community forum github education github stars program marketplace pricing plans compare plans contact sales education search all github jump to suggested jump to results search all github jump to search all github jump to search all github jump to sign in sign up where the world builds software millions of developers and companies build ship and maintain their software on github the largest and most advanced development platform in the world email address sign up for github million developers million organizations million repositories fortune build like the best with github enterprise take collaboration to the next level with security and administrative features built for teams start free trial contact sales code collaborate develop automate secure community sign up give your code home in the cloud record or rewind any change to your code to keep you and your team in sync host it all for free with unlimited public and private repositories sign up for github jasonetco added some commits minutes ago updated assets tests license octocat classifier octopus cat mag https https https as the name suggests octocat classifier is used to determine whether given image contains an octocat it is trained with images from the octodex images shared with myoctocat on twitter and photographs of laptops with octocat stickers on them installation git clone https gh repo create created repository on github added remote https git push origin main support octocats shared on twitter created build on what been built write less code thanks to the world largest software package registry find the best projects to accelerate your work then share it with the world with npm and github packages npm install eslint eslint added packages from contributors and audited packages in packages are looking for funding run npm fund for details found vulnerabilities added package for javascript linting git checkout origin collaborators ready player two scale your team to any size in the cloud create new organization for free better code starts with pull requests conversations around your code where you can experiment squash bugs and build new features code review is built in pull requests cover the entire review flow propose changes browse code ask for input make suggestion and sign off in one place know when your pull request is ready to merge when everything green reviews approved check tests passing check check conflicts ship it already git merge keep work moving review or merge code manage notifications browse repositories and more with github mobile available for ios and android bash gh pr status relevant pull requests in current branch there is pull request associated with main created by you you have open pull requests requesting code review from you correctly handle and set empty fields octocat emptybody checks passing added confirmation steps for risk octocat confirmations x checks failing work however you want put gui on it with github desktop or stay in the command line with github cli available for macos windows and linux github cli is available on macos windows and linux github desktop is available on macos and windows blazing fast cloud developer environments with codespaces learn more about github codespaces the future of code is in the cloud not your local copy codespaces gives you complete configurable dev environment on top of powerful vm in minutes visual studio code in your browser full stop codespaces brings the world most popular desktop editor to every repo code build test use the terminal and open pull requests from anywhere customize to your heart desire add your favorite vs code extensions create devcontainer config file install new themes and tweak your settings automate anything with github actions learn more about github actions setup enhance your devops and script your entire workflow with github actions kick off automated workflows with github events like push issue creation merge and release actions write your own or import actions from the open source community all within our editor feeling stuck browse the actions developer docs as you code explore the actions marketplace you can have it all run actions in any language or operating system on linux macos windows arm and containers or all at once with matrix builds with million jobs run per month you in good company with actions the number one ci service on the world largest developer platform speaking of automation dependabot keeps your projects up to date with automated pull requests that update all your dependencies just review and merge to keep your software secure learn more about dependabot find and fix vulnerabilities before you merge learn more about advanced security secure your code as you write it codeql code scanning automatically reviews every change to your codebase and identifies known vulnerabilities before they ever reach production vulnerabilities found fixed deserialized data security vulnerability keep your secrets we automatically scan repositories for oauth tokens api keys personal tokens and more if we find one we notify you and the partner that issued it to invalidate the secret oauth token found replaced oauth token with key vault value found vulnerability our security advisory remediation tools help developers identify and disclose them responsibly so maintainers can patch them in dedicated private workspaces the home for all developers including you github discussions is dedicated space for your community to come together ask and answer questions and have conversations learn how to get started with discussions amplify your voice in your own personal readme on your profile tell the story of your work through your repositories contributions and technologies of choice sophshep started sponsoring you for days ago joshaber started sponsoring you for days ago pmarsceill started sponsoring you for days ago that open source code you wrote for yourself might just help someone else get paid for building what matters to you with github sponsors support the projects you depend on too to developers zero fees learn more about sponsors make your contribution small experiments inspired inventions and the software everyone depends on the code you write on github can reach one codebase or millions sign up for github contact sales an open source machine learning framework for everyone build blazing fast modern apps and websites with react open source home automation that puts local control and privacy first empowering everyone to build reliable and efficient software flutter makes it easy and fast to build beautiful apps for mobile and beyond container scheduling and management the swift programming language ansible is radically simple it automation platform terraform enables you to safely and predictably create change and improve infrastructure delightful framework for managing your zsh configuration declarative efficient and flexible javascript library for building user interfaces the package manager for javascript product features security team enterprise customer stories the readme project pricing resources roadmap platform developer api partners atom electron github desktop support docs community forum professional services learning lab status contact github company about blog careers press inclusion social impact shop github on twitter github on facebook github on youtube github on linkedin github organization on github c github terms privacy site map what is git you ca perform that action at this time you signed in with another tab or window reload to refresh your session you signed out in another tab or window reload to refresh your session",
            ],
            _version_: 1718181815522426880,
            score: 23.211258,
          },
          {
            title: ["Supported browsers - GitHub Docs"],
            text: [
              "supported browsers github docsgithub docsall productsget startedquickstarthello worldset up gitcreate repofork repogithub flowcontributing to projectsbe socialcommunicating on githubgithub glossarygit cheatsheetlearning resourcesonboardinggetting started with your github accountgetting started with github teamgetting started with github enterprise cloudlearning about githubgithub productsgithub language supportgithub advanced securitytypes of github accountsaccess permissionschanges to github planssigning up for githubsign up for new github accountverify your email addressenterprise cloud trialenterprise server trialusing githubfeature previewsupported browsersgithub cligithub desktopgithub for mobilekeyboard shortcutsgithub command paletteconnectivity problemsexplore projectscontribute to open sourcesave repos with starsfollowing peoplegetting started with gitset your usernamecaching credentialsgit passwordsmacos keychain credentialsgit workflowsabout remote repositoriesmanage remote repositoriesassociate text editorshandle line endingsignoring filesusing gitabout gitpush commits to remoteget changes from errorsplitting subfolderabout git subtree mergesabout git rebasegit rebaseresolve conflicts after rebasespecial characters in namesget browsersfree pro teamfree pro teamenterprise cloudenterprise server server server server aeall enterprise releases englishenglishjian zhong wen simplified chinese ri ben yu japanese espanol spanish portugues do brasil portuguese github docsget browsersget startedget startedaccount and profileauthenticationrepositoriesgithubenterprise administratorsbilling and paymentsorganizationscode securitypull requestsgithub issuesgithub actionsgithub codespacesgithub packagessearch on githubdevelopersrest apigraphql apigithub cligithub discussionsgithub sponsorsbuilding communitiesgithub pageseducationgithub desktopatomelectroncodeqlnpmfree pro teamfree pro teamenterprise cloudenterprise server server server server aeall enterprise releases englishenglishjian zhong wen simplified chinese ri ben yu japanese espanol spanish portugues do brasil portuguese supported browsersin this articlefirefox extended support releasebeta and developer buildswe design github to support the latest web browsers we support the current versions of chrome firefox safari and microsoft extended support release we do our best to support firefox latest extended support release esr older versions of firefox may disable some features on github and require the latest version of firefox beta and developer builds you may encounter unexpected bugs in beta and developer builds of our supported browsers if you encounter bug on github in one of these unreleased builds please verify that it also exists in the stable version of the same browser if the bug only exists in the unstable version consider reporting the bug to the browser this doc help you privacy policyhelp us make these docs great all github docs are open source see something that wrong or unclear submit pull contributionor learn how to need help ask the github communitycontact support c github githubpricingdeveloper apitrainingblogabout",
            ],
            _snippet_: ["Supported browsers - GitHub DocsGitHub DocsAll pro"],
            size: [365.0],
            url: ["https://docs.github.com/articles/supported-browsers"],
            base_url: ["docs.github.com"],
            id: "62a22181-8517-4cdb-aede-e308e943c6df",
            _version_: 1718181746187436032,
            score: 20.500225,
          },
          {
            title: ["Supported browsers - GitHub Docs"],
            text: [
              "supported browsers github docsgithub docsall productsget startedquickstarthello worldset up gitcreate repofork repogithub flowcontributing to projectsbe socialcommunicating on githubgithub glossarygit cheatsheetlearning resourcesonboardinggetting started with your github accountgetting started with github teamgetting started with github enterprise cloudlearning about githubgithub productsgithub language supportgithub advanced securitytypes of github accountsaccess permissionschanges to github planssigning up for githubsign up for new github accountverify your email addressenterprise cloud trialenterprise server trialusing githubfeature previewsupported browsersgithub cligithub desktopgithub for mobilekeyboard shortcutsgithub command paletteconnectivity problemsexplore projectscontribute to open sourcesave repos with starsfollowing peoplegetting started with gitset your usernamecaching credentialsgit passwordsmacos keychain credentialsgit workflowsabout remote repositoriesmanage remote repositoriesassociate text editorshandle line endingsignoring filesusing gitabout gitpush commits to remoteget changes from errorsplitting subfolderabout git subtree mergesabout git rebasegit rebaseresolve conflicts after rebasespecial characters in namesget browsersfree pro teamfree pro teamenterprise cloudenterprise server server server server aeall enterprise releases englishenglishjian zhong wen simplified chinese ri ben yu japanese espanol spanish portugues do brasil portuguese github docsget browsersget startedget startedaccount and profileauthenticationrepositoriesgithubenterprise administratorsbilling and paymentsorganizationscode securitypull requestsgithub issuesgithub actionsgithub codespacesgithub packagessearch on githubdevelopersrest apigraphql apigithub cligithub discussionsgithub sponsorsbuilding communitiesgithub pageseducationgithub desktopatomelectroncodeqlnpmfree pro teamfree pro teamenterprise cloudenterprise server server server server aeall enterprise releases englishenglishjian zhong wen simplified chinese ri ben yu japanese espanol spanish portugues do brasil portuguese supported browsersin this articlefirefox extended support releasebeta and developer buildswe design github to support the latest web browsers we support the current versions of chrome firefox safari and microsoft extended support release we do our best to support firefox latest extended support release esr older versions of firefox may disable some features on github and require the latest version of firefox beta and developer builds you may encounter unexpected bugs in beta and developer builds of our supported browsers if you encounter bug on github in one of these unreleased builds please verify that it also exists in the stable version of the same browser if the bug only exists in the unstable version consider reporting the bug to the browser this doc help you privacy policyhelp us make these docs great all github docs are open source see something that wrong or unclear submit pull contributionor learn how to need help ask the github communitycontact support c github githubpricingdeveloper apitrainingblogabout",
            ],
            _snippet_: ["Supported browsers - GitHub DocsGitHub DocsAll pro"],
            size: [365.0],
            url: ["https://docs.github.com/articles/supported-browsers"],
            base_url: ["docs.github.com"],
            id: "3cb5ce79-61f3-421e-b8b7-6c844c13d3cc",
            _version_: 1718181784243404800,
            score: 20.500225,
          },
          {
            title: [
              "Stack Overflow - Where Developers Learn, Share, & Build Careers",
            ],
            _snippet_: [" Stack Overflow - Where Developers Learn, Share, &"],
            size: [1174.0],
            url: ["https://stackoverflow.com"],
            base_url: ["stackoverflow.com"],
            id: "9f6255a7-4717-4ac8-9707-85ffb09f8775",
            text: [
              "stack overflow where developers learn share build careers stack overflow about products for teams stack overflow public questions answers stack overflow for teams where developers technologists share private knowledge with coworkers jobs programming related technical career opportunities talent recruit tech talent build your employer brand advertising reach developers technologists worldwide about the company loading log in sign up current community stack overflow help chat meta stack overflow your communities sign up or log in to customize your list more stack exchange communities company blog home public questions tags users collectives explore collectives find job jobs companies teams stack overflow for teams collaborate and share knowledge with private group create free team what is teams teams create free team collectives on stack overflow find centralized trusted content and collaborate around the technologies you use most learn more teams q for work connect and share knowledge within single location that is structured and easy to search learn more find the best answer to your technical question help others answer theirs join the community or search content want secure private space for your technical knowledge get started for large organizations for small teams every developer tab open to stack overflow million monthly visitors to stack overflow stack exchange billion times developer got help since roi from companies using stack overflow for teams stack overflow for teams instances active every day public platform building the definitive collection of coding questions answers space to find and contribute answers to technical challenges and one of the most popular websites in the world join the community or search content private collaboration knowledge sharing saas platform for companies platform to increase productivity decrease cycle times accelerate time to market and protect institutional knowledge get started for large organizations for small teams thousands of organizations around the globe use stack overflow for teams capture your company knowledge and context in discoverable format to unblock your team take tour of teams increase productivity if somebody somewhere the right answer suddenly you have it too collaborate better in world accelerate time to market shorten the time between initial idea and complete product take delays and misinformation out of the equation protect institutional knowledge people come and people go but if you capture their contributions in one central place that expertise sticks around ensure your company stays on course here are just few types of technologists that we help devops engineers shipping new products and features requires teamwork and coordination forget checklists and long docs one ever reads data scientists business decisions are better when backed by data give visibility to the data that support your strategies software engineers help engineers be more efficient and streamline knowledge sharing using tool they already love and trust support teams level up your support by providing information to your customers using natural interface questions and answers engineering leaders help your team get the information they need to do their job reduce burnout and help engineers grow and learn together annual billing discount free free credit card required chatops integrations slack microsoft teams your own private space hosted on structured and searchable knowledge base create free team always free up to teammates basic usd usd per teammate month single sso with saml okta integration chatops integrations slack microsoft teams your own private space hosted on structured and searchable knowledge base get started up to teammates recommended business usd usd per teammate month all the features of basic plus knowledge with articles additional integrations chatops jira github okta group content together into collections usage and adoption metrics priority customer support content health tools get started unlimited teammates enterprise custom pricing let talk about what you need premium features of business plus unlimited teams within your instance flexible hosting options cloud or robust read and write api your own customer success and community building representative uptime sla and priority support content health tools dec request demo unlimited teammates forrester consulting study shows return on investment with stack overflow for teams the world largest telecom firm saved in deflected support cases with our centralized knowledge base experts at software platform unqork had more time to work on projects after using teams you can save time and money with stack overflow for teams calculate your roi microsoft teams integrates with and improves other tools all plans come with integrations for chatops tools slack microsoft teams in order to cut down on pings limit distractions and make the tools even more powerful business and enterprise customers get access to jira github okta integrations slack some of the premium features available with paid tiers robust read and write api single with ad or saml your own customer success representative uptime sla and priority support stack overflow for teams been resource for our entire company not only for developers to solve problems it also enabled our sales field to answer technical questions that help them close deals director of product management microsoft engineers should help solve the hardest questions the unknowns where being familiar with how the product was built is essential but we do want to keep answering solved problems over and over again that where stack overflow for teams really helps director of engineering elastic cloud as we started to use stack overflow for teams and saw how nice it was to have repository of information we started to see it spread to other teams our customer support team started using it our people success team started using it next thing we knew we had slack integrations all over the place engineering expensify what we love about stack overflow for teams is that it very dynamic tool there just so many ways to use this as liaison between different teams and different knowledge bases software engineer box additional products that reach and engage developers technologists reach the world largest audience of developers and technologists connecting communities with the specific technologies they use the most build your employer brand to attract tech talent programming related technical career opportunities about the company want to work here current job openings explore technical topics and other disciplines across q communities from server fault to super user much of the stack exchange network continues our mission to empower the world to develop technology through collective knowledge other sites on the stack exchange network further encourage knowledge sharing across topics such as cooking and medicine explore the network build private community to share technical or knowledge create free team stack overflow questions jobs developer jobs directory salary calculator help mobile products teams talent advertising enterprise company about press work here legal privacy policy terms of service contact us cookie settings cookie policy stack exchange network technology culture recreation life arts science professional business api data blog facebook twitter linkedin instagram site design logo c stack exchange inc user contributions licensed under cc rev stack overflow works best with javascript enabled your privacy by clicking accept all cookies you agree stack exchange can store cookies on your device and disclose information in accordance with our cookie policy accept all cookies customize settings",
            ],
            _version_: 1718180784971448320,
            score: 1.6872623,
          },
          {
            title: [
              "Contenido desbordado - Aprende sobre desarrollo web | MDN",
            ],
            _snippet_: ["Contenido desbordado - Aprende sobre desarrollo we"],
            size: [1901.0],
            url: [
              "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Overflowing_content",
            ],
            base_url: ["developer.mozilla.org"],
            id: "9aa7518f-34f9-4c75-8736-3302205fce73",
            text: [
              "contenido desbordado aprende desarrollo web mdnskip to main contentskip to searchskip to select languagetechnologiestechnologies overviewhtmlcssjavascriptgraphicshttpapisbrowser extensionsmathmlreferences guideslearn web developmenttutorialsreferencesdeveloper guidesaccessibilitygame development more docsfeedbacksend feedbackcontribute to mdnreport content issue report platform issue search mdnaprende desarrollo webcssbloques construccion csscontenido desbordadochange languageview in englishesta pagina traducida ingles comunidad mantiene activamente puede desactualizada si desea ayudar mantenerlo descubra activar configuraciones regionales of contentstable of contents desbordamiento css trata evitar perdida datos propiedad overflowoverflow establece contexto formato bloquedesbordamiento deseado diseno webpon prueba conocimientosresumenen modulocontenido desbordado anterior overview building blocks siguiente articulo veremos concepto importante css desbordamiento desbordamiento sucede demasiado contenido pueda caber comodamente caja guia aprenderas administrarlo prerrequisitos conocimientos basicos informatica tener software basico instalado conocimientos basicos trabajar archivos conocimientos basicos html vease introduccion html nociones css vease primeros pasos css objetivo comprender desbordamiento gestionarlo desbordamiento sabemos css dentro caja podemos restringir tamano cajas asignandoles valores width height desbordamiento sucede demasiado contenido caja cabe comodamente css proporciona varias herramientas administrar desbordamiento ademas concepto resulta util conocer primeras etapas encontraras situaciones desbordamiento bastante frecuencia escribir css especialmente profundices compaginacion css trata evitar perdida datos vamos comenzar dos ejemplos demuestran comporta css defecto ocurre desbordamiento primero consiste caja restringido dimension darle altura luego anadido mas contenido cabe caja contenido desborda distribuye desordenadamente parrafo debajo caja segundo consiste palabra dentro caja cuya dimension linea restringida caja hecho demasiado pequena palabra quepa desborda debes preguntando css tomado defecto enfoque mas bien desarreglado provocar desbordamiento desordenado contenido ocultar contenido adicional hacer crecer caja siempre posible css oculta contenido hacerlo provocaria perdida datos generalmente problema terminos css significa parte contenido desaparece problema desaparezca contenido podria ser notaras desaparecido visitantes podrian darse cuenta desaparecido contenido si trata boton envio datos formulario nadie podria completar formulario gran problema asi vez css tiende desbordarse modo visible probable des cuenta desarreglo peor casos visitante sitio web informe parte contenido superpone debas arreglarlo si restringido tamano caja anchura altura determinadas css asume sabes haces gestionas correctamente potencial desbordamiento general restringir tamano bloque problematico texto va poner caja puede haber mas texto esperabas disenar sitio tamano texto puede ser mayor ejemplo si usuario aumenta articulos siguientes veremos diferentes modos controlar tamano podrian ser menos propensos desbordarse embargo si necesitas tamano fijo tambien puedes controlar comporta desbordamiento sigue leyendo propiedad overflowla propiedad overflow modo tomas control desbordamiento elemento dices navegador desea comporte valor predeterminado propiedad overflow visible forma predeterminada vamos poder ver desborda contenido si deseas cortar contenido desborda puedes establecer valor overflow hidden caja hace exactamente dice ocultar desbordamiento puede hacer cosas desaparezcan solo debes utilizar opcion si ocultar contenido va causar ningun problema quizas gustaria anadir barras desplazamiento contenido desborde si usas overflow scroll navegador siempre mostrara barras desplazamiento incluso suficiente contenido pueda desbordarse posible desees hacer evita aparezcan desaparezcan barras desplazamiento segun contenido si caja siguiente eliminas parte contenido observaras barras desplazamiento permanecen aun desplazar solo pistas barra desplazamiento ejemplo anterior solo necesitamos desplazarnos eje embargo obtenemos barras desplazamiento ambos ejes lugar puedes usar propiedad establecer scroll poder desplazarte solo eje tambien puedes desplazarte eje x usando aunque forma recomendada manejar palabras largas si necesitas lidiar palabra larga caja pequena puedes consultar propiedades ademas metodos expuestos articulo elementos dimensionado css pueden ayudarte crear cuadros adapten mejor cantidades variables contenido igual desplazamiento obtendras barra desplazamiento dimension desplazamiento independientemente si suficiente contenido provocar barra desplazamiento nota observa puedes especificar desplazamiento x utilizando propiedad overflow pasando dos valores si especificas dos palabras clave primera aplica segunda contrario fijan mismo valor ejemplo overflow scroll hidden establece scroll hidden si deseas aparezcan barras desplazamiento solo si mas contenido cabe caja utiliza overflow auto caso navegador decide si muestra barras desplazamiento navegadores escritorio solo suelen hacerlo contenido suficiente causar desbordamiento ejemplo siguiente elimina parte contenido quepa caja observaras barras desplazamiento desaparecen overflow establece contexto formato bloqueen css concepto conocido block formatting context bfc contexto formato bloque debas preocuparte demasiado momento util saber usas valor overflow scroll auto creas bfc resultado contenido caja acabas cambiar valor overflow convierte minidiseno propio cosas estan contenedor pueden meterse puede sobresalir caja hacia diseno circundante permitir comportamiento desplazamiento poder crear experiencia desplazamiento consistente contenido caja contenido puede superponerse elementos deseado diseno weblos metodos diseno modernos explicados modulo disenar css gestionan bien desbordamiento sido disenados hacer frente hecho tendemos poder predecir cuanto contenido habra web embargo pasado desarrolladores menudo usaban alturas fijas tratar alinear fondos cajas realidad tenian relacion si metodo fragil aplicacion heredada ocasionalmente puede aparecer caja contenido superpone contenido pagina si ves sabras trata desbordamiento ideal seria volver calcular diseno tener confiar tamanos caja fijos desarrollar sitio web siempre debes tener cuenta problemas desbordamiento debes probar disenos cantidades grandes pequenas contenido aumentar tamano letra asegurarte css puede hacerle frente ningun problema probable cambiar valor overflow ocultar contenido anadir barras desplazamiento debas reservar solo pocos casos especiales realmente desees caja barra desplazamiento prueba conocimientoshay absorber leccion recuerdas informacion mas importante comprobarlo ve test your skills breve articulo introducido concepto desbordamiento ahora comprendes css intenta hacer invisible desbordamiento contenido provoca perdida datos descubierto puedes gestionar desbordamiento potencial tambien debes probar trabajo asegurarte causa desbordamiento problematico accidentalmente anterior overview building blocks siguiente modulo cascada herencia selectores css selectores tipo clase id selectores atributo pseudoclases pseudoelementos selectores combinacion modelo cajas fondos bordes uso diferentes direcciones texto desbordamiento contenidos valores unidades elementos dimensionado css imagenes media elementos formulario estilo tablas depurar css organizar css last modified dec by mdn contributorschange your languageselect your preferred language espanolenglish us francaisri ben yu hangugeorusskiizhong wen jian change languagerelated topics complete beginners start here getting started with the web getting started with the web overview installing basic software what will your website look like dealing with files html basics css basics javascript basics publishing your website how the web works html structuring the web introduction to html introduction to html overview getting started with html what in the head metadata in html html text fundamentals creating hyperlinks advanced text formatting document and website structure debugging html assessment marking up letter assessment structuring page of content multimedia and embedding multimedia and embedding overview images in html video and audio content from object to iframe other embedding technologies adding vector graphics to the web responsive images assessment mozilla splash page html tables html tables overview html table basics html table advanced features and accessibility assessment structuring planet data css styling the web css first steps css first steps overview what is css getting started with css how css is structured how css works using your new knowledge css building blocks css building blocks overview cascade and inheritance css selectors the box model backgrounds and borders handling different text directions overflowing content values and units sizing items in css images media and form elements styling tables debugging css organizing your css styling text styling text overview fundamental text and font styling styling lists styling links web fonts assessment typesetting community school homepage css layout css layout overview introduction to css layout normal flow flexbox grids floats positioning layout responsive design beginner guide to media queries legacy layout methods supporting older browsers fundamental layout comprehension javascript dynamic scripting javascript first steps javascript first steps overview what is javascript first splash into javascript what went wrong troubleshooting javascript storing the information you need variables basic math in javascript numbers and operators handling text strings in javascript useful string methods arrays assessment silly story generator javascript building blocks javascript building blocks overview making decisions in your code conditionals looping code functions reusable blocks of code build your own function function return values introduction to events assessment image gallery introducing javascript objects introducing javascript objects overview object basics javascript for beginners object prototypes inheritance in javascript working with json data object building practice assessment adding features to our bouncing balls demo asynchronous javascript asynchronous javascript overview general asynchronous programming concepts introducing asynchronous javascript cooperative asynchronous java script timeouts and intervals graceful asynchronous programming with promises making asynchronous programming easier with async and await choosing the right approach web apis web apis introduction to web apis manipulating documents fetching data from the server third party apis drawing graphics video and audio apis storage web forms working with user data core forms learning pathway web forms overview your first form how to structure web form basic native form controls the input types other form controls styling web forms advanced form styling ui form validation sending form data advanced forms articles how to build custom form controls sending forms through javascript css property compatibility table for form controls accessibility make the web usable by everyone accessibility guides accessibility overview what is accessibility html good basis for accessibility css and javascript accessibility best practices basics accessible multimedia mobile accessibility accessibility assessment assessment accessibility troubleshooting tools and testing web development tools web development tools index tooling overview command line crash course package management basics introducing complete toolchain deploying our app introduction to frameworks frameworks overview framework main features react getting started with react beginning our react list componentizing our react app react interactivity events and state react interactivity editing filtering conditional rendering accessibility in react react resources ember getting started with ember ember app structure and componentization ember interactivity events classes and state ember interactivity footer functionality conditional rendering routing in ember ember resources and troubleshooting vue getting started with vue creating our first vue component rendering list of vue components adding new form vue events methods and models styling vue components with css using vue computed properties vue conditional rendering editing existing focus management with vue refs vue resources svelte getting started with svelte starting our svelte list app dynamic behavior in svelte working with variables and props componentizing our svelte app advanced svelte reactivity lifecycle accessibility working with svelte stores typescript support in svelte deployment and next steps angular getting started with angular beginning our angular list app styling our angular app creating an item component filtering our items building angular applications and further resources git and github git and github overview hello world git handbook forking projects about pull requests mastering issues cross browser testing cross browser testing overview introduction to cross browser testing strategies for carrying out testing handling common html and css problems handling common javascript problems handling common accessibility problems implementing feature detection introduction to automated testing setting up your own test automation environment website programming first steps first steps overview introduction to the overview web frameworks website security django web framework python django web framework python overview introduction setting up development environment tutorial the local library website tutorial part creating skeleton website tutorial part using models tutorial part django admin site tutorial part creating our home page tutorial part generic list and detail views tutorial part sessions framework tutorial part user authentication and permissions tutorial part working with forms tutorial part testing django web application tutorial part deploying django to production web application security assessment diy mini blog express web framework express web framework overview introduction setting up node express development environment express tutorial the local library website express tutorial part creating skeleton website express tutorial part using database with mongoose express tutorial part routes and controllers express tutorial part displaying library data express tutorial part working with forms express tutorial part deploying to production further resources common questions html questions css questions javascript questions web mechanics tools and setup design and accessibility web technologieslearn web developmentabout mdnfeedbackaboutmdn web docs storecontact usfirefoxmdnmdn on twittermdn on githubmozillamozilla on twittermozilla on instagram c mozilla and individual contributors content is available under these",
            ],
            _version_: 1718181724023685120,
            score: 1.4432518,
          },
        ],
      },
      facets: {
        count: 8,
        url: {
          buckets: [
            { val: "github.com", count: 4 },
            { val: "docs.github.com", count: 2 },
            { val: "developer.mozilla.org", count: 1 },
            { val: "stackoverflow.com", count: 1 },
          ],
        },
        size: {
          buckets: [
            { val: 77.0, count: 2 },
            { val: 365.0, count: 2 },
            { val: 1269.0, count: 2 },
            { val: 1174.0, count: 1 },
            { val: 1901.0, count: 1 },
          ],
        },
      },
      spellcheck: {
        suggestions: [
          "vani",
          {
            numFound: 3,
            startOffset: 0,
            endOffset: 4,
            suggestion: ["vanit", "vari", "vano"],
          },
        ],
        collations: [],
      },
    },
  ],
};

//Services
const SEARCH_SERVICE = `http://localhost:8093/query`;
//DOM Elements
const SEARCH_INPUT = document.getElementById("SearchInput");
const SEARCH_BUTTON = document.getElementById("buttonSearch");
const CONTAINER_RESULTS = document.getElementById("results-container");
const CONTAINER_FACETS = document.getElementById("facets-container");

//Lists
let suggestions = ["Perro", "Gato", "Tortuga", "Perrote"];
/*
var docs = documento['results']['0']['response']['docs'];
let facets = documento['results']['0']['facets']['url']['buckets'];
*/
var docs = {};
var facets = {};
//Functions
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

const generateResults = (docs, container) => {
  if (docs.length == 0) {
    container.innerHTML = "No se encontraron resultados";
    return;
  }

  let TemplateHTML = ``;
  docs.forEach((element) => {
    TemplateHTML += `<div>
        <h2>
          <a href="${element["url"]}"> ${element["title"]}</a>
        </h2>
        <p>${element["_snippet_"]}}...</p>
      </div>`;
  });
  container.innerHTML = TemplateHTML;
};

const generateFacets = (facets, container) => {
  if (facets["count"] == 0) {
    return;
  }
  let TemplateHTML = ``;
  facets.forEach((element) => {
    TemplateHTML += `<button id="${element["val"]}">${element["val"]}(${element["count"]})</button>`;
  });
  container.innerHTML = TemplateHTML;
};

const getResponse = async (direction) => {
  try {
    /*
      let Search = SEARCH_INPUT.value;
      const response = await fetch(direction + `?q=${Search}`,{
          method: 'GET',
          mode: "cors",
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"*",
            //'Access-Control-Allow-Headers': "*"
          }
      });
      let data = await response.json();
      console.log(data);
      */
    docs = request2["results"]["0"]["response"]["docs"];
    facets = request2["results"]["0"]["facets"]["url"]["buckets"];
    generateResults(docs, CONTAINER_RESULTS);
    generateFacets(facets, CONTAINER_FACETS);
  } catch (error) {
    CONTAINER_RESULTS.innerHTML = "ocurrio un error indesperado";
  }
};

const tetsFake = (direction) => {
  alert(direction);
  docs = request2["results"]["0"]["response"]["docs"];
  facets = request2["results"]["0"]["facets"]["url"]["buckets"];
  generateResults(docs, CONTAINER_RESULTS);
  generateFacets(facets, CONTAINER_FACETS);
};

//Events
CONTAINER_FACETS.addEventListener("click", (e) => {
  id = e.target.getAttribute("id");
  const result = docs.filter((doc) => doc["base_url"][0] === id);
  generateResults(result, CONTAINER_RESULTS);
});

SEARCH_BUTTON.addEventListener("click", () => {
  //getResponse(SEARCH_SERVICE);
  tetsFake(SEARCH_SERVICE);
});

//Functions excecution
autocomplete(SEARCH_INPUT, suggestions);
console.log(request2);